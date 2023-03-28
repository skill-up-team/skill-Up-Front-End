<script>

    import { onMount } from "svelte";
    import Loader from "../../lib/UI/Loader.svelte";
    export let data
    let posts =[];
const DEPLOYMENT_ENV = import.meta.env.VITE_PUBLIC_BASE_PATH;
    async function getData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        posts = await res.json();
        console.log(posts);
    }
    onMount(()=>{
     
    })
</script>
{DEPLOYMENT_ENV}


{data.name}
{data.age}
<!-- {#each posts as post,i  }
    <h3>{post.id} {post.title}</h3>
    <p>{post.body}</p>
    {:else}
    <p>
       <Loader/>
    </p>
{/each} -->