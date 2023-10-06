<script lang="ts">
  import navbarLeft from '../assets/navbar left.svg'
  import navbarRight from '../assets/navbar right.svg'
  import sixteenthNote from '../assets/sixteenth note.svg'

  function handleButtonClick(event: any) {
    event.currentTarget.blur();
  }
</script>

<div>
  <img src={navbarLeft} alt="navbar left" />
  <button on:click={handleButtonClick} on:click={() => {
    document.getElementById('intervallic').scrollIntoView({ behavior: 'smooth' });
  }}>
    Intervallic
  </button>
  <img src={sixteenthNote} alt="sixteenth note" />
  <button on:click={handleButtonClick} on:click={() => {
    document.getElementById('overview').scrollIntoView({ behavior: 'smooth' });
  }}>
    Overview
  </button>
  <img src={sixteenthNote} alt="sixteenth note" />
  <button on:click={handleButtonClick} on:click={() => {
    document.getElementById('team').scrollIntoView({ behavior: 'smooth' });
  }}>
    Team
  </button>
  <img src={sixteenthNote} alt="sixteenth note" />
  <button on:click={handleButtonClick} on:click={() => {
    document.getElementById('faq').scrollIntoView({ behavior: 'smooth' });
  }}>
    FAQ
  </button>
  <img src={navbarRight} alt="navbar right" />
</div>

<style lang="scss">
  div {
    justify-content: space-evenly;
    align-items: center;
    padding-top: 40px;
    display: flex;
  }

  button {
    font-family: Alegreya;
    color: white;
    background-color: transparent;
    cursor: pointer;
    border: none;
    font-size: 24px;
    transition: 200ms ease-in-out;
    font-weight: 500;

    &:hover {
      color: #cbdbfc;
      transform: translateY(4px);
      text-shadow: 0.5px 0px 1px,
                  -0.5px 0px 1px;
    }

    &:focus {
      color: #cbdbfc;
      text-shadow: 0.5px 0px 1px,
                  -0.5px 0px 1px;
      outline: none;
      text-decoration: underline;
      text-decoration-color: #cbdbfc;
      text-underline-offset: 4px;
      text-decoration-thickness: 2px;
    }
  }

  img {
    overflow-x: hidden;
  }
</style>
