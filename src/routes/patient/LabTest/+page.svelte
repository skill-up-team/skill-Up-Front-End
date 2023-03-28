<script>
    import "../../../app.css";
    import Input from "../../../lib/UI/Input.svelte";
    import Button from "../../../lib/UI/Button.svelte";
</script>

<div class="bg-white p-6 rounded-xl shadow-sm">
    <label for="" class="text-h2-font font-semibold"> Request lab test </label>
    <div class="mt-6 rounded-lg">
        <div class="grid grid-cols-12 gap-4 ">
            <div class="col-span-3">
            <Input lableName="type"/>
            </div>
            <div class="col-span-2">
                <Button title={"Request"} customClass={"bg-primary-color text-white p-2"} ></Button>
            </div>
        </div>
        <!--  -->
        <div class="mt-4">
            <div class="grid grid-cols-12 " >
                <div class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2">Test type</div>
                <div class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2">Hospital Name</div>
                <div class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2">Fee</div>
                <div class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2">Address</div>
                <div class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2"></div>
            </div>
            <div class="grid grid-cols-12 " >
                <div class="col-span-2 border text-left p-3  text-p2-font">Doctor Name</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Hospital Name</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Fee</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Address</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">  <Button title={"continue"} customClass={"bg-primary-color text-white p-2"} ></Button></div>
            </div>
            <div class="grid grid-cols-12 " >
                <div class="col-span-2 border text-left p-3  text-p2-font">Doctor Name</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Hospital Name</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Fee</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Address</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">  <Button title={"continue"} customClass={"bg-primary-color text-white p-2"} ></Button></div>
            </div>
        </div>

    </div>
</div>