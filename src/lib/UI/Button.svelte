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
    <button on:click={handleClick}  class={`  text-center border  px-4 font-semibold ${customClass} `}>{title} </button>
</div>