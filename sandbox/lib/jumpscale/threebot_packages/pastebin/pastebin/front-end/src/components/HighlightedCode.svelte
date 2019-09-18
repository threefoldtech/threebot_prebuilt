<script>
	export let highlightedCode;
</script>

	<!--[Highlighted-Code]-->
	{#if highlightedCode.value}
		<pre>
			<code class="hljs">
				{@html highlightedCode.value}
			</code>
		</pre>
	{/if}
