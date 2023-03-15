<script>
  import Input from "./Input.svelte";
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing'
  export let lableName;
    let list =["Lojan","Kushan","Nimesh",'ilojan'];
    let filteredList = [];
    let inputData = ''
    let searchQuery = '';

    function filtereList() {
       
            filteredList = list.filter(item =>{
            return item.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
        })
      
       
    }
    function handleMessage(event) {
		searchQuery = event.detail.text;
        filtereList();
	}
    function selectDoctorName(name) {
        searchQuery = '';
        inputData = name

    }
</script>
<div class="relative">
    <Input on:name={handleMessage} lableName={lableName} value={inputData}/> 


{#if searchQuery.length > 0}
<ul class="shadow py-3 rounded-xl absolute top-12 bg-white w-full"  transition:slide="{{delay: 300, duration: 400, easing: quintOut, axis: 'x'}}">
    {#each filteredList as item}
    <li class="py-2 hover:bg-gray-50 cursor-pointer px-4" on:click={()=>selectDoctorName(item)}>{item}</li>
    {/each}
</ul>
{/if}
</div>

