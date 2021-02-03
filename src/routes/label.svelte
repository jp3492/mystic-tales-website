<script>
  const texts = [
    "“A chemist, who is not a mystic, did not break through yet. He has not seen the other side till now.” Freely translated from a speech of Albert Hoffmann.",
    "The ones who have seen the other side, can not come back without being touched and inspired by what they have experienced. Some choose to process their journey by expressing it through art, so that others can take part of it.",
    "By telling our stories, we want to invite you to dive into the connection we feel and share our vision with the world. Following this mantra, we support our artists in expressing themselves, while building a platform for music, art and love, to celebrate the joy of life.",
    "“My art has always been in response to visions. Rather than confine my subject to representations of the outer worlds, I include portrayals of the multi-dimensional imaginal realms that pull us toward consciousness evolution.” - Alex Grey"
  ];

  const links = ["", "", "", "", ""];
</script>

<style>

</style>

<svelte:head>
  <title>Label & Releases</title>
</svelte:head>

<main>

  <header>
    <h1>Label & Releases</h1>
  </header>

  <div class="info">
    {#each texts as text}
      <p>{text}</p>
    {/each}
  </div>

  <ul>
    {#each links as link}
      <li>
        <iframe
          title="soundcloud"
          width="100%"
          height="200"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/337180427&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
      </li>
    {/each}
  </ul>

</main>
