from Jumpscale import j


class farms(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):
        bcdb = j.data.bcdb.get("tf_directory")
        self.farm_model = bcdb.model_get(url="tfgrid.farm.1")

    def _get_farm(self, farm_id):
        try:
            return self.farm_model.get(farm_id)
        except j.exceptions.NotFound:
            raise j.exceptions.NotFound("farm %s not found" % farm_id)

    def _validate_farm(self, farm):
        for field in ["threebot_id", "name", "email", "wallet_addresses"]:
            if not getattr(farm, field):
                raise j.exceptions.Value("%s is required" % field)

    def register(self, farm, schema_out=None, user_session=None):
        """
        ```in
        farm = (O) !tfgrid.farm.1
        ```

        ```out
        farm_id = (I)
        ```
        """
        self._validate_farm(farm)

        if self.farm_model.find(name=farm.name):
            raise j.exceptions.Value("Farm with name %s is already exist" % farm.name)

        farm = self.farm_model.new(farm).save()
        out = schema_out.new()
        out.farm_id = farm.id
        return out

    def update(self, farm_id, farm, schema_out=None, user_session=None):
        """
        ```in
        farm_id = (I)
        farm = (O) !tfgrid.farm.1
        ```
        """
        self._get_farm(farm_id)
        self._validate_farm(farm)
        self.farm_model.set_dynamic(farm._ddict, obj_id=farm_id)
        return True

    def get(self, farm_id, schema_out=None, user_session=None):
        """
        ```in
        farm_id = (I)
        ```

        ```out
        farm = (O) !tfgrid.farm.1
        ```
        """
        return self._get_farm(farm_id)

    def list(self, country, city, schema_out=None, user_session=None):
        """
        ```in
        country = (S)
        city = (S)
        ```

        ```out
        farms = (LO) !tfgrid.farm.1
        ```
        """
        out = schema_out.new()
        for farm in self.farm_model.iterate():
            if country != "" and farm.location.country != country:
                continue
            if city != "" and farm.location.city != city:
                continue
            out.farms.append(farm)
        return out
