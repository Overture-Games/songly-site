<script lang="ts">
  export let to: string;
  export let faIcon: string | undefined = undefined;
  export let newTab = false;
</script>

<div>
  <a href={to} target={newTab ? "_blank" : null}>
    <div class="outer">
      <div>
        {#if faIcon}
          <i class={faIcon}></i>
        {/if}
        <p>
          <slot />
        </p>
      </div>
      <i class="arrow fas fa-arrow-right"></i>
    </div>
  </a>
</div>

<style lang="scss">
  $link-color: #b4f28a;
  a {
    text-decoration: none;
    color: $link-color;
    display: block;
    margin: 0 auto;
    font-size: 24px;
    font-weight: bold;
    border: 2px solid $link-color;
    border-radius: 12px;
    padding: 12px 24px;
    transition: all 100ms ease-in-out;

    &:hover {
      background-color: $link-color;
      color: $background;

      .outer {
        gap: 32px;
      }
    }

    div {
      align-items: center;
      gap: 12px;
      transition: gap 300ms ease-in-out;
    }
  }

  div {
    display: flex;
  }

  p {
    margin: 0;
  }
</style>
