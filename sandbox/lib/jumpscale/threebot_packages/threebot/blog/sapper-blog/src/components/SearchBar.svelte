<script>
  import axios from "axios";

  axios.defaults.headers.get["Content-Type"] = "application/json";

  import { stores } from "@sapper/app";

  const { preloading, page, session } = stores();
  export let txt_search_field = null;

  export let blogName = $page.params.theuser;
  let query = "";
  let search_res = "";

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
      document.getElementById("search").value = "";
      let search_bar = document.querySelector(".search-area");
      search_bar.style.display = "none";
      search_bar.classList.remove("fadeIn");
      search_bar.classList.add("fadeOut");
    }
  }
  export function show_search_area(e) {
    e.preventDefault();
    let search_bar = document.querySelector(".search-area");
    search_bar.style.display = "block";
    search_bar.classList.remove("fadeOut");
    search_bar.classList.add("fadeIn");
    txt_search_field.focus();
  }
</script>

<div class="search-area" on:keypress={clear_results}>
  <div
    class="search-area-inner d-flex align-items-center justify-content-center">
    <div class="close-btn" on:click={clear_results}>
      <i class="icon-close" />
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-8">
        <form on:submit={search_method} on:keyup={clear_results}>
          <div class="form-group">
            <input
              type="text"
              bind:value={query}
              name="search"
              id="search"
              placeholder="What are you looking for?"
              aria-label="What are you looking for?"
              bind:this={txt_search_field} />
            <button type="submit" class="submit">
              <i class="icon-search-1" />
            </button>
          </div>
        </form>
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
    </div>
  </div>
</div>

<div class="navbar-text">
  <a href=" " class="search-btn" on:click={show_search_area}>
    <i class="icon-search-1" />
  </a>
</div>
