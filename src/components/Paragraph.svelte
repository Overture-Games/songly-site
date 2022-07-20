<p>
  <slot />
</p>

<style lang="scss">
  p {
    font-size: 24px;
    color: #cbdbfc;
    max-width: 90%;
    display: block;
    margin: 0 auto;
    @media (min-width: $desktop) {
      max-width: 75%;
    }
  }
</style>
