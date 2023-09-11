<script lang="ts">
  export let to: string;
  export let faIcon: string | undefined = undefined;
  export let newTab = false;
  export let ariaLabel: string;
</script>

<div class="container">
  <a href={to} target={newTab ? "_blank" : null} aria-label={ariaLabel}>
    <div>
      {#if faIcon}
        <i class={faIcon}></i>
      {/if}
    </div>
  </a>
</div>

<style lang="scss">
  $link-color: #b4f28a;
  a {
    text-decoration: none;
    color: #444280;
    font-size: 18px;
    font-weight: bold;
    background-color: white;
    border-radius: 12px;
    transition: background-color 100ms ease-in-out;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    &:hover {
      background-color: #e5edff;
      color: #444280;
    }
  }

  .container {
    margin: 0px 10px 0px 10px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1/1;
    width: 40px;
    height: 40px;
  }
</style>
