<script>
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  export let username = $page.params.theuser;
  export let posts = [];

  export function select_image(post) {
    let post_image = post.post_image;
    let post_image_link = "";
    if (!post_image) {
      post_image_link = "img/blog-post-1.jpeg";
    } else if (!post_image.startsWith("http")) {
      post_image_link = `/blog_${username}/assets/images/${post_image}`;
    } else {
      post_image_link = post_image;
    }
    return post_image_link;
  }
</script>

<header>
  <h3 class="h6">Latest Posts</h3>
</header>

{#each posts as post}
  <div class="blog-posts">
    <a rel="prefetch" href="{username}/posts/{post.slug}">
      <div class="item d-flex align-items-center">
        <div class="image">
          <img
            src={select_image(post)}
            onerror="this.src = img/blog-post-1.jpeg"
            alt="..."
            class="img-fluid" />
        </div>
        <div class="title">
          <strong>{post.title}</strong>
        </div>
      </div>
    </a>
  </div>
{/each}
