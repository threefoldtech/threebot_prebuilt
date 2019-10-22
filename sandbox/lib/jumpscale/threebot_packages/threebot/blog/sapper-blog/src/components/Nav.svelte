<script>
  import showdown from "showdown";

  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  export let username = $page.params.theuser;

  $: currentuser = $page.params.theuser;
  export let segment;
  export let pages = [];
  import SearchBar from "./SearchBar.svelte";
  export let metadata = {};
  let converter = new showdown.Converter({ metadata: true });
  if (metadata.allow_navbar === undefined) {
    metadata.allow_navbar = true; // handeling all blogs case
  }
</script>

{#if metadata.allow_navbar}
  <header class="header">
    <!-- Main Navbar-->
    <nav class="navbar navbar-expand-lg">

      <div class="container">
        <!-- Navbar Brand -->
        <div
          class="navbar-header d-flex align-items-center justify-content-between">
          <!-- Navbar Brand -->
          <a href="" rel="prefetch" class="navbar-brand">Blog</a>
          <!-- Toggle Button-->
          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarcollapse"
            aria-controls="navbarcollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            class="navbar-toggler">
            <span />
            <span />
            <span />
          </button>
        </div>
        <!-- Navbar Menu -->
        <div id="navbarcollapse" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            {#if currentuser}
              <li class="nav-item">
                <a
                  href="{currentuser}/posts"
                  rel="prefetch"
                  class={segment === undefined ? 'nav-link active' : 'nav-link'}>
                  {currentuser.toUpperCase()}
                </a>
              </li>
              {#each pages as page}
                <li class="nav-item">
                  <a
                    rel="prefetch"
                    href="{currentuser}/pages/{page.slug}"
                    class={segment === undefined ? 'nav-link active' : 'nav-link'}>
                    {page.title.toUpperCase()}
                  </a>
                </li>
              {/each}
              <li class="nav-item">
                <a
                  href="{currentuser}/tags/"
                  class={segment === undefined ? 'nav-link active' : 'nav-link'}>
                  TAGS
                </a>
              </li>
            {/if}
          </ul>
          <SearchBar />
        </div>
      </div>
    </nav>
  </header>
{/if}
