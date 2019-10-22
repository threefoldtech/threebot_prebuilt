<script>
  import BlogCard from "./BlogCard.svelte";
  export let blogs = [];
</script>

<!-- Hero Section-->
<section
  style="background-image: url(img/3bot3_banner.jpg); background-size: cover;
  background-position: 50% 30%"
  class="hero" />

<section class="latest-posts">
  <div class="container">

    <header>
      <h2>Blogs</h2>
    </header>
    <div class="row">
      {#each blogs as blogName}
        <BlogCard {blogName} />
      {/each}
    </div>
  </div>
</section>
