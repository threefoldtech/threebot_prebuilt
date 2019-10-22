<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`${params.theuser}/pages/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { thepage: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let thepage = {};
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  export let username = $page.params.theuser;
  import showdown from "showdown";

  const classMap = {
    h1: "ui large header",
    h2: "ui medium header",
    ul: "ui list",
    li: "ui item"
  };

  const bindings = Object.keys(classMap).map(key => ({
    type: "output",
    regex: new RegExp(`<${key}(.*)>`, "g"),
    replace: `<${key} class="${classMap[key]}" $1>`
  }));

  let converter = new showdown.Converter({
    metadata: true
    // extensions: [...bindings]
  });
  converter.setFlavor("github");
  $: mdtext = converter.makeHtml(thepage.content);
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
  <title>{thepage.title}</title>

  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.15.8/build/styles/default.min.css" />
</svelte:head>

<div class="content">
  {@html converter.makeHtml(thepage.content)}
</div>
