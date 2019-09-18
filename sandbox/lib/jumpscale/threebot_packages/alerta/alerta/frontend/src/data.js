class AlertsService {
    // constructor() {

    // }

    request(method, args) {
        let info = {
            "namespace": "default",
            "actor": "alerta",
            "command": method,
            "args": args,
            "headers": {
                "response_type": "json",
                "content_type": "json",
            }
        }
        console.log(info);
        /*
        this should be the same result format from actor
        {
            result: "...",
            error_code: null    `   
            error_message: null,
        }
        */
        return new Promise(function (resolve, reject) {
            GEDIS_CLIENT.execute(info).then(resp => {
                console.log("resp from promise", resp)
                let data = JSON.parse(resp)
                resolve(data.result);
            }).catch(resp => reject(resp.error_code, resp.error_message));
        });
    }
}



let service = new AlertsService();

export function getAlerts(envName = "all") {
    return service.request("list_alerts_by_env", { 'env_name': envName })
}

export function deleteAll() {
    // let info = {
    //     "namespace": "default",
    //     "actor": "alerta",
    //     "command": "delete_all_alerts",
    //     "headers": {
    //         "response_type": "json",
    //         "content_type": "json",
    //     }
    // }

    //console.log(info);
    //return GEDIS_CLIENT.execute(info);
    return service.request("delete_all_alerts","{}")

}

export function deleteAlert(alertId) {
    let info = {
        "namespace": "default",
        "actor": "alerta",
        "command": "delete_alert",
        "args": {
            'alert_id': alertId
        },
        "headers": {
            "response_type": "json",
            "content_type": "json",
        }
    }

    console.log(info);
    return GEDIS_CLIENT.execute(info);
}

