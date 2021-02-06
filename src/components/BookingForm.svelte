<script>
  import DateButton from "./DateButton.svelte";

  let selectedTab = "event";

  const handleClick = ({ target: { id } }) => (selectedTab = id);

  let values = {};

  const handleDateChange = ({ detail }) => (values.eventDate = detail);
</script>

<style>
  .booking-form {
    box-shadow: var(--shadow-l);
    background-color: var(--cl-brown-opace);
    position: relative;
    overflow: hidden;

    display: grid;
    grid-template-rows: max-content 1fr;
  }

  .tabs {
    display: grid;
    grid-auto-flow: column;
    place-items: stretch;
    border-bottom: 1px solid lightgrey;
  }

  .tabs > label {
    display: grid;
    place-content: center;
    padding: 0.5em;
  }

  .avticeTab {
    background-color: lightgrey;
  }

  .sections {
    display: grid;
    grid-auto-flow: column;
    place-content: stretch;
    gap: 5px;
    padding: 1em;
  }

  .sections > div {
    position: relative;
    display: none;
  }
  .sections > .active {
    display: grid;
    gap: 15px;
    grid-template-rows: 1fr max-content;
  }
  .sections label {
    display: grid;
  }
  .section-nav {
    display: grid;
    grid-template-columns: 1fr max-content;
    justify-items: start;
    align-self: end;
  }
  .next,
  .submit {
    width: 80px;
    justify-self: end;
    padding: 0.5em 1em;
    background-color: lightgrey;
    display: flex;
    align-items: center;
    place-content: space-between;
  }
  .back {
    width: 80px;
    justify-self: start;
    padding: 0.5em 1em;
    background-color: lightgrey;
    display: flex;
    align-items: center;
    place-content: space-between;
  }
  .next > img {
    transform: rotate(90deg);
  }
  .back > img {
    transform: rotate(-90deg);
  }
</style>

<div class="booking-form">
  <div class="tabs">
    <label
      class:avticeTab={selectedTab === 'event'}
      id="event"
      on:click={handleClick}>
      Event
    </label>
    <label
      class:avticeTab={selectedTab === 'promoter'}
      id="promoter"
      on:click={handleClick}>
      Promoter
    </label>
    <label
      class:avticeTab={selectedTab === 'promoterAddress'}
      id="promoterAddress"
      on:click={handleClick}>
      P. Address
    </label>
    <label
      class:avticeTab={selectedTab === 'venue'}
      id="venue"
      on:click={handleClick}>
      Venue
    </label>
    <label
      class:avticeTab={selectedTab === 'venueAddress'}
      id="venueAddress"
      on:click={handleClick}>
      V. Address
    </label>
  </div>
  <div class="sections">
    <div class:active={selectedTab === 'event'}>
      <div class="fields">
        <label class="date-label">
          Select Date
          <DateButton on:change={handleDateChange} />
        </label>
        <label>
          Event Name
          <input type="text" bind:value={values.eventName} />
        </label>
        <label>
          Event Duration
          <input type="text" bind:value={values.eventDuration} />
        </label>
      </div>

      <div class="section-nav">
        <button id="promoter" on:click={handleClick} class="next">
          Next
          <img src="up-arrow.svg" alt="next step" height="20px" />
        </button>
      </div>
    </div>
    <div class:active={selectedTab === 'promoter'}>
      <div class="fields">
        <label>
          Company Name
          <input type="text" bind:value={values.companyName} />
        </label>
        <label>
          First Name
          <input type="text" bind:value={values.firstName} />
        </label>
        <label>
          Last Name
          <input type="text" bind:value={values.lastName} />
        </label>
        <label>
          Email
          <input type="email" bind:value={values.promoterEmail} />
        </label>
        <label>
          Company Phone Number
          <input type="text" bind:value={values.promoterCompanyNumber} />
        </label>
        <label>
          Phone Number
          <input type="text" bind:value={values.promoterPhone} />
        </label>
        <label>
          Website
          <input type="text" bind:value={values.promoterWebsite} />
        </label>
        <label>
          VAT Number
          <input type="text" bind:value={values.promoterVat} />
        </label>
      </div>
      <div class="section-nav">
        <button id="event" on:click={handleClick} class="back">
          <img src="up-arrow.svg" alt="last step" height="20px" />
          Back
        </button>
        <button id="promoterAddress" on:click={handleClick} class="next">
          Next
          <img src="up-arrow.svg" alt="next step" height="20px" />
        </button>
      </div>
    </div>
    <div class:active={selectedTab === 'promoterAddress'}>
      <div class="fields">
        <label>
          Street
          <input type="text" bind:value={values.promoterStreet} />
        </label>
        <label>
          House Number
          <input type="text" bind:value={values.promoterHouse} />
        </label>
        <label>
          City
          <input type="text" bind:value={values.promoterCity} />
        </label>
        <label>
          Postal Code
          <input type="text" bind:value={values.promoterZip} />
        </label>
        <label>
          Country
          <input type="text" bind:value={values.promoterCountry} />
        </label>
      </div>
      <div class="section-nav">
        <button id="promoter" on:click={handleClick} class="back">
          <img src="up-arrow.svg" alt="last step" height="20px" />
          Back
        </button>
        <button id="venue" on:click={handleClick} class="next">
          Next
          <img src="up-arrow.svg" alt="next step" height="20px" />
        </button>
      </div>
    </div>
    <div class:active={selectedTab === 'venue'}>
      <div class="fields">
        <label>
          Name
          <input type="text" bind:value={values.venueName} />
        </label>
        <label>
          Capacity
          <input type="number" bind:value={values.venueCapacity} />
        </label>
        <label>
          Website
          <input type="text" bind:value={values.venueWebsite} />
        </label>
        <label>
          Phone
          <input type="text" bind:value={values.venuePhone} />
        </label>
        <label>
          Fee
          <input type="number" bind:value={values.venueFee} />
        </label>
      </div>
      <div class="section-nav">
        <button id="promoterAddress" on:click={handleClick} class="back">
          <img src="up-arrow.svg" alt="last step" height="20px" />
          Back
        </button>
        <button id="venueAddress" on:click={handleClick} class="next">
          Next
          <img src="up-arrow.svg" alt="next step" height="20px" />
        </button>
      </div>
    </div>
    <div class:active={selectedTab === 'venueAddress'}>
      <div class="fields">
        <label>
          Street
          <input type="text" bind:value={values.venueStreet} />
        </label>
        <label>
          House Number
          <input type="text" bind:value={values.venueHouse} />
        </label>
        <label>
          City
          <input type="text" bind:value={values.venueCity} />
        </label>
        <label>
          Postal Code
          <input type="text" bind:value={values.venueZip} />
        </label>
        <label>
          Country
          <input type="text" bind:value={values.venueCountry} />
        </label>
      </div>
      <div class="section-nav">
        <button id="venue" on:click={handleClick} class="back">
          <img src="up-arrow.svg" alt="last step" height="20px" />
          Back
        </button>
        <button id="venue" on:click={handleClick} class="submit">
          Submit
          <img src="check.svg" alt="submit request" height="20px" />
        </button>
      </div>
    </div>
  </div>
</div>
