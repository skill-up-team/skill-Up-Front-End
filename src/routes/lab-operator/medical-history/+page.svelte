<script>
    import "../../../app.css";
    import Button from "../../../lib/UI/Button.svelte";

    let query = '';


</script>

<div class="bg-white p-6 rounded-xl shadow-sm">
    <label for="" class="text-h2-font font-semibold"> Channel Doctor </label>
    <div class="mt-6 rounded-lg">
        <div class="mt-4">
            <div class="grid grid-cols-12 ">
                <div
                    class="col-span-1 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2"
                >
                    Id
                </div>
                <div
                    class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2"
                >
                    Patient Name
                </div>
                <div
                    class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2"
                >
                    Hospital Name
                </div>
                <div
                    class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2"
                >
                    Lab test type
                </div>
                <div
                    class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2"
                >
                    Address
                </div>
                <div
                    class="col-span-1 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2"
                >
                    Date & time
                </div>
                <div
                    class="col-span-2 border bg-gray-50 font-semibold text-p1-font text-left px-3 py-2"
                />
            </div>
            <div class="grid grid-cols-12 ">
                <div class="col-span-1 border text-left p-3  text-p2-font">
                    1002
                </div>
                <div class="col-span-2 border text-left p-3  text-p2-font">
                    Romesh
                </div>
                <div class="col-span-2 border text-left p-3  text-p2-font">
                    Asiri
                </div>
                <div class="col-span-2 border text-left p-3  text-p2-font">
                    Blood test
                </div>
                <div class="col-span-2 border text-left p-3  text-p2-font">
                    asiri hospital, colombo
                </div>
                <div class="col-span-1 border text-left p-3  text-p2-font">
                    25/03/2023
                </div>
                <div class="col-span-2 border text-left p-3  text-p2-font">
                    <a
                        href="update-report?id=102"
                        class="text-primary-color font-semibold cursor-pointer"
                        >Update Details</a
                    >
                </div>
            </div>
        </div>
    </div>
</div>
