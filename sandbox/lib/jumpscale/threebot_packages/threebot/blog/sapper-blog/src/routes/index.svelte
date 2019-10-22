<script context="module">
  export async function preload({ host, path, params, query }) {
    try {
      const blogsResp = await this.fetch(`blog.json`);
      const blogs = await blogsResp.json();

      return { blogs };
    } catch (error) {
      console.log(error);
    }
  }
</script>

<script>
  import BlogsList from "../components/BlogsList.svelte";
  export let blogs = [];
  import Nav from "../components/Nav.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";

  export let segment;
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{page.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
  <title>Blogs</title>
</svelte:head>
<Nav {segment} />

<BlogsList {blogs} />

<Footer />
