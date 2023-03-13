<script>
    	import { beforeUpdate } from 'svelte';
    import TopBar from "../components/TopNavBar.svelte";
    import LeftNavBar from "../components/LeftNavBar.svelte";
    import  "../app.css"
    import 'tw-elements/dist/css/index.min.css'
    beforeUpdate(async () => {
    await import('tw-elements/dist/src/js/index.js')
})
</script>
<div class="grid grid-cols-1"> <TopBar /></div>
<div class="grid grid-cols-12">
    <div class="col-span-2"><LeftNavBar/></div>
    <div class="col-span-10 pt-20 p-6">
        <slot></slot>
    </div>
</div>
 
  