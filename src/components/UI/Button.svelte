<script>
    // @ts-ignore
    export let title;
    export let customClass;
    export let onButtonClick;
    function handleClick() {
        onButtonClick()
    }
</script>


<div class="">
    <button on:click={handleClick}  class={` rounded-xl  text-center border   font-semibold ${customClass} `}>{title} </button>
</div>