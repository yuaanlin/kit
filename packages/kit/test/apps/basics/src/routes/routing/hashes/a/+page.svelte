<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1 id="hash-target">a</h1>
<a href="#hash-target">hash link</a>
<a href="/routing/hashes/b">b</a>
<a href="#replace-state" data-sveltekit-replacestate>replace state</a>
<a href="#preload-data" data-sveltekit-preload-data>preload data</a>
<a href="/routing/hashes/a">a</a>

<p>{$page.url.hash}</p>
