<script context="module">
  export async function preload({ host, path, params, query }) {
    try {
      const pagesResp = await this.fetch(`${params.theuser}/pages.json`);
      const pages = await pagesResp.json();

      const metaResp = await this.fetch(`${params.theuser}/metadata.json`);
      const metadata = await metaResp.json();

      const tagsResp = await this.fetch(`${params.theuser}/tags.json`);
      const tags = await tagsResp.json();

      const postsResp = await this.fetch(`${params.theuser}/posts.json`);
      const allPosts = await postsResp.json();

      // please notice it might be undefined
      // parseInt(undefined) > 0 -> false
      // parseInt(undefined) < 0 -> false
      // because.. javascript `\-()-/`

      let posts = allPosts.slice(0, 3);
      return { pages, posts, metadata, tags };
    } catch (error) {
      console.log(error);
    }
  }
</script>

<script>
  import Nav from "../../components/Nav.svelte";
  import Sidebar from "../../components/Sidebar.svelte";
  import Footer from "../../components/Footer.svelte";
  // import Header from "../../components/Header.svelte";
  import TagCloud from "../../components/TagCloud.svelte";
  import ListPagination from "../../components/ListPagination.svelte";

  export let segment;
  export let pages = [];
  export let posts = [];
  export let metadata = {};
  export let tags = [];
  import { stores } from "@sapper/app";
</script>

<!-- {#await metadata then value}
  <Header
    blogName={value.blog_name}
    blogDescription={value.blog_description}
    blogLogo={value.blog_logo}
    authorName={value.authorName} />
{/await} -->

{#await pages}
  loading
{:then value}
  <Nav {segment} {metadata} pages={value} />
{/await}
<div>
  <div class="container">
    <div class="row">
      <main class="posts-listing col-lg-8">
        <div class="container">
          <div class="row">
            <!-- post -->
            <slot />
          </div>
          <!-- Pagination -->
          <ListPagination />
        </div>
      </main>

      <aside class="col-lg-4">
        <Sidebar {metadata} {tags} {posts} />
      </aside>
    </div>
  </div>
  <Footer {metadata} />

</div>
