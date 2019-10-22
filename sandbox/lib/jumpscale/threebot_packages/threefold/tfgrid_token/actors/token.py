from Jumpscale import j
import random


class token(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):
        try:
            self.bcdb = j.data.bcdb.get("tf_grid_token")
        except:
            self.bcdb = j.data.bcdb.new("tf_grid_token")
        self.market = self.bcdb.model_get(url="tfgrid.market.1")
        self.capacity = self.bcdb.model_get(url="tfgrid.capacity.1")
        self.tokens = self.bcdb.model_get(url="tfgrid.token.price.1")

    def get_market(self, schema_out=None, user_session=None):
        """
        ```out
        market = (O) !tfgrid.market.1
        ```
        """
        out = self.market.new()
        self.market.set(out)
        return out

    def get_capacity(self, schema_out=None, user_session=None):
        """
        ```out
        capacity = (O) !tfgrid.capacity.1
        ```
        """
        out = self.capacity.new()
        self.capacity.set(out)
        return out

    def find_prices(self, price_timeframe, from_date=None, to_date=None, schema_out=None, user_session=None):
        """
        ```in
        price_timeframe = "hour,half_day,day,week,month,year" (E)
        from_date = (T)
        to_date = (T)
        ```

        ```out
        prices = (LO) !tfgrid.token.price.1
        ```
        """
        prices = self.tokens.find(timeframe=str(price_timeframe))
        if from_date > 0 or to_date > 0:
            res = []
            for p in prices:
                if from_date > 0:
                    if p.time >= from_date:
                        if to_date > 0:
                            if p.time <= to_date:
                                res.append(p)
                        else:
                            res.append(p)
                else:
                    if to_date > 0:
                        if p.time <= to_date:
                            res.append(p)
                    else:
                        res.append(p)
        else:
            res = prices
        return res

    def add(self, price, schema_out=None, user_session=None):
        """
        ```in
        price = (O) !tfgrid.token.price.1
        ```

        ```out
        price = (O) !tfgrid.token.price.1
        ```
        """
        return self.tokens.new(data=price).save()

    def delete_all(self, schema_out=None, user_session=None):
        self.bcdb.destroy()
        return True

    def feed_dummy_data_prices(self, price_timeframe, year, month, day, price_from, schema_out=None, user_session=None):
        """
        ```in
        price_timeframe = "hour,half_day,day,week,month,year" (E)
        year = (I)
        month = (I)
        day = (I)
        price_from = (F)
        ```

        ```out
        prices = (LO) !tfgrid.token.price.1
        ```
        """
        return self._generate_dummy_data(
            timeframe=str(price_timeframe), year=year, month=month, day=day, price_from=price_from
        )

    def feed_dummy_data_prices_total(self):
        # TODO: generate the year you need
        pass

    def _generate_dummy_data(self, timeframe, year=2019, month=10, day=1, price_from=0.06):
        res = []
        tframe = timeframe.lower()
        if tframe == "year":
            count = 5
        elif tframe == "month":
            count = 12
        elif tframe == "day":
            count = 31
        elif tframe == "hour":
            count = 24
        else:
            count = 0

        for x in range(count):
            t = self.tokens.new()
            t.timeframe = timeframe
            percent = random.uniform(0.000001, 99.99999)
            percent_less = random.uniform(0.000001, 99.99999)
            while percent_less > percent:
                percent = random.uniform(0.000001, 99.99999)
                percent_less = random.uniform(0.000001, 99.99999)
            sign = random.uniform(-99, 99)
            t.low = str((price_from - (price_from / 100) * percent)) + " USD"
            t.high = str((price_from + (price_from / 100) * percent)) + " USD"
            if sign > 0:
                # bull opening < closing
                t.opening = str((price_from - (price_from / 100) * percent_less)) + " USD"
                t.closing = str((price_from + (price_from / 100) * percent_less)) + " USD"
            else:
                # bear opening > closing
                t.closing = str((price_from - (price_from / 100) * percent_less)) + " USD"
                t.opening = str((price_from + (price_from / 100) * percent_less)) + " USD"

            if tframe == "year":
                t.time = str(year - 5 + x) + "/01/01"
            elif tframe == "month":
                t.time = str(year) + "/" + str(x + 1) + "/01"
            elif tframe == "day":
                t.time = str(year) + "/" + str(month) + "/" + str(x + 1)
            elif tframe == "hour":
                t.time = str(year) + "/" + str(month) + "/" + str(day) + " " + str(x) + ":00"
            res.append(self.tokens.new(data=t).save())
        return res

    def list(self, schema_out=None, user_session=None):
        """
        ```out
        prices = (LO) !tfgrid.token.price.1
        ```
        """
        output = schema_out.new()
        for node in self.tokens.iterate():
            output.prices.append(node)
        return output
