<template>
  <div>
    Test getting some data from actor
    <br />
    <li v-for="person of people_info" v-bind:key="person">
      name: {{person.myname}}
      <br />
      job: {{person.job}}
      <br />
      about: {{person.aboutme}}
      <br />
    </li>
  </div>
</template>
<script>
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
const API = "/web/gedis/http/vuejs";

export default {
  data() {
    var people_info = {};
    return {
      people_info
    };
  },
  methods: {
    // call vuejs actor
    async callActorWithArgs(actorCmd, actorArgs) {
      let p = () =>
        axios.post(`${API}/${actorCmd}`, {
          args: actorArgs
        });
      let resp = await p();
      (resolve, reject) => resolve((resp = resp.data));
      return resp.data;
    },

    async ping() {
      console.log("PING: ", await this.callActorWithArgs("ping", {}));
    },

    async get_people() {
      let info = await this.callActorWithArgs("get_info", {});
      this.people_info = info;
    }
  },
  mounted() {
    this.ping();
    this.get_people();
  }
};
</script>
