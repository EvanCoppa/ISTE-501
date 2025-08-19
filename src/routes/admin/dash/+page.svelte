<script>
    import Table from './table.svelte';
    let selectedTab = 'que';
  </script>

<div class="mx-48 my-12">
    <div class="mb-4 flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Admin Dashboard</h1>
        <p class="text-gray-500 text-sm  ">Welcome to Your Admin Dashboard. This is where you can see all clients and drivers.</p>
        
    </div>
    
    <div class="flex flex-row border-b-4 border-gray-300">
        <div class="translate-y-[4px] flex flex-row">
            <button type="button" class="flex flex-row" onclick="{() => selectedTab = 'que'}" aria-label="Select Drivers Tab">
                <div class="flex flex-row px-4 pb-4 pt-2 border-b-4 {selectedTab === 'que' ? 'border-black' : 'border-gray-300'} text-center">
                    <h3 class="mx-auto">Que</h3>
                </div>
            </button>
        <button type="button" class="flex flex-row" onclick="{() => selectedTab = 'clients'}" aria-label="Select Clients Tab">
            <div class="flex flex-row px-4 pb-4 pt-2 border-b-4 transistion duration-200 {selectedTab === 'clients' ? 'border-black' : 'border-gray-300'} text-center">
            <h3 class="mx-auto">Clients</h3>
            </div>
        </button>
        
        <button type="button" class="flex flex-row" onclick="{() => selectedTab = 'drivers'}" aria-label="Select Drivers Tab">
            <div class="flex flex-row px-4 pb-4 pt-2 border-b-4 {selectedTab === 'drivers' ? 'border-black' : 'border-gray-300'} text-center">
                <h3 class="mx-auto">Drivers</h3>
            </div>
        </button>
        
    </div>

    <div class="flex flex-row justify-between gap-2 ml-auto">
        <button class="m-auto h-8 w-8 rounded-md bg-white border-1 border-gray-200 drop-shadow-xs flex hover:scale-110 transition duration-300 " aria-label="Action Button"><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/90/search--v1.png" alt="search--v1" class="m-auto"/></button>
        <button class="m-auto h-8 w-16 rounded-md bg-white border-1 border-gray-200 drop-shadow-xs hover:scale-110 transition duration-300" aria-label="Action Button">Cols</button>
        <button class="m-auto h-8 w-16 rounded-md bg-white border-1 border-gray-200 drop-shadow-xs hover:scale-110 transition duration-300" aria-label="Action Button">Filters</button>
        <button class="m-auto h-8 w-16 rounded-md bg-white border-1 border-gray-200 drop-shadow-xs hover:scale-110 transition duration-300" aria-label="Action Button">Add</button>

        <button class="m-auto h-8 w-16 rounded-md text-sm font-medium bg-blue-500 text-white hover:scale-110 transition duration-300" aria-label="Action Button">Export</button>

    </div>
    </div>
   
    <div class="mt-8">
       
              <Table type={selectedTab}></Table>
     </div>
</div>

