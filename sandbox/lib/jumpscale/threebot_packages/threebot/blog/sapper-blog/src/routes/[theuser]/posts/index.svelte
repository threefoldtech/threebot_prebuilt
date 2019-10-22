<script context="module">
  export async function preload({ host, path, params, query }) {
    console.log("params in posts index", JSON.stringify(params));

    let pageNum = parseInt(query.page);
    if (!pageNum) {
      this.redirect(302, `${params.theuser}/posts?page=1`);
    }

    let resp = await this.fetch(`${params.theuser}/posts.json`);

    // please notice it might be undefined
    // parseInt(undefined) > 0 -> false
    // parseInt(undefined) < 0 -> false
    // because.. javascript `\-()-/`

    if (pageNum > 0) {
      pageNum--;
    }

    let allPosts = await resp.json();
    console.log(allPosts.length);
    // console.log("parsed blogs ", allPosts);
    let totalPostsLength = allPosts.length;
    const metaResp = await this.fetch(`${params.theuser}/metadata.json`);
    const metadata = await metaResp.json();

    let per_page = metadata.posts_per_page || 5;
    let begin = pageNum * per_page;
    let end = pageNum * per_page + per_page;
    let posts = allPosts.slice(begin, end);

    return { path, posts, totalPostsLength, metadata };
  }
</script>

<script>
  import PostList from "../../../components/PostList.svelte";
  import ListPagination from "../../../components/ListPagination.svelte";

  export let posts = [];
  export let metadata;
  export let totalPostsLength;
  export let path;
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  console.log("in posts index", $page.params);
  export let username = $page.params.theuser;
  export let pageNum = $page.query.page;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

{#await posts then value}
  <PostList posts={value} {username} />
  <ListPagination
    articlesCount={totalPostsLength}
    articlesPerPage={metadata.posts_per_page}
    objectPath="/blog/{username}/posts"
    page={pageNum} />

{/await}
