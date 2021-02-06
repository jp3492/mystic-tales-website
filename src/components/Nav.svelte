<script>
  export let segment;
  let open = false;

  $: {
    if (segment) {
      open = false;
    } else {
      open = false;
    }
  }

  const toggleMenu = () => {
    open = !open;
  };
</script>

<style>
  nav {
    font-weight: 500;
    font-size: 130%;
    padding: 0 1em;
    display: grid;
    justify-content: center;
  }

  nav > .desktop {
    position: relative;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    align-items: center;
    display: grid;
  }

  nav > .desktop > ul {
    display: grid;
    grid-auto-flow: column;
    place-items: center;
    column-gap: 20px;
  }

  .desktop > ul > li {
    display: grid;
    place-items: center;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  ul > button {
    display: none;
  }

  li {
    display: block;
    float: left;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
  div > button {
    display: none;
    justify-self: end;
  }
  @media screen and (max-width: 820px) {
    div > button {
      display: grid;
    }
    ul {
      position: fixed;
      display: grid;
      height: 100vh;
      width: 250px;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: white;
      grid-auto-rows: max-content;
      gap: 10px;
      z-index: 1;
      justify-items: center;
      padding: 0;
      transform: translateX(250px);
    }
    ul > button {
      display: inline;
      justify-self: end;
      padding: 1em 2em;
    }
    .open > ul {
      transition: transform 0.15s ease-in;
      transform: translateX(0);
      box-shadow: var(--shadow-l);
    }
  }
</style>

<nav>
  <div class="desktop">
    <ul>
      <li>
        <a aria-current={segment === undefined ? 'page' : undefined} href=".">
          About
        </a>
      </li>
      <li>
        <a
          rel="prefetch"
          aria-current={segment === 'artists' ? 'page' : undefined}
          href="artists">
          Artists
        </a>
      </li>
      <li>
        <a
          aria-current={segment === 'booking' ? 'page' : undefined}
          href="booking">
          Booking
        </a>
      </li>
      <li>
        <a
          rel="prefetch"
          aria-current={segment === 'events' ? 'page' : undefined}
          href="events">
          Events
        </a>
      </li>
    </ul>

    <img src="logo-s.png" alt="logo" height="120px" />
    <ul>
      <li>
        <a
          rel="prefetch"
          aria-current={segment === 'cast' ? 'page' : undefined}
          href="cast">
          Mystic Cast
        </a>
      </li>
      <li>
        <a aria-current={segment === 'label' ? 'page' : undefined} href="label">
          Label & Releases
        </a>
      </li>
      <li>
        <a
          aria-current={segment === 'contact' ? 'page' : undefined}
          href="contact">
          Contact
        </a>
      </li>
    </ul>
  </div>
  <!-- <div class:open>
    <img src="logo-s.png" alt="logo" height="60px" />
    <ul>
      <button on:click={toggleMenu}>
        <img src="close.svg" height="20px" alt="close mobile menu" />
      </button>
      <li>
        <a aria-current={segment === undefined ? 'page' : undefined} href=".">
          About
        </a>
      </li>
      <li>
        <a
          rel="prefetch"
          aria-current={segment === 'artists' ? 'page' : undefined}
          href="artists">
          Artists
        </a>
      </li>
      <li>
        <a
          aria-current={segment === 'booking' ? 'page' : undefined}
          href="booking">
          Booking
        </a>
      </li>
      <li>
        <a
          rel="prefetch"
          aria-current={segment === 'events' ? 'page' : undefined}
          href="events">
          Events
        </a>
      </li>
      <li>
        <a
          rel="prefetch"
          aria-current={segment === 'cast' ? 'page' : undefined}
          href="cast">
          Mystic Cast
        </a>
      </li>
      <li>
        <a aria-current={segment === 'label' ? 'page' : undefined} href="label">
          Label & Releases
        </a>
      </li>
      <li>
        <a
          aria-current={segment === 'contact' ? 'page' : undefined}
          href="contact">
          Contact
        </a>
      </li>
    </ul>
    <button on:click={toggleMenu}>
      <img src="menu.svg" height="25px" alt="open mobile menu" />
    </button>
  </div> -->
</nav>
