<script lang="ts">
  import watermark from './assets/website-watermark.svg'
</script>

<footer>
  <p>
    Copyright © Overture Games, LLC. All rights reserved.
  </p>
  <div>
    <a href="https://www.dilanxd.com" target="_blank" rel="noreferrer">
      <img src={watermark} alt="website created by Dilan Nair" />
    </a>
  </div>
</footer>

<style lang="scss">
  footer {
    background-color: #1d1731;
    margin: 0;
    padding: 32px;
  }

  div {
    display: flex;
    justify-content: center;
    margin-top: 16px;
   
    a {
      opacity: 0.5;
      transition: opacity 150ms;
      
      &:hover {
        opacity: 1;
      }
    }

    img {
      width: 280px;

      @media (min-width: $desktop) {
        width: 320px;
      }
    }
  }

  p {
    margin: 0;
    color: #cbdbfc;
    text-align: center;
    font-size: 20px;
    opacity: 50%;
  }
</style>
