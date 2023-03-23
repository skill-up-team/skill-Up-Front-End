<script>
    import "../../../app.css";
    import Input from "../../../components/UI/Input.svelte";
    import Button from "../../../components/UI/Button.svelte";
    import Autocomplete from "../../../components/UI/Autocomplete.svelte";
</script>

<div class="bg-white p-6 rounded-xl shadow-sm">
    <label for="" class="text-h2-font font-semibold"> Channel Doctor</label>
    <div class="mt-6 rounded-lg">
        <div class="grid grid-cols-12 gap-4 ">
            <div class="col-span-3">
                <Input lableName="type"/>
            </div>
            <div class="col-span-3">
                <Autocomplete lableName={"Doctor Name"}/>
            <!-- <Input lableName="type"/> -->
            </div>
        
            <div class="col-span-1 place-self-center ">
                <Button title={"Search"} customClass={"bg-primary-color p-2 text-white"} ></Button>
            </div>
        </div>
        <!--  -->
        <div class="mt-4">
            <div class="grid grid-cols-12 " >
                <div class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2">Doctor Name</div>
                <div class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2">Hospital Name</div>
                <div class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2">Fee</div>
                <div class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2">Address</div>
                <div class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2">Date& Time</div>
                <div class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2"></div>
            </div>
            <div class="grid grid-cols-12 " >
                <div class="col-span-2 border text-left p-3  text-p2-font">Doctor Name</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Hospital Name</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Fee</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Address</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Date& Time</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">  <Button title={"continue"} customClass={"bg-primary-color text-white p-2"} ></Button></div>
            </div>
      
        </div>

    </div>
</div>