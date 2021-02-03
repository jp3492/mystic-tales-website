<script>
  import { url } from "../stores";
  const handleClose = () => url.set();
</script>

<style>
  div {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: grid;
    box-shadow: var(--shadow-l);
    background-color: var(--cl-grey);
  }
  button {
    position: absolute;
    right: 0;
    top: -30px;
  }
</style>

<div>
  {#if $url}
    <iframe
      title="soundcloud"
      width="100%"
      height="100"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src={$url} />
    <button on:click={handleClose}>
      <img src="close-w.svg" height="20px" alt="close player" />
    </button>
  {/if}
</div>
