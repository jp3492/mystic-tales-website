<script>
  import Nav from "../components/Nav.svelte";
  import Player from "../components/Player.svelte";

  export let segment;
</script>

<style>
  .banner::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100vh;
    background-image: url("bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  img {
    width: 100%;
  }
  .banner,
  .clouds {
    z-index: -1;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .clouds > img:nth-of-type(even) {
    position: absolute;
    bottom: 0;
    animation: animate calc(var(--i) * var(--i) * 8s) linear infinite;
    opacity: 0.5;
    transform: scale(2);
  }
  .clouds > img:nth-of-type(odd) {
    position: absolute;
    bottom: 0;
    animation: animateB calc(var(--i) * var(--i) * 8s) linear infinite;
    opacity: 0.3;
    transform: scale(3);
  }
  /* .clouds > img:nth-of-type(3), */
  .clouds > img:nth-of-type(5),
  .clouds > img:nth-of-type(8) {
    animation: animateL calc(var(--i) * var(--i) * 8s) linear infinite;
    opacity: 1;
  }
  @keyframes animateL {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes animate {
    0% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(100%);
      opacity: 0;
    }
    51% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
  @keyframes animateB {
    0% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(-100%);
      opacity: 0;
    }
    51% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
</style>

<div class="banner">
  <div class="clouds">
    <img src="client/cloud1.png" style="--i:2" alt="cloud" />
    <img src="client/cloud2.png" style="--i:3" alt="cloud" />
    <img src="client/cloud3.png" style="--i:4" alt="cloud" />
    <img src="client/cloud4.png" style="--i:5" alt="cloud" />
    <img src="client/cloud5.png" style="--i:6" alt="cloud" />
    <!-- <img src="client/cloud1.png" style="--i:6" alt="cloud" />
      <img src="client/cloud2.png" style="--i:7" alt="cloud" /> -->
    <img src="client/cloud3.png" style="--i:7" alt="cloud" />
    <img src="client/cloud5.png" style="--i:8" alt="cloud" />

  </div>
</div>
<Nav {segment} />

<slot />

<Player />
