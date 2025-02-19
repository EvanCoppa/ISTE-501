<script>
    import Table from './table.svelte';
</script>

<div class="m-48">

    <h1 class="text-3xl font-bold">Dash</h1>
    <p class="text-gray-500 text-sm  ">Welcome to Your Admin Dashboard. This is where you can see all clients and drivers.</p>
    <div class="flex flex-row border-b-4">
        
        
        <div class="translate-y-[4px] flex flex-row">

        <div class="flex flex-row ">
            <div class="flex flex-row px-4 pb-4 pt-2  border-b-4 border-gray-300 text-center">
                <h3 class="mx-auto">Clients</h3>
            </div>
           
        </div>
        <div class="flex flex-row ">
            <div class="flex flex-row px-4 pb-4 pt-2  border-b-4 border-black text-center">
                <h3 class="mx-auto">Driver</h3>
            </div>
           
        </div>
    </div>

    <div class="flex flex-row justify-between gap-2 ml-auto">
        <button class="m-auto h-8 w-8 rounded-md bg-white border-1 border-gray-200 drop-shadow-xs" aria-label="Action Button">S</button>
        <button class="m-auto h-8 w-12 rounded-md bg-white border-1 border-gray-200 drop-shadow-xs" aria-label="Action Button">Cols</button>
        <button class="m-auto h-8 w-12 rounded-md bg-white border-1 border-gray-200 drop-shadow-xs" aria-label="Action Button">Filters</button>
        <button class="m-auto h-8 w-16 rounded-md text-sm font-medium bg-blue-500 text-white" aria-label="Action Button">Export</button>

    </div>
    </div>
   
    <div class="mt-8">
        <Table></Table>
    </div>
</div>

