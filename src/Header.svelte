<script>
  import logo from './assets/center_logo.png'
  import LargeLink from "./components/LargeLink.svelte";
</script>

<div class="bg">
  <div class="img-container">
    <img src="{logo}" alt="logo" />
  </div>
  <LargeLink to="https://discord.gg/8qn2m3uKan" faIcon="fab fa-discord" newTab>
    Stay updated on our Discord server
  </LargeLink>
  <LargeLink to="https://store.steampowered.com/app/2270460" faIcon="fab fa-steam" newTab>
    Intervallic (Demo) on Steam
  </LargeLink>
  <LargeLink to="https://overturegames.itch.io/intervallic" faIcon="fab fa-itch-io" newTab>
    Intervallic (Demo) on itch.io
  </LargeLink>
  <button on:click={() => {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
  }}>
    <i class="fas fa-angle-down"></i>
  </button>
</div>

<style lang="scss">
  .bg {
    background-image: url('./assets/background.jpg');
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
    transition: transform 200ms ease-in-out;

    &:hover {
      transform: translateY(8px);
    }
  }

  i {
    font-size: 48px;
    color: white;
  }

  
</style>
