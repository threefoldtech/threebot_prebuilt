<script>
  export let tags = [];
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  export let username = $page.params.theuser;
</script>

<span>
  {#each tags as tag}
    <a href="{username}/tags/{tag.trim()}">#{tag}</a>
  {/each}
</span>
