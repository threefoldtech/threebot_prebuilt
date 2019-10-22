<script>
  import showdown from "showdown";
  export let posts = [];
  export let title = "";
  export let showExcerpt = true;
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  export let username = $page.params.theuser;
  import PostCard from "./PostCard.svelte";
</script>

{#if title !== ''}
  <h1>{title}</h1>
{/if}

{#each posts as post}
  <PostCard {post} {username} {showExcerpt} />
{/each}
