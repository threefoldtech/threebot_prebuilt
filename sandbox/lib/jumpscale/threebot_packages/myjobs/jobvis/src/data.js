import axios from "axios";


export function getJobs() {
    return axios.post("/web/gedis/http/myjobs/list_jobs");
}

export function getWorkers() {
    return axios.post("/web/gedis/http/myjobs/list_workers");
}

