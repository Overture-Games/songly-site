<script>
  import logo from './assets/center_logo.png'
</script>

<div class="bg">
  <div class="img-container">
    <img src="{logo}" alt="logo" />
  </div>
  <button on:click={() => {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
  }}>
    <i class="fas fa-angle-down"></i>
  </button>
</div>

<style lang="scss">
  .bg {
    background-image: url('./assets/background.jpg');
    background-size: cover;
    background-position: center;
    height: 640px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
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
