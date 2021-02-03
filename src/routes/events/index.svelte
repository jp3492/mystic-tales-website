<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`events.json`)
      .then(r => r.json())
      .then(events => {
        return {
          events,
          eventType: query.type ? query.type : "mystic-creatures"
        };
      });
  }
</script>

<script>
  import Header from "../../components/Header.svelte";
  export let events, eventType;

  const types = [
    { name: "Mystic Creatures", path: "mystic-creatures" },
    { name: "Mystic Tales", path: "mystic-tales" },
    { name: "Kali Yuga", path: "kali-yuga" },
    { name: "Dance As You Are", path: "dance-as-you-are" }
  ];
</script>

<style>
  main {
    grid-template-columns: max-content 1fr;
    grid-template-areas: "header header" "types events";
  }
  aside {
    grid-area: types;
  }
  ul {
    display: grid;
    place-content: center;
  }
  li {
    padding: 0.3em 0.5em;
    display: grid;
    align-items: center;
  }
  .selected {
    background-color: lightgrey;
  }
  .events {
    grid-area: events;
  }
  .event {
    position: relative;
    display: grid;
    grid-auto-rows: max-content;
    gap: 10px;
    justify-items: center;
    max-width: 600px;
  }
  @media screen and (max-width: 820px) {
    main {
      grid-template-columns: 1fr;
      grid-template-areas: "header" "types" "events";
    }
  }
</style>

<svelte:head>
  <title>Events</title>
</svelte:head>

<main>

  <Header label="Events" />
  <aside>
    <ul>
      {#each types as type}
        <li class:selected={eventType === type.path}>
          <a href="events?type={type.path}">{type.name}</a>
        </li>
      {/each}
    </ul>
  </aside>

  <ul class="events">
    {#each events as event}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li>
        <a rel="prefetch" href="events/{event._id}" class="event">

          <h3>{event.name}</h3>
          <p>{event.lineUp.map(l => `${l.name} `)}</p>
          <img src={event.image} alt="event image" height="auto" width="100%" />
        </a>
      </li>
    {/each}
  </ul>

</main>
