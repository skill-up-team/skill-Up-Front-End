<script>
    import "../../../app.css";
    import Input from "../../../lib/UI/Input.svelte";
    import Autocomplete from "../../../lib/UI/Autocomplete.svelte";
    import Button from "../../../lib/UI/Button.svelte";
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    let query = "";
    let itemLists= [];
    let itemData = {
        event: "",
        normalRange: "",
        item: "",
    };
    let communeValue = '';
    onMount(() => {
        query = $page.url.searchParams.get("id");
    });
    function getSelectData(event) {
       
        itemData.item = event.detail.data
        console.log("event.detail.text",itemData);
    }

   function addItems(){
        itemLists.push(itemData)
        itemLists= itemLists
        console.log("itemLists",itemLists,itemData);
    }


    // 

    // 
</script>

<div class="bg-white p-6 rounded-xl shadow-sm">
    <label for="" class="text-h2-font font-semibold"
        >update Report {query}</label
    >

    <div class="grid grid-cols-12 gap-2 mt-4">
        <div class="col-span-2">
            <div class="text-p2-font font-medium">Test Name</div>
            <div class="text-p3-font mt-1 ">Rajah</div>
        </div>
    </div>
    <div class="grid grid-cols-12 gap-2 mt-4">
        <div class="col-span-2">
            <div class="text-p2-font font-medium">Test Name</div>
            <div class="text-p3-font mt-1 ">Rajah</div>
        </div>
    </div>
</div>
<div class="bg-white p-6  rounded-xl shadow-sm  mt-3">
    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 mb-6">
            <label for="" class="text-h2-font font-semibold">Add Data</label>
        </div>
     
        <div class="col-span-2">
            <Input lableName={"Evemt"}  bind:value={itemData.event} />
        </div>
        <div class="col-span-2">
            <Input lableName={"Normal Range"} bind:value={itemData.normalRange}/>
        </div>
        <div class="col-span-3">
            <Autocomplete lableName="Item" on:selectData={getSelectData}/>
        </div>
        <div class="col-span-1">
            <Button
            onButtonClick={() => addItems()}
                title={"Add"}
                customClass={"border border-primary-color text-primary-color bg-white  px-8 py-3 "}
            />
        </div>
        <div class="col-span-2">
            <Button
          
                title={"Submit All"}
                customClass={"bg-primary-color px-8 py-3 text-white"}
            />
        </div>
    </div>

    <!--  -->
   {itemLists}====
    <div class="mt-4">
        {#if itemLists.length> 0}
        <div class="grid grid-cols-12 ">
            <div
                class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2"
            >
                Event
            </div>
            <div
                class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2"
            >
                UOM
            </div>
            <div
                class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2"
            >
                Normal Range
            </div>
        </div>
      
        {#each itemLists as item, i  }
        <div class="grid grid-cols-12 ">
            <div class="col-span-2 border text-left p-3  text-p2-font">
                {item.event}
            </div>
            <div class="col-span-2 border text-left p-3  text-p2-font">
                Hospital Name
            </div>
            <div class="col-span-2 border text-left p-3  text-p2-font">Fee</div>
        </div>
        {/each}
        {/if}
        
       
    
    </div>
</div>
