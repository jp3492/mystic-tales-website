<script context="module">
  export function preload({ params, query }) {
    // request to get artists
    return this.fetch(`artists.json`)
      .then(r => r.json())
      .then(artists => {
        // console.log("ARTISTS: ", artists);
        return { artists };
      });
  }
</script>

<script>
  export let artists;
</script>

<style>
  main {
    display: grid;
    place-items: center;
    padding-bottom: 100px;
  }
  ul {
    display: grid;
    gap: 60px;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  li > a {
    display: grid;
    place-items: center;
  }
</style>

<svelte:head>
  <title>Artists</title>
</svelte:head>

<main>

  <header>
    <h1>Artists</h1>
  </header>

  <ul>
    {#each artists as artist}
      <li>
        <a rel="prefetch" href="artists/{artist._id}">
          <img
            src={artist.profileImage}
            alt={`${artist.name} profile picture`}
            width="100%" />
          <h2>{artist.name}</h2>
        </a>
      </li>
    {/each}
  </ul>

</main>
