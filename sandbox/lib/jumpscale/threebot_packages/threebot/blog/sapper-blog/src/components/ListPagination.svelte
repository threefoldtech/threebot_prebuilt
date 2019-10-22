<script>
  export let articlesCount;
  export let pageNum = "0";
  $: page = parseInt(pageNum);
  export let articlesPerPage;
  export let objectPath;

  export let posts = [];
  let range;
  $: {
    range = [];
    for (let i = 1; i <= Math.ceil(articlesCount / articlesPerPage); ++i) {
      range.push(i);
    }
    console.log();
  }
</script>

<div class="row pagination-bar m-auto">
  {#if articlesCount >= articlesPerPage}
    <nav aria-label="Page navigation example">
      <ul class="pagination pagination-template d-flex justify-content-center">
        <li class="page-item {1 === page ? 'active' : ''}">
          <a href="{objectPath}?page=1" class="page-link"><i class="fa fa-angle-left"></i></a>
        </li>

        {#if page > 1}
          <li class="page-item">
            <a href="{objectPath}?page={page}" class="page-link">&lt;</a>
          </li>
        {/if}

        {#each range.slice(page - 5 >= 1 ? page - 5 : 0, page + 6) as v}
          <li class="page-item {v === page ? 'active' : ''}">
            <a href="{objectPath}?page={v}" class="page-link">{v}</a>
          </li>
        {/each}
        {#if page < range.length}
          <li class="page-item {range.length === page - 1 ? 'active' : ''}">
            <a href="{objectPath}?page={range.length}" class="page-link">
              <i class="fa fa-angle-right"></i>
            </a>
          </li>
        {/if}

        {#if page + 1 > range.length}
          <li class="page-item">
            <a href="{objectPath}?page={page}" class="page-link">
              <i class="fa fa-angle-right"></i>
            </a>
          </li>
        {/if}

      </ul>
    </nav>
  {/if}

</div>