<script>
    	import { beforeUpdate } from 'svelte';
    import  "../app.css"
    import 'tw-elements/dist/css/index.min.css'
    import '@fortawesome/fontawesome-free/css/all.css'
    beforeUpdate(async () => {
    await import('tw-elements/dist/src/js/index.js')
})
</script>
<div class="relative">

                <slot></slot>
     
</div>


 
  