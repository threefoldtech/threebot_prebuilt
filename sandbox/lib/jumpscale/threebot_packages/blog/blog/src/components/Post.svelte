<script>
  import { blogStore } from "./blogstore.js";
  import { onMount } from "svelte";

  export let slug;
  let post;

  onMount(() => (post = blogStore.getPost(blog_name, slug)));

  var converter = new showdown.Converter();
</script>

<svelte:head>
  <title>Blog main {slug}</title>
</svelte:head>
<div>
  <div>
    <span class="date">POST DATE</span>
    <div class="tag-list">
      {#each post.tags as tag, idx}
        <span class="tag-default tag-pill">
          <i class="ion-close-round" />
          {tag}
        </span>
      {/each}
    </div>

    <div class="article-item-title article-item-label content">
      <h1>
        <i>{post.title}</i>
      </h1>
      <hr />
    </div>
  </div>

  <div>
    <div>
      {@html post.content}
    </div>

  </div>

</div>
