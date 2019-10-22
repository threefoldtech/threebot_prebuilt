<script>
  export let header = "";
  export let links = [];
</script>

{#if links}
  <ul>
    {#each links as link}
      <li>

        {#if link.faclass}
          <a href={link.link}>
            <i class="{link.faclass} fa-3x" />
          </a>
        {:else}
          <a href={link.link}>{link.title}</a>
          <!-- else content here -->
        {/if}
      </li>
    {/each}
  </ul>
{/if}
