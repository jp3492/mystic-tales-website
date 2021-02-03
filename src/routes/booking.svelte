<script context="module">
  export function preload({ params, query }) {
    // request to get artists
    return this.fetch(`artists.json`)
      .then(r => r.json())
      .then(artists => {
        return { artists, ...query };
      });
  }
</script>

<script>
  import { onMount } from "svelte";
  import BookingForm from "../components/BookingForm.svelte";
  import Header from "../components/Header.svelte";

  export let artists, slectedArtist;

  let selectedArtists = [],
    selectOpen = false;

  onMount(() => {
    if (slectedArtist) {
      selectedArtists = [selectedArtist];
    }
  });

  const toggleArtist = _id => {
    if (selectedArtists.includes(_id)) {
      selectedArtists = selectedArtists.filter(a => a !== _id);
    } else {
      selectedArtists = [...selectedArtists, _id];
    }
  };

  const toggleSelect = () => {
    selectOpen = !selectOpen;
  };
</script>

<style>
  main {
    grid-template-columns: max-content minmax(max-content, 500px);
    grid-template-areas: "header header" "artists form";
    place-content: center;
  }
  aside {
    grid-area: artists;
    display: grid;
  }

  button {
    display: none;
  }

  li {
    padding: 0.3em 0.5em;
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 10px;
    align-items: center;
  }
  li > img {
    border-radius: 50%;
  }
  .selected {
    background-color: lightgray;
  }
  @media screen and (max-width: 820px) {
    main {
      grid-template-columns: 1fr;
      grid-template-areas:
        "header"
        "artists"
        "form";
    }
    aside > ul {
      display: none;
      position: fixed;
      width: 90vw;
      left: 5vw;
      top: 10vh;
      height: 80vh;
    }
    button {
      display: grid;
      place-items: center;
      padding: 1em;
      background-color: lightgray;
    }
    .open > ul {
      display: grid;
      z-index: 1;
      background-color: white;
      padding: 1em;
    }
    .open > button {
      position: fixed;
      height: 100vh;
      width: 100%;
      top: 0;
      left: 0;
      background-color: lightgray;
      color: lightgray;
      opacity: 0.5;
    }
  }
</style>

<svelte:head>
  <title>Booking - Mystic Tales</title>
</svelte:head>

<main>

  <Header label="Booking" />

  <aside class:open={selectOpen}>
    <button on:click={toggleSelect}>
      {selectedArtists.length === 0 ? 'Select Artists' : `${selectedArtists.length} selected`}
    </button>
    <ul>
      {#each artists as artist, index (artist._id)}
        <li
          on:click={() => toggleArtist(artist._id)}
          class:selected={selectedArtists.includes(artist._id)}>
          <img
            src="https://static.wixstatic.com/media/d6844f_7848385f32b44d38852c7e3ae531e392~mv2.jpg/v1/fill/w_540,h_509,al_c,q_80,usm_0.66_1.00_0.01/d6844f_7848385f32b44d38852c7e3ae531e392~mv2.webp"
            height="30px"
            alt="artist profile picture" />
          <label>{artist.name}</label>
        </li>
      {/each}
    </ul>
  </aside>

  <BookingForm />

</main>
