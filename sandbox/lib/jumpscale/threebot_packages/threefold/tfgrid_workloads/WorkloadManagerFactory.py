from Jumpscale import j
import os


class WorkloadManagerFactory(j.baseclasses.threebot_factory, j.baseclasses.testtools):

    __jslocation__ = "j.threebot.package.workloadmanager"

    def start(self):
        gedis_client = j.servers.threebot.local_start_default(web=True)
        gedis_client.actors.package_manager.package_add(path=self._dirpath)

    def test(self, name=""):
        """

        Running the tests will destroy all existing reservations instances and phonebook users instances
        kosmos 'j.threebot.package.workloadmanager.test()'

        """
        basepath = os.path.dirname(os.path.dirname(__file__))
        self.client = j.servers.threebot.local_start_default()
        self.client.actors.package_manager.package_add(path=os.path.join(basepath, "tfgrid_workloads"))
        self.client.actors.package_manager.package_add(path=os.path.join(basepath, "phonebook"))

        self.client.reload()

        print(name)
        self._test_run(name=name)

        self._log_info("All TESTS DONE")
        return "OK"

    def reservation_index_model(self):
        class IndexTable(j.clients.peewee.Model):
            class Meta:
                database = None

            pw = j.clients.peewee
            id = pw.PrimaryKeyField()
            reservation_id = pw.IntegerField(index=True, default=0)
            workload_id = pw.IntegerField(index=True, default=0)
            node_id = pw.TextField(index=True, default="")

        return IndexTable

    def reservation_index_create(self):
        def index_create(model, obj, action, **kwargs):
            if action == "set_post":
                index = model.IndexTable.get_or_none(reservation_id=obj.id)
                if not index:
                    for wt, workload in self.iterate_over_workloads(obj):
                        if wt == "network":
                            for nr in workload.network_resources:
                                index = model.IndexTable.create(
                                    reservation_id=obj.id, workload_id=workload.workload_id, node_id=nr.node_id
                                )
                        else:
                            index = model.IndexTable.create(
                                reservation_id=obj.id, workload_id=workload.workload_id, node_id=workload.node_id
                            )
            if action == "delete":
                query = model.IndexTable.delete().where(model.IndexTable.reservation_id == obj.id)
                query.execute()

        return index_create

    def iterate_over_workloads(self, obj):
        for _type in ["zdbs", "volumes", "containers", "networks"]:
            for workload in getattr(obj.data_reservation, _type):
                yield _type[:-1], workload
