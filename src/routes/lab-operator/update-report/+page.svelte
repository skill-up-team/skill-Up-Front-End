<script>
        import "../../../app.css";
    import Button from "../../../components/UI/Button.svelte";
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    let query = '';

onMount(() => {
  query = $page.url.searchParams.get('id')
});
</script>
 <div class="bg-white p-6 rounded-xl shadow-sm">
    <label for="" class="text-h2-font font-semibold">update Report {query}</label>

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
