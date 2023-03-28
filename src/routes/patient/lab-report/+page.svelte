
<script>
    import "../../../app.css";
    import { PUBLIC_API_VERSION, PUBLIC_MEDICAL_REPORT_MANAGEMENT_SERVICE } from '$env/static/public';
    import { GET } from '../../../api/client';

    async function getLabReportById(id) {
        const report = await GET(PUBLIC_API_VERSION + PUBLIC_MEDICAL_REPORT_MANAGEMENT_SERVICE +`/labReport/${id}`);
        return { report };
    }

</script>

<div class="">
    <div class="bg-white p-6 rounded-xl shadow-sm w-full">
        <div class="">
            <label for="" class="text-h3-font font-semibold ">Doctor  Details</label>
        </div>
        <div class="grid grid-cols-12 mt-2">
            <div class="col-span-3">
                <div class="text-p1-font font-medium">Doctor Name</div>
                <div class="text-p2-font ">Rajah</div>
            </div>
            <div class="col-span-3">
                <div class="text-p1-font font-medium">Doctor Name</div>
                <div class="text-p2-font ">Rajah</div>
            </div>
            <div class="col-span-3">
                <div class="text-p1-font font-medium">Doctor Name</div>
                <div class="text-p2-font ">Rajah</div>
            </div>
        </div>
    </div>
</div>