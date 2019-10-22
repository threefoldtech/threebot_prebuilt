
<script>
  import Links from "./Links.svelte";
  import SearchBar from "./SearchBar.svelte";
  import TagCloud from "./TagCloud.svelte";
  import PostSearchBar from "./PostSearchBar.svelte";
  import LatestPostCard from "./LatestPostCard.svelte";
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  export let metadata = {};
  export let tags = [];
  export let username = $page.params.theuser;
  export let posts = [];
  export let title = "";
  export let showExcerpt = true;


  
</script>

<!-- <div class="container">

  <Links header="Links" links={metadata.sidebar_links} />
  <Links header="Social" links={metadata.sidebar_social_links} />
  

</div> -->

<!-- Widget [Search Bar Widget]-->
<div class="widget search">
  <header>
    <h3 class="h6">Search the blog</h3>
  </header>
  <PostSearchBar />
</div>
<!-- Widget [Latest Posts Widget] -->
<div class="widget latest-posts">
  <LatestPostCard {posts}/>
</div>
<!-- Widget [Categories Widget]-->
<div class="widget categories">
  <!-- <header>
    <h3 class="h6">Social</h3>
  </header> -->
  <div class="d-flex justify-content-between">
    <Links header="Social" links={metadata.sidebar_social_links} />
  </div>
</div>

<!-- Widget [Tags Cloud Widget]-->
<div class="widget tags">
  <TagCloud {tags} />
</div>
