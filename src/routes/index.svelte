<script>
  const texts = [
    "“A chemist, who is not a mystic, did not break through yet. He has not seen the other side till now.” Freely translated from a speech of Albert Hoffmann.",
    "The ones who have seen the other side, can not come back without being touched and inspired by what they have experienced. Some choose to process their journey by expressing it through art, so that others can take part of it.",
    "By telling our stories, we want to invite you to dive into the connection we feel and share our vision with the world. Following this mantra, we support our artists in expressing themselves, while building a platform for music, art and love, to celebrate the joy of life.",
    "“My art has always been in response to visions. Rather than confine my subject to representations of the outer worlds, I include portrayals of the multi-dimensional imaginal realms that pull us toward consciousness evolution.” - Alex Grey"
  ];
</script>

<style>
  main {
    display: grid;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 120px);
    grid-auto-rows: 1fr;
  }
  .text {
    text-align: center;
    font-weight: 400;
    font-size: 1.2em;
    max-width: 800px;
    padding: max(5%, 4em);
    box-shadow: var(--shadow-l);
    background-color: var(--cl-brown-opace);
    color: var(--cl-text-b);
    /* text-shadow: var(--shadow-text-m); */
  }
</style>

<svelte:head>
  <title>Mystic Tales - Mystic Creatures</title>
</svelte:head>

<main>

  <div class="text">
    {#each texts as text, i (i)}
      <p>{text}</p>
    {/each}
  </div>
</main>
