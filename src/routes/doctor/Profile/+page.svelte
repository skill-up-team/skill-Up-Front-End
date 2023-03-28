<script>
    import { onMount } from "svelte";
    import "../../../app.css";
    import ManageProfile from "../../../components/ManageProfile.svelte";
    import { PUT,GET } from '../../../api/client';
    import { PUBLIC_API_VERSION, PUBLIC_BASE_PATH } from '$env/static/public';

async function updateDoctorSession(id) {
    const report = await PUT(PUBLIC_BASE_PATH+PUBLIC_API_VERSION  +`/api/v1/doctors/session/${id}`);
    return { report };
}
async function getDoctorSession(id) {
    const report = await GET(PUBLIC_BASE_PATH+PUBLIC_API_VERSION  +`/api/v1/doctors/session/${id}`);
    return { report };
}
onMount(()=>{
    getDoctorSession(3)
    })
</script>
<div class="">
    <ManageProfile></ManageProfile>
    <div class="session-list bg-white p-3 mt-4 rounded-xl shadow py-4">
        <div class="mt-4">
            <div class="grid grid-cols-12 " >
                <div class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2">Time</div>
                <div class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2">Hospital Name</div>
                <div class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2">Fee</div>
                <div class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2">Available</div>
            </div>
            <div class="grid grid-cols-12 " >
                <div class="col-span-2 border text-left p-3  text-p2-font">Time </div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Hospital Name</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Fee</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">                  
                    <div class="flex justify-center">
                        <div>
                          <input
                            class="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 dark:bg-neutral-600 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 dark:after:bg-neutral-400 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary dark:checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary dark:checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault" />
                         
                        </div>
                      </div>
                </div>
            </div>
            <div class="grid grid-cols-12 " >
                <div class="col-span-2 border text-left p-3  text-p2-font">Date& Time</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Hospital Name</div>
                <div class="col-span-2 border text-left p-3  text-p2-font">Fee</div>
              
                <div class="col-span-2 border text-left p-3  text-p2-font">  
                  
                    <div class="flex justify-center">
                        <div>
                          <input
                            class="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 dark:bg-neutral-600 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 dark:after:bg-neutral-400 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary dark:checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary dark:checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault" 
                            on:change={updateDoctorSession(5)}
                            />
                         
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
</div>
