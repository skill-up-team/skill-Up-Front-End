
<script>
// @ts-nocheck

    import Input from "../../../lib/UI/Input.svelte";
    import Button from "../../../lib/UI/Button.svelte";
    import Autocomplete from "../../../lib/UI/Autocomplete.svelte";
    import { PUBLIC_API_VERSION, PUBLIC_BASE_PATH } from '$env/static/public';
    import { POST } from '../../../api/client';

    async function createDoctorSession() {
        const report = await POST(PUBLIC_BASE_PATH+PUBLIC_API_VERSION  +`/doctors/session/`);
        return { report };
    }
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
    <Button title={"Add"} customClass={"bg-primary-color px-8 py-3 text-white"} onButtonClick={() => createDoctorSession()}></Button>
    </div>
</div>