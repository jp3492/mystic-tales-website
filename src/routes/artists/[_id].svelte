<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`artists/${params._id}.json`);
    const artist = await res.json();
    // console.log("ARTIST: ", artist);

    return artist;
  }
</script>

<script>
  import ImageSlider from "../../components/ImageSlider.svelte";
  export let _id, name, text, images, links;

  const socials = [
    { type: "facebook", url: "www.facebook.de" },
    { type: "instagram", url: "www.instagram.de" },
    { type: "soundcloud", url: "www.soundcloud.de" },
    { type: "spotify", url: "www.spotify.de" }
  ];
</script>

<style>
  main {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "header social"
      "text images"
      "soundcloud soundcloud";

    padding-bottom: 100px;
  }

  .social {
    grid-area: social;
    display: grid;
    align-content: center;
  }
  .social > ul {
    display: grid;
    grid-auto-flow: column;
    justify-content: end;
    align-items: center;
    gap: 20px;
  }
  .text {
    grid-area: text;
  }
  .images {
    grid-area: images;
    overflow: hidden;
  }
  .soundcloud {
    grid-area: soundcloud;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    justify-content: center;
  }
  @media screen and (max-width: 820px) {
    main {
      grid-template-columns: 1fr;
      grid-template-areas:
        "header"
        "social"
        "text"
        "images"
        "soundcloud";
    }
    .social {
      justify-content: center;
    }
  }
</style>

<svelte:head>
  <title>{name}</title>
</svelte:head>

<main>

  <header>
    <h1>{name}</h1>
  </header>

  <div class="social">
    <ul>
      {#each socials as social}
        <li>
          <a href={social.url}>
            <img src={`${social.type}.svg`} height="30" alt={social.type} />
          </a>
        </li>
      {/each}
    </ul>
  </div>

  <div class="text">{text}</div>

  <div class="images">
    <ImageSlider {images} {_id} />
    <!-- <ul>
    {#each images as image, index}
      <li>
        <img src={image} alt="picture {index} of {name}" />
      </li>
    {/each}
  </ul> -->
  </div>

  <ul class="soundcloud">
    <!-- {#each links as link}
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
  {/each} -->
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
  </ul>

</main>
