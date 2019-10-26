# calendar

## User Storie

As a 3bot owner I want to display and manage(add,modify,delete) a web calendar through the 3botApp so
that my calendar data will be stored on my 3bot but still accessible from my 3bot app

## Module Requirements

This module will allow :

- add a calendar
- add/modify/delete an event based on a date and a time
- add/modify/delete an alarm to an event
- list events based on a period (define by a From and To date-time)
- list all events of a calendar

## Technical Requirements

We will use the iCalendar [specs](https://www.kanzaki.com/docs/ical/) for the calendar, events and alarm objects.
We should be able to access the calendar through caldav.

Nice to have : grant other user/3bot read/write access to one calendar

- peoples attached
- location
- description
- link to ffconnect ?
- title

## Threebot Actors and Models

For external entities to be able to access that threebot tft explorer we must define some methods to be called via redis protocol.
This is what we call actors and lives in the actors folder. To have an overview on how to call it please refer to the test method in the factory file.
The structure of data during those client /server exchanges are called models and are defined as schema in the models folder.

to sum up an external client would call this threebot actors method through redis protocol exchanging data according to the models.

![3Bot module example with mail module](../doc/images/3bot_actors_models.jpg)

## RUN

to start the threebot server manually

```bash
kosmos -p 'j.servers.threebot.default.start(background=False,web=False)'
```

# actors

**`login`**

- input
 ```
 {
    "args": {
        "username": "admin",
        "password": "admin"
    }
 }
 ```


**`add_calendar`**

- input

     ```
     {
    "args":{
      "calendar": {
        "description":"description",
        "color": "#123abc",
        "display_name": "Calendar1"
      }
    }
}
    ```
- output
    ```
   {
    "calendar": {
        "calendar_id": "56785aa9-95bd-4e0f-872f-b621e80d1915",
        "user_id": "admin",
        "props": "{\"D:displayname\": \"Calendar1\", \"tag\": \"VCALENDAR\", \"C:calendar-description\": \"description\", \"ICAL:calendar-color\": \"#123abc\"}",
        "cache": "",
        "items": [],
        "type": "calendar",
        "display_name": "",
        "description": "description",
        "color": "#123abc",
        "id": 3
    }
}
    ```
**`list`**
- output
```

{
    "calendars": [

        {
            "calendar_id": "56785aa9-95bd-4e0f-872f-b621e80d1915",
            "user_id": "admin",
            "props": "{\"D:displayname\": \"Calendar1\", \"tag\": \"VCALENDAR\", \"C:calendar-description\": \"description\", \"ICAL:calendar-color\": \"#123abc\"}",
            "cache": "",
            "items": [],
            "type": "calendar",
            "display_name": "",
            "description": "description",
            "color": "#123abc",
            "id": 3
        }
    ]
}
```

***get**
- input
```
{
    "args":{
      "calendar_id": "e43050ae-bb01-42bd-8be5-9ecbc5ea98b7"
    	
    }
}
```

- output
```
{
    "calendar_id": "e43050ae-bb01-42bd-8be5-9ecbc5ea98b7",
    "user_id": "admin",
    "props": "{\"D:displayname\": \"Hi Jimber\", \"tag\": \"VCALENDAR\", \"C:calendar-description\": \"test@jimber.org\", \"ICAL:calendar-color\": \"tests@jimber.org\"}",
    "cache": "",
    "items": [],
    "type": "calendar",
    "display_name": "",
    "description": "test@jimber.org",
    "color": "tests@jimber.org",
    "id": 2
}
```

***delete**
- input
```
{
    "args":{
      "calendar_id": "e43050ae-bb01-42bd-8be5-9ecbc5ea98b7"
    	
    }
}
```

**add_event**
- input
```
{
    "args":{
      "event": {
        "description":"desco",
        "title": "title",
        "location": "locas",
        "dtstart": 1571933731,
        "dtend": 1571933750,
        "calendar_id": "f74cc3e7-be95-4eaf-a48d-02edfa777754"
      }
    }
}

```

- output

```
{
    "item_id": "a23672a5-4bce-4282-89e6-8487adf38bf9.ics",
    "user_id": "admin",
    "calendar_id": "f74cc3e7-be95-4eaf-a48d-02edfa777754",
    "content": "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//PYVOBJECT//NONSGML Version 1//EN\r\nBEGIN:VEVENT\r\nUID:a23672a5-4bce-4282-89e6-8487adf38bf9\r\nDTSTART:20191024T161531Z\r\nDTEND:20191024T161550Z\r\nDESCRIPTION:desco\r\nDTSTAMP:20191024T163030Z\r\nLOCATION:locas\r\nSUMMARY:title\r\nEND:VEVENT\r\nEND:VCALENDAR\r\n",
    "epoch": 1571934630,
    "dtstart": 1571933731,
    "dtend": 1571933750,
    "type": "VEVENT",
    "timezone": "UTC",
    "title": "title",
    "description": "desco",
    "location": "locas",
    "attachments": [],
    "id": 3
}
```

**get_event**

- input
```
{
    "args":{
    
    	"event_id": "a23672a5-4bce-4282-89e6-8487adf38bf9.ics"
    }
}
```

- output
```
{
    "item_id": "a23672a5-4bce-4282-89e6-8487adf38bf9.ics",
    "user_id": "admin",
    "calendar_id": "f74cc3e7-be95-4eaf-a48d-02edfa777754",
    "content": "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//PYVOBJECT//NONSGML Version 1//EN\r\nBEGIN:VEVENT\r\nUID:a23672a5-4bce-4282-89e6-8487adf38bf9\r\nDTSTART:20191024T161531Z\r\nDTEND:20191024T161550Z\r\nDESCRIPTION:desco\r\nDTSTAMP:20191024T163030Z\r\nLOCATION:locas\r\nSUMMARY:title\r\nEND:VEVENT\r\nEND:VCALENDAR\r\n",
    "epoch": 1571934630,
    "dtstart": 1571933731,
    "dtend": 1571933750,
    "type": "VEVENT",
    "timezone": "UTC",
    "title": "title",
    "description": "desco",
    "location": "locas",
    "attachments": [],
    "id": 3
}
```

**list_events**

list/filters
choose one or more of these fields provided to filter against
you can filter by 
- start/end datetimes  (epochs)
- timezone
- location
- description
- title
```
{
    "args":{
      "event": {
        "calendar_id": "f5f05de8-d354-4dc3-96c1-1ab62f427c70",
        "title": "title2",
        "dtstart": 157193373,
        "dtend":1571933750,
        "timezone": "UTC",
         "location": "locas2",
         "description": "desco2"

      }
    }
}

```

- example

```
{
    "args":{
      "event": {
        "calendar_id": "f74cc3e7-be95-4eaf-a48d-02edfa777754"
      }
    }
}
```

- output
```
{
    "events": [] # Not found!
}
```

**delete_event**

- input
```
{
    "args":{
    
    	"event_id": "a23672a5-4bce-4282-89e6-8487adf38bf9.ics",
    	"calendar_id": "f74cc3e7-be95-4eaf-a48d-02edfa777754"
    }
}

```

**edit_event**

- input
```
{
    "args":{
      "event": {
        "description":"desco3",
        "title": "title3",
        "location": "locas3",
        "dtstart": 1571933731,
        "dtend": 1571933750,
        "calendar_id": "f5f05de8-d354-4dc3-96c1-1ab62f427c70",
        "item_id": "caa7d6bf-dfbc-4f65-99a4-ae3ed010adf2.ics",
        "timezone": "Africa/Cairo"
      }
    }
}
```

- output

```
{
    "item_id": "caa7d6bf-dfbc-4f65-99a4-ae3ed010adf2.ics",
    "user_id": "",
    "calendar_id": "f5f05de8-d354-4dc3-96c1-1ab62f427c70",
    "content": "",
    "epoch": 0,
    "dtstart": 1571933731,
    "dtend": 1571933750,
    "type": "",
    "timezone": "Africa/Cairo",
    "title": "title3",
    "description": "desco3",
    "location": "locas3",
    "attachments": []
}
```

