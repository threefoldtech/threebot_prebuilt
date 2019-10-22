<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`${params.theuser}/tags.json`)
      .then(r => r.json())
      .then(tags => {
        return { tags };
      });
  }
</script>

<script>
  import TagList from "../../../components/TagList.svelte";
  export let tags = [];
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Tags</title>
</svelte:head>

{#await tags then value}
  <TagList tags={value} />
{/await}
