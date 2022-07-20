<script>
  import logo from './assets/center_logo.png'
</script>

<div class="bg">
  <div class="img-container">
    <img src="{logo}" alt="logo" />
  </div>
  <i class="fas fa-angle-down"></i>
</div>

<style>
  .bg {
    background-image: url('./assets/background.png');
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

  i {
    font-size: 48px;
    color: white;
  }
</style>
