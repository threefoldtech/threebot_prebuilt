from Jumpscale import j
import json

"""

JSX> anew.actors.alerta.list_alerts() 
... a very long list
JSX> anew.actors.alerta.new_alert(        severity="major", 
   2         status="new", 
   3         time=None, 
   4         environment="ALL", 
   5         service="JSX", 
   6         resource="xmonader", 
   7         event="event 1", 
   8         value="n/a", 
   9         messageType="error", 
  10         text="rafir text")                                                                                        
## actors.default.alerta.new_alert.16c54214bfcd2a5b61f789be085a1d14
res                 : True



"""


class alerta(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):

        from random import choice

        alert_schema = """
        @url = jumpscale.alerta.alert

        severity="" (S)
        status="" (S)
        time="" (S)  
        environment = "" (S)
        service = "" (S)
        resource = "" (S)
        event = "" (S)
        value = "" (S)
        messageType = "" (S)
        text = "" (S)

        """

        self.alert_model = j.data.bcdb.system.model_get(schema=alert_schema)
        # self.alert_model.save()
        for i in range(100):
            alert = self.alert_model.new()
            alert.severity = choice(["critical", "major", "minor", "warning"])
            alert.status = choice(["closed", "new"])
            alert.time = j.data.time.epoch
            alert.environment = choice(["production", "staging", "testing", "infrastructure", "all"])
            alert.service = choice(["jsx", "0-os", "portal", "threebot"])
            alert.resource = choice(["xmonader", "rafy", "andrew"])
            alert.event = choice(["event 1", "event 2"])
            alert.value = "n/a"
            alert.messageType = choice(["error", "information", "warning"])
            alert.text = choice(["text 1 errr", "text 2 errr", "text 3 err"])

            alert.save()

    def list_alerts(self):
        alerts = j.data.serializers.json.dumps({"alerts": [alert._ddict for alert in self.alert_model.find()]})
        return alerts

    def list_alerts_by_env(self, env_name="all", schema_out=None):
        """
        ```in
        env_name = (S)
        ```

        """
        alerts = {
            "alerts": [alert._ddict for alert in self.alert_model.find() if alert.environment == env_name.lower()]
        }

        print("ALERTS: ", alerts)
        response = {"result": alerts, "error_code": "", "error_message": ""}
        return j.data.serializers.json.dumps(response)

    def new_alert(
        self,
        severity="major",
        status="new",
        time=None,
        environment="all",
        service="JSX",
        resource="xmonader",
        event="event 1",
        value="n/a",
        messageType="error",
        text="error text",
        schema_out=None,
    ):
        """
        ```in 
        severity="" (S)
        status="" (S)
        time="" (S)  
        environment = "" (S)
        service = "" (S)
        resource = "" (S)
        event = "" (S)
        value = "" (S)
        messageType = "" (S)
        text = "" (S)
        ```

        ```out
        res = (B)
        ```        

        """

        print(locals())
        alert = self.alert_model.new()
        alert.severity = severity
        alert.status = status
        alert.time = time or j.data.time.epoch
        alert.environment = environment
        alert.service = service
        alert.resource = resource
        alert.event = event
        alert.value = value
        alert.messageType = messageType
        alert.text = text

        alert.save()

        res = schema_out.new()
        res.res = True
        return res

    def delete_all_alerts(self):
        # TODO: implement
        response = {"result": True, "error_code": "", "error_message": ""}
        return j.data.serializers.json.dumps(response)

    def delete_alert(self, alert_id):
        # TODO: implement
        return True
