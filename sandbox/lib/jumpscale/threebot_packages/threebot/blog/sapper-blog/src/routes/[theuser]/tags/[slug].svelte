<script context="module">
  export function preload({ params }) {
    try {
      return this.fetch(`${params.theuser}/tags/${params.slug}.json`)
        .then(request => request.json())
        .then(posts => {
          return { posts, tag: params.slug };
        });
    } catch (error) {
      console.log(error);
    }
  }
</script>

<script>
  import PostList from "../../../components/PostList.svelte";
  export let posts = [];
  export let tag = "";
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

{#await posts}
  Loading
{:then value}
  <PostList title="Posts with tag {tag}" posts={value} />
{/await}
