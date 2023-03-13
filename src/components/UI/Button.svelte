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
    <button on:click={handleClick}  class={`w-full rounded-xl p-3 text-center border   font-semibold ${customClass} `}>{title} </button>
</div>