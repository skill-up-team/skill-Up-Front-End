<script>
    export let lableName
    export let value;

function onInput(event) {
    value = event.target.value;
  }

</script>

<div>
    <div class="bg-white border rounded-xl px-2 pt-2 pb-1" >
        <div class="md-input-main">
            <div class="md-input-box">
                <input
                bind:value={value}
                 on:input
                type="text" class="md-input "  placeholder=" "/>
                <label class="md-label" for="id"> {lableName} </label>
            </div>
        </div>
    </div>
    <!-- <div v-if="showErrorLabels" class="text-xs text-red-500 font-medium px-2 pt-1">
        {{ $t(error) }}
    </div> -->
</div>