<script>
    export let lableName
</script>

<div>
    <div class="bg-white border rounded-xl px-2 pt-2 pb-1" >
        <div class="md-input-main">
            <div class="md-input-box">
                <input
              
                   
                type="text" class="md-input"  placeholder=" "/>
                <label class="md-label" for="id"> {lableName} </label>
            </div>
        </div>
    </div>
    <!-- <div v-if="showErrorLabels" class="text-xs text-red-500 font-medium px-2 pt-1">
        {{ $t(error) }}
    </div> -->
</div>