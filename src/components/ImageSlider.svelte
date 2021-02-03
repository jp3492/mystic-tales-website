<script>
  export let images, _id;
</script>

<style>
  .slider {
    text-align: center;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .slides {
    display: grid;
    grid-auto-flow: column;

    overflow-x: auto;
    scroll-snap-type: x mandatory;

    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
  .slides::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  .slides::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }
  .slides::-webkit-scrollbar-track {
    background: transparent;
  }
  .slides > div {
    scroll-snap-align: center;
    position: relative;
  }

  .links {
    display: grid;
    position: absolute;
    bottom: 0;
    padding: 1em;
    left: 0;
    width: 100%;
    display: grid;
    gap: 10px;
    place-content: center;
    grid-auto-flow: column;
    z-index: 1;
  }

  .links > a {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: lightgrey;
    font-size: 0;
  }
  .links > a:active {
    top: 1px;
  }
  .links > a:focus {
    background: white;
  }
</style>

<div class="slider">

  <div class="slides">
    {#each images as image, index}
      <div id="slide-{index}">
        <img src={image} alt="image {index}" />
      </div>
    {/each}
  </div>
  <div class="links">
    {#each images as image, index}
      <a href="artists/{_id}#slide-{index}">{index}</a>
    {/each}
  </div>
</div>
