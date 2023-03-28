<script>

import TopBar from "$lib/TopNavBar.svelte";
import LeftNavBar from "$lib/LeftNavBar.svelte";

</script>
<div class="relative">
<div class="grid grid-cols-1"> </div>
<div class="grid grid-cols-12">
    <div class="col-span-2"><LeftNavBar/></div>
    <div class="col-span-10  flex-col">
        <div class="">
            <TopBar />
        </div>
        <div class="pt-20 p-6">
            <slot></slot>
        </div>
       
    </div>
</div>
</div>



