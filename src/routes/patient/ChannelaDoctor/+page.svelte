<script>
    import "../../../app.css";
    import Input from "../../../lib/UI/Input.svelte";
    import Button from "../../../lib/UI/Button.svelte";
    import Autocomplete from "../../../lib/UI/Autocomplete.svelte";
    import { PUBLIC_API_VERSION, PUBLIC_BASE_PATH } from '$env/static/public';
    import { GET,POST } from '../../../api/client';

    async function getDoctorByName(Name) {
        const report = await GET(PUBLIC_BASE_PATH+PUBLIC_API_VERSION  +`/search/doctor?name=/${name}`);
        return { report };
    }
    async function getDoctorBySpecialization (Specialization) {
        const report = await GET(PUBLIC_BASE_PATH+PUBLIC_API_VERSION  +`/search/doctor?Specialization=/${Specialization}`);
        return { report };
    }
    async function doctorAppointment (Name) {
        const report = await POST(PUBLIC_BASE_PATH+PUBLIC_API_VERSION  +'/appointment/doctor');
        return { report };
    }
    // 
    
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