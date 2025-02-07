<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<script context="module">
    export async function load({ fetch }) {
        const response = await fetch('/api/data');
        const data = await response.json();
        return { props: { data } };
    }
</script>

<script>
    export let data;
</script>

<ul>
    {#each data as item}
        <li>{item}</li>
    {/each}
</ul>