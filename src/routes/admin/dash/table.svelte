<script>
let {type} = $props()
 let array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let array2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19,12];
let array = $derived(type === 'clients' ? array1 : array2);

  // console.log(`Selected tab changed to: ${type}`);
  </script>

<div class="flex flex-col ">

<div class="overflow-x-auto border-1 border-gray-100 rounded-md">
    <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead class="ltr:text-left rtl:text-right bg-gray-100">
        <tr>
          <th class="sticky inset-y-0 start-0  px-4 py-4 ">
            <label for="SelectAll" class="sr-only">Select All</label>
  
            <input type="checkbox" id="SelectAll" class="size-5 rounded-sm border-gray-300" /> 
          </th>
          <th class="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Name</th>
          <th class="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Date of Birth</th>
          <th class="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Role</th>
          <th class="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Salary</th>
        </tr>
      </thead>
  
      <tbody class="divide-y divide-gray-200">
        {#each array as item}
        <tr>
          <td class="sticky inset-y-0 start-0 bg-white px-4 py-4">
            <label class="sr-only" for="Row1">Row 1</label>
  
            <input class="size-5 rounded-sm border-gray-300" type="checkbox" id="Row1" />
          </td>
          <td class="px-4 py-2 font-medium whitespace-nowrap text-gray-900">John Doe</td>
          <td class="px-4 py-2 whitespace-nowrap text-gray-700">12/05/1995</td>
          <td class="px-4 py-2 whitespace-nowrap text-gray-700">Developer</td>
          <td class="px-4 py-2 whitespace-nowrap text-gray-700">$50,000</td>
        </tr>
        {/each}

        <tr>
          <td class="px-4 py-2 whitespace-nowrap text-gray-500">Total: <span class="font-bold text-black">{array.length}</span></td>

        </tr>
      </tbody>
    </table>
  </div>
</div>


