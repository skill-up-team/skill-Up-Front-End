
<script>
    import Input from "../../../components/UI/Input.svelte";
    import Button from "../../../components/UI/Button.svelte";
    import Autocomplete from "../../../components/UI/Autocomplete.svelte";
</script>
<div class="bg-white p-6 gap-2 rounded-xl shadow-sm grid grid-cols-12">
    <div class="col-span-12 mb-6">
        <label for="" class="text-h2-font font-semibold">Add Session</label>
    </div>
<div class="col-span-1">
    <Input lableName={'hh:mm'}/>
</div>
<div class="col-span-1">
    <select data-te-select-init class="h-full bg-white w-full border rounded-xl px-2 pt-2 pb-1">
        <option value="1">PM</option>
        <option value="2">AM</option>
      </select> 
</div>
<div class="col-span-3">
<Autocomplete lableName="Hospital Name" />
</div>
<div class="col-span-2">
    <Button title={"Add"} customClass={"bg-primary-color px-8 py-3 text-white"} ></Button>
    </div>
</div>