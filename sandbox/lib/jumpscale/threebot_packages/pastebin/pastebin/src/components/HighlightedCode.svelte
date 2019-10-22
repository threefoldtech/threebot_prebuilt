<script>
  export let highlightedCode;
</script>

<!--[Highlighted-Code]-->
{#if highlightedCode}
  <pre>
    <code class="hljs">
      {@html highlightedCode}
    </code>
  </pre>
{/if}
