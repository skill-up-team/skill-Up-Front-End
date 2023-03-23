<script>
    import { metadata } from '@sveltejs/kit';
    const pageMetadata = metadata({
      title: 'My SvelteKit App',
      description: 'This is a description of my SvelteKit app'
    });
  </script>
  
  <svelte:head>
    <!-- This will add the metadata to the <head> of your HTML document -->
    {pageMetadata}
  </svelte:head>