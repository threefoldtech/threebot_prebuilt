import uuid
import time
import caldav
import vobject
import datetime
from Jumpscale import j


class calendar(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):
        self.base_url = "http://{}:{}@127.0.0.1:8851"
        self.client = None
        bcdb = j.data.bcdb.get("caldav")
        self.calendar_model = bcdb.model_get(url="tf.caldav.calendar.1")
        self.event_model = bcdb.model_get(url="tf.caldav.event.1")

    def _verfiy_time(self, dtstart, dtend, user_session=None):
        if not (dtstart and dtend):
            raise j.exceptions.Input("Need to set set both dtstart and dtend")
        if dtstart > dtend:
            raise j.exceptions.Input("dtstart needs to be before dtend")

    def login(self, username, password, user_session=None):
        """
        ```in
        username = (S)
        password = (S)
        ```
        """
        url = self.base_url.format(username, password)
        client = caldav.DAVClient(url)
        self.client = client.principal()

    def _verify_client(self):
        if not self.client:
            raise j.exceptions.Runtime("Use login method to enable the actor")

    def _get_calendar(self, cal_id, raise_error=True):
        for calendar in self.client.calendars():
            if j.sal.fs.getBaseName(calendar.canonical_url) == cal_id:
                return calendar
        if raise_error:
            raise j.exceptions.NotFound(f"Couldn't find calendar with id: {cal_id}")

    def add(self, calendar, schema_out=None, user_session=None):
        """
        ```in
        calendar = (O) !tf.caldav.calendar.1
        ```
        ```out
        calendar = (O) !tf.caldav.calendar.1
        ```
        """
        self._verify_client()
        uuid_ = str(uuid.uuid4())
        self.client.make_calendar(calendar.display_name, uuid_)

        c = self.calendar_model.find(calendar_id=uuid_)[0]
        c.color = calendar.color
        c.description = calendar.description
        props = j.data.serializers.json.loads(c.props)
        props['C:calendar-description'] = calendar.description
        props["ICAL:calendar-color"] = calendar.color
        c.props = j.data.serializers.json.dumps(props)
        c.save()
        output = schema_out.new()
        output.calendar = c
        return output

    def get(self, calendar_id, schema_out=None, user_session=None):
        """
        ```in
        calendar_id = (S)
        ```
        ```out
        calendar = !tf.caldav.calendar.1
        ```
        """
        self._verify_client()
        calendars = self.calendar_model.find(calendar_id=calendar_id)
        if not calendars:
            raise j.exceptions.NotFound(f"Couldn't find calendar with id: {calendar_id}")
        return calendars[0]

    def delete(self, calendar_id, user_session=None):
        """
        ```in
        calendar_id = (S)
        ```
        """
        self._verify_client()
        calendar = self._get_calendar(calendar_id, raise_error=False)
        if calendar:
            calendar.delete()

    def list(self, schema_out=None, user_session=None):
        """
        ```out
        calendars = (LO) !tf.caldav.calendar.1
        ```
        """
        self._verify_client()
        output = schema_out.new()
        output.calendars = self.calendar_model.find()
        return output

    def add_event(self, event, schema_out=None, user_session=None):
        """
        ```in
        event = (O) !tf.caldav.event.1
        ```
        ```out
        event = (O) !tf.caldav.event.1
        ```
        This actor method is used to add event (only used to add invitation)
        """
        self._verify_client()
        self._verfiy_time(event.dtstart, event.dtend)
        calendar = self._get_calendar(event.calendar_id)
        cal_object = vobject.iCalendar()

        event.item_id = str(uuid.uuid4())
        cal_object.add("vevent")
        cal_object.vevent.add("uid").value = event.item_id
        cal_object.vevent.add("summary").value = event.title
        cal_object.vevent.add("description").value = event.description
        cal_object.vevent.add("location").value = event.location

        # @TODO: Add attachments
        timezone = vobject.icalendar.getTzid(event.timezone)
        start = cal_object.vevent.add("dtstart")
        start.value = datetime.datetime.fromtimestamp(event.dtstart, timezone)
        end = cal_object.vevent.add("dtend")
        end.value = datetime.datetime.fromtimestamp(event.dtend, timezone)
        calendar.add_event(cal_object.serialize())
        return self.event_model.find(item_id=f"{event.item_id}.ics")[0]

    def get_event(self, event_id, schema_out=None, user_session=None):
        """
        ```in
        event_id = (S)
        ```
        ```out
        events = (O) !tf.caldav.event.1
        ```
        """
        events = self.event_model.find(item_id=event_id)
        if not events:
            raise j.exceptions.NotFound(f"Couldn't find event with id: {event_id}")
        return events[0]

    def list_events(self, event, schema_out=None, user_session=None):
        """
        ```in
        event = (O) !tf.caldav.event.1
        ```
        ```out
        events = (LO) !tf.caldav.event.1
        ```
        """
        output = schema_out.new()
        calendars = self.calendar_model.find(calendar_id=event.calendar_id)
        if not calendars:
            return output

        calendar = calendars[0]
        result = []
        for item in calendar.items:
            if event.title and event.title != item.title:
                continue
            if event.description and event.description != item.description:
                continue
            if event.location and event.location != item.location:
                continue
            if event.timezone and event.timezone != item.timezone:
                continue

            skip = False
            if event.dtstart:
                skip = item.dtstart < event.dtstart

            if event.dtend:
                skip = skip or item.dtend > event.dtend

            if skip:
                continue

            result.append(item)
        output.events = result
        return output

    def delete_event(self, calendar_id, event_id, user_session=None):
        """
        ```in
        calendar_id = (S)
        event_id = (S)
        ```
        """
        self._verify_client()
        calendar = self._get_calendar(calendar_id)
        try:
            event = calendar.event_by_uid(event_id.replace('.ics', ''))
            event.delete()
        except caldav.error.NotFoundError:
            pass

    def edit_event(self, event, schema_out=None, user_session=None):
        """
        ```in
        event = (O) !tf.caldav.event.1
        ```
        ```out
        event = (O) !tf.caldav.event.1
        ```
        """
        self._verify_client()
        self._verfiy_time(event.dtstart, event.dtend)

        props = ["summary", "dtstart", "dtend", "description", "location"]
        calendar = self._get_calendar(event.calendar_id)

        # timezone does npt exist (None) or wrong
        try:
            timezone = vobject.icalendar.getTzid(event.timezone or 'UTC')
        except:
            raise j.exceptions.NotFound(f"wrong time zone: {event.timezone}")

        try:
            e = calendar.event_by_uid(event.item_id.replace('.ics', ''))
        except caldav.error.NotFoundError:
            raise j.exceptions.NotFound(f"Couldn't find event with uid: {event.item_id}")
        event_obj = vobject.readOne(e.data)
        for prop in props:
            if prop == 'summary':
                value = getattr(event, 'title', None)
            else:
                value = getattr(event, prop, None)
            if value:
                if prop.startswith("dt"):
                    value = datetime.datetime.fromtimestamp(value, timezone)
                getattr(event_obj.vevent, prop).value = value

        # update
        e = self.event_model.find(item_id=event.item_id)[0]
        e.timezone = timezone.zone
        e.content = event_obj.serialize()
        e.dtstart = event.dtstart
        e.dtend = event.dtend
        e.title = event.title
        e.description = event.description
        e.location = event.location
        e.save()
        return event
