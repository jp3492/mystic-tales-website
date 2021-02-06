<script>
  import { createEventDispatcher, onMount } from "svelte";

  const dispatch = createEventDispatcher();

  const now = new Date();
  let init = false;

  let values = {
    year: now.getFullYear(),
    month: now.getMonth(),
    day: now.getDate()
  };

  $: {
    if (init) {
      const newDate = new Date(values.year, values.month, values.day);
      dispatch("change", newDate.getTime());
    }
  }

  const years = new Array(2).fill("").map((y, i) => now.getFullYear() + i);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  $: days = new Array(new Date(values.year, values.month, 0).getDate())
    .fill("")
    .map((v, i) => i + 1);

  let open = false;

  const toggleDate = () => {
    if (!init) init = true;
    open = !open;
  };

  Date.prototype.toReadableString = function() {
    const thisDate = new Date(this);
    console.log(this);

    return `${thisDate.getDate()} - ${thisDate.getMonth() +
      1} - ${thisDate.getFullYear()}`;
  };
</script>

<style>
  button {
    padding: 0.5em;
    background-color: lightgrey;
    display: grid;
    place-items: center;
    border-radius: 4px;
    max-width: 150px;
  }

  div {
    display: none;
    position: fixed;
    width: 90vw;
    max-width: 400px;
    left: 50vw;
    top: 50vh;
    transform: translateX(-50%) translateY(-50%);
    padding: 1em;
    background-color: white;
  }

  .open {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: var(--cl-grey-opace);
    max-width: 100vw;
  }

  .open > div {
    display: grid;
    gap: 10px;
  }
</style>

<button class:open on:click={toggleDate}>
  {init ? new Date(values.year, values.month, values.day).toReadableString() : 'Select Date'}
  <div on:click|stopPropagation>
    <h3>Select Date</h3>
    <select bind:value={values.year}>
      {#each years as year, index}
        <option value={year}>{year}</option>
      {/each}
    </select>
    <select bind:value={values.month}>
      {#each months as month, index}
        <option value={index}>{month}</option>
      {/each}
    </select>
    <select bind:value={values.day}>
      {#each days as day, index}
        <option value={index}>{day}</option>
      {/each}
    </select>
  </div>
</button>
