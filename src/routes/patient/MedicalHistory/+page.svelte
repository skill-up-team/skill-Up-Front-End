<script>
    import "../../../app.css";
    import Button from "../../../components/UI/Button.svelte";
    let type = "doctor";
  
</script>

<div class="bg-white p-6 rounded-xl shadow-sm">
    <label for="" class="text-h2-font font-semibold"> Channel Doctor</label>
    <div class="mt-6 rounded-lg">
        <div class="grid grid-cols-12 gap-4 ">
            <div class="col-span-3">
                <Button title={"Doctor"} onButtonClick={() => type = 'doctor'} customClass={type == 'doctor'? "bg-primary-color text-white border-primary-color w-full p-2" :"bg-white text-primary-color border-red-100 p-2 w-full"}  ></Button>
            </div>
            <div class="col-span-3">
                <Button title={"Lab"} onButtonClick={()=> type = "lab"} customClass={type == 'lab'? "bg-primary-color text-white border-primary-color p-2 w-full" :"bg-white text-primary-color border-primary-color p-2 w-full"} ></Button>
            </div>
        </div>
        <!--  -->
        {#if type === 'doctor'}
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
            <div class="grid grid-cols-12 " >
                <div class="col-span-2 border text-left p-3  text-p2-font">Doctor Name</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Hospital Name</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Fee</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Address</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Date& Time</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">  <Button title={"continue"} customClass={"bg-primary-color text-white p-2"} ></Button></div>
            </div>
        </div>
        {:else }
        <div class="mt-4">
            <div class="grid grid-cols-12 " >
                <div class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2">Test type</div>
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
                <div class="col-span-2 border text-left p-3  text-p2-font">  
                    <a href="lab-report" class="bg-white font-semibold border-primary-color text-primary-color p-2">View Report</a>
                </div>
            </div>
            <div class="grid grid-cols-12 " >
                <div class="col-span-2 border text-left p-3  text-p2-font">Doctor Name</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Hospital Name</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Fee</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Address</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Date& Time</div>
                <div class="col-span-2 border text-left p-3  text-p2-font"> 
                    <a href="lab-report" class="bg-white font-semibold border-primary-color text-primary-color p-2">View Report</a>
                </div>
            </div>
        </div>
        {/if}

    </div>
</div>