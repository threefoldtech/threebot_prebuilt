<script context="module">
  import axios from "axios";
  axios.defaults.headers.post["Content-Type"] = "application/json";

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
    let pages = await callActorWithArgs("get_pages", {
      blog_name: blogName
    });
    return { pages };
  }
</script>

<script>
  export let pages = [];
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  export let username = $page.params.theuser;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Pages</title>
</svelte:head>

<h1>Pages</h1>

{#await pages then value}
  <ul>
    {#each value as thepage}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li>
        <a rel="prefetch" href="{username}/pages/{thepage.slug}">
          {thepage.title}
        </a>
      </li>
    {/each}
  </ul>
{/await}
