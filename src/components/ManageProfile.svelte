
<script>
    import Button from "../lib/UI/Button.svelte";
    import Input from "../lib/UI/Input.svelte";
    import Select from "../lib/UI/Select.svelte";
    
</script>
<div class="bg-white p-6 rounded-xl shadow-sm m-auto ">
    <div class="w-3/5 py-6">
        <label for="" class="text-h2-font font-semibold"> Manage Profile</label>
        <div class="mt-6  grid grid-cols-12 gap-6">
            <div class="col-span-2"><Select></Select></div>
            <div class="col-span-5">
                <Input lableName="First Name"/>
            </div>
            <div class="col-span-5">
                <Input lableName="Last Name"/>
            </div>
            <div class="col-span-4"> <Input lableName="Phone Number"/></div>
            <div class="col-span-4"> <Input lableName="Email"/></div>
            <div class="col-span-4"> <Input lableName="NIC Number"/></div>
            <div class="col-span-12"> <Input lableName="Address"/></div>
            <div class="col-span-12"><Button title={"Save"} customClass={"bg-primary-color p-3 text-white"} ></Button></div>
    
        </div></div>
 
</div>

