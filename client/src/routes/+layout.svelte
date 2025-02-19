<script lang="ts">
	let { children } = $props();
	import logo from '$lib/assets/logo.svg';
</script>

<nav class="flex flex-row gap-4 m-4">
	<a href="/" class="h-12 w-12 mr-4"><img class="h-12 w-12" src="{logo}" alt=""></a>
	<div class="flex flex-row gap-4 ">
		<a href="/admin/dash" class="m-auto">Dashboard </a>

	</div>

</nav>

{@render children()}