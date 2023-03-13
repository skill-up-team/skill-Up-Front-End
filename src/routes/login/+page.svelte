<script>
    import Input from "../../components/UI/Input.svelte";
    import TopBar from "../../components/TopNavBar.svelte";
    import Footer from "../../components/Footer.svelte";
    import Button from "../../components/UI/Button.svelte";
    import  "../../app.css";
</script>
<div class="">
    <TopBar></TopBar>
    <div class="container my-24 ">
        <div class="w-1/4  px-4 py-6 rounded-md m-auto bg-gray-50 ">
            
            <label class="text-primary-font font-bold text-h2-font mb-6" for="">Sign In</label>
            <div class="mt-4">
                <Input lableName={"User Name"}/>
            </div>
            <div class="mt-4">
                <Input lableName={"Password"}/>
            </div>
            <div class="mt-4">
                <Button title={'save'}  customClass={'bg-primary-color text-white'}></Button>
            </div>
            
        </div>
    </div>
    <Footer></Footer>
</div>
