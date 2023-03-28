<script>

    import { onMount } from "svelte";
    import { env } from '$env/dynamic/public'
    import Loader from "../../lib/UI/Loader.svelte";
    export let data
    let posts =[];

    async function getData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        posts = await res.json();
        console.log(posts);
    }
    onMount(()=>{
     ;
    })
</script>
{env.TestName}


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