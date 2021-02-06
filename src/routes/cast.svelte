<script>
  import Header from "../components/Header.svelte";
  import { url } from "../stores";

  const casts = ["", "", "", ""];

  const openPlayer = link => {
    url.update(
      s =>
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/337180427&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    );
  };
</script>

<style>
  main {
    grid-template-areas: "header";
  }
  ul {
    display: grid;
    row-gap: 20px;
  }
  li {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 20px;
  }
  li > div {
    display: grid;
    column-gap: 20px;
    grid-template-rows: max-content 1fr;
    gap: 20px;
  }
  li > div > h2 {
    grid-column: 1 / 3;
  }
  li > div > button {
    justify-self: end;
  }
  button {
    display: flex;
    align-items: center;
    background-color: var(--cl-brown-opace);
    border: 1px solid var(--cl-brown);
    border-radius: 4px;
    padding: 1em 2em;
    height: max-content;
    align-self: end;
    color: var(--cl-skin);
  }
  button > label {
    padding-right: 20px;
    font-size: 1.3em;
  }
</style>

<svelte:head>
  <title>Traumcast</title>
</svelte:head>

<main>

  <Header label="Traumcast" />

  <ul>
    {#each casts as cast, i}
      <li class="card padding-s">
        <img src={`casts/${i + 1}.png`} height="200" alt="cast image" />
        <div>
          <h2>Traumcast {i + 1} - Title hier</h2>
          <p>
            Beschreibung hier. akdsböasidh lksnd dsoifä sdkbfväosdfm
            sucöfk.jndfö vuöfädöud m.cv kub vm.v kj- u
          </p>
          <button on:click={openPlayer}>
            <label>Listen</label>
            <img src="play.svg" height="25" alt="play cast" />
          </button>
        </div>
        <!-- <iframe
          title="soundcloud"
          width="100%"
          height="200"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/337180427&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" /> -->
      </li>
    {/each}
  </ul>

</main>
