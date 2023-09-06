<script lang="ts">
  import separatorLeft from '../assets/separator left.svg';
  import separatorRight from '../assets/separator right.svg';
  import sixteenthNote from '../assets/sixteenth note.svg';
</script>

<div>
  <img src={separatorLeft} alt="separator left" />
  <img src={sixteenthNote} alt="sixteenth note" />
  <img src={separatorRight} alt="separator right" />
</div>

<style lang="scss">
  div {
    justify-content: space-evenly;
    align-items: center;
    padding-top: 40px;
    display: flex;
  }

  img {
    overflow-x: hidden;
  }
</style>
