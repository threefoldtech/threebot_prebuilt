<script>
  import axios from "axios";

  axios.defaults.headers.get["Content-Type"] = "application/json";

  import { stores } from "@sapper/app";

  const { preloading, page, session } = stores();

  export let blogName = $page.params.theuser;
  let query = "";
  export let search_res = "";

  const BLOG_API = `search.json`;
  export async function search_method(e) {
    // if (!query) {
    //   alert("empty search !");
    // }
    e.preventDefault();
    search_res = await axios.get(BLOG_API, {
      params: {
        blog_name: blogName,
        query: query
      }
    });
    search_res = search_res.data;
  }
  export function clear_results(e) {
    if (e.key === "Escape" || e.type === "click") {
      search_res = "";
    } else if (e.key == "Backspace") {
      if (query === "") {
        search_res = "";
      }
    }
  }
</script>

<form on:submit={search_method} on:keyup={clear_results} class="search-form">
  <div class="form-group">
    <input
      type="search"
      bind:value={query}
      placeholder="What are you looking for?"
      id="search" />
    <button type="submit" class="submit search-btn" on:click={search_method}>
      <i class="icon-search" />
    </button>
    {#if search_res}
      <p>Search Result</p>
      <ul>
        {#each search_res as res}
          <li class="list-results">
            <a
              href="{res.blog_name}/{res.type}/{res.slug}"
              on:click={clear_results}>
              {res.type}: {res.slug}
            </a>
          </li>
        {/each}
      </ul>
      <p>Total: {Object.keys(search_res).length} Results</p>
    {/if}
  </div>
</form>
