<script context="module">
  import axios from "axios";

  axios.defaults.headers.post["Content-Type"] = "application/json";
  import TagList from "../../../components/TagList.svelte";
  export let tags = [];
  const BLOG_API = "/web/gedis/http/blog";
  export async function callActorWithArgs(actorCmd, actorArgs) {
    let p = () =>
      axios.post(`${BLOG_API}/${actorCmd}`, {
        args: actorArgs
      });

    let resp = await p();
    return new Promise((resolve, reject) => resolve(resp.data));
  }

  export async function preload({ params, query }) {
    let blogName = params.theuser;
    tags = await callActorWithArgs("get_tags", {
      blog_name: blogName
    });
    return { tags };
  }
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Tags</title>
</svelte:head>

{#await tags then value}
  <TagList tags={value} />
{/await}
