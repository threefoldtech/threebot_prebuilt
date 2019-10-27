<script context="module">
  import axios from "axios";
  import PostList from "../../../components/PostList.svelte";
  export let posts = [];
  export let tag = "";
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

  export async function preload({ params }) {
    let blogName = params.theuser;
    let slug = params.slug;
    let allPosts = await callActorWithArgs("get_posts", {
      blog_name: blogName
    });
    const lookup = new Map();
    allPosts.forEach(post => {
      post.tags.forEach(tag => {
        if (lookup.has(tag)) {
          lookup.set(tag, [...lookup.get(tag), post]);
        } else {
          lookup.set(tag, [post]);
        }
      });
    });
    posts = lookup.get(slug);
    return { posts, tag: params.slug };
  }
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

{#await posts}
  Loading
{:then value}
  <PostList title="Posts with tag {tag}" posts={value} />
{/await}
