from Jumpscale import j


class myjobs(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):
        self.job_model = j.servers.myjobs.model_job
        self.action_model = j.servers.myjobs.model_action
        self.worker_model = j.data.bcdb.myjobs.model_get(url="jumpscale.myjobs.worker")

    def list_workers(self):
        def transform_worker(worker_obj):
            states_dict = dict(zip(range(5), "NEW,ERROR,BUSY,WAITING,HALTED".split(",")))
            worker_types_dict = dict(zip(range(3), "tmux,subprocess,inprocess".split(",")))

            worker_dict = worker_obj._ddict
            try:
                worker_dict["state"] = states_dict[worker_dict["state"]]
                worker_dict["type"] = worker_types_dict[worker_dict["type"]]
            except Exception as e:
                print(e)
            return worker_dict

        workers = j.data.serializers.json.dumps(
            {"workers": [transform_worker(worker) for worker in self.worker_model.find()]}
        )
        print("returning workers  ", workers)
        return workers

    def list_jobs(self):
        def transform_job(job_obj):
            states_dict = dict(zip(range(5), "NEW,ERROR,OK,RUNNING,HALTED".split(",")))
            job_dict = job_obj._ddict

            try:
                job_dict["state"] = states_dict[job_dict["state"]]
                job_dict["args"] = str(job_dict["args"])
                job_dict["kwargs"] = str(job_dict["kwargs"])
                job_dict["result"] = str(job_dict["result"])
                job_dict["error"] = str(job_dict["error"])
            except Exception as e:
                print(e)
            try:
                job_dict["action_id"] = self.action_model.get(job_dict["action_id"]).methodname
            except Exception as e:
                print(e)
            return job_dict

        jobs = j.data.serializers.json.dumps({"jobs": [transform_job(job) for job in self.job_model.find()]})
        print("returning jobs  ", jobs)
        return jobs
        # return JOBS
