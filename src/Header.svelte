<script lang="ts">
  import logo from './assets/center_logo.png'
  import LargeLink from './components/LargeLink.svelte';

  function handleButtonClick(event: any) {
    event.currentTarget.blur();
  }
</script>

<div class="bg">
  <div class="img-container">
    <img src="{logo}" alt="logo" />
  </div>
  <LargeLink to="https://store.steampowered.com/app/2270460" faIcon="fab fa-steam" newTab>
    Intervallic out 9/29!
  </LargeLink>
  <button aria-label="scroll down" on:click={handleButtonClick} on:click={() => {
    document.getElementById('overview').scrollIntoView({ behavior: 'smooth' });
  }}>
    <i class="fas fa-angle-down"></i>
  </button>
</div>

<style lang="scss">
  .bg {
    background-image: url('./assets/background.webp');
    background-size: 2500px;
    background-position: top;
    height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (min-width: $desktop) {
      background-position: top;
      background-size: cover;
    }
  }

  .img-container {
    padding: 10px;
  }

  img {
    width: 100%;
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      transform: translateY(8px);
      i {
        color: #e5edff;
        text-shadow: 1px 0px 2px,
                    -1px 0px 2px;
      }
    }

    &:focus {
      transform: scale(1.3);
      i {
        color: #e5edff;
        text-shadow: 1px 0px 2px,
                    -1px 0px 2px;
      }
    }
  }

  i {
    font-size: 48px;
    color: white;
  }

</style>
