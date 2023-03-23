<script>

    import { onMount } from "svelte";
    import { env } from '$env/dynamic/public'
    import Loader from "../../components/UI/Loader.svelte";
    let posts =[];

    async function getData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        posts = await res.json();
        console.log(posts);
    }
    onMount(()=>{
         getData();
    })
</script>
{env.PUBLIC_API_KEY}
{#each posts as post,i  }
    <h3>{post.id} {post.title}</h3>
    <p>{post.body}</p>
    {:else}
    <p>
       <Loader/>
    </p>
{/each}