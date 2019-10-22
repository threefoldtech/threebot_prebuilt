<script>
  export let tags = [];
  export let title = "";

  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  export let username = $page.params.theuser;
</script>

<header>
  <h3 class="h6">Tags</h3>
</header>
<ul class="list-inline">
  {#each tags as tag}
    <li class="list-inline-item">
      <a href="{username}/tags/{tag}" class="tag">#{tag}</a>
    </li>
  {/each}
</ul>
