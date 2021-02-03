<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`events/${params._id}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { event: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let event;
</script>

<style>
  main {
    position: fixed;
    top: 0;
    display: grid;
    height: calc(100vh - 4em);
    width: calc(100% - 4em);
    place-items: center;
    background-color: white;
    padding: 2em;
  }
  img {
    position: relative;
  }
</style>

<svelte:head>
  <title>{event.name}</title>
</svelte:head>

<main>
  <img src={event.image} alt="event image" />
</main>
