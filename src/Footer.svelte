<script lang="ts">
  import Separator from "./components/Separator.svelte";
  import SmallLink from "./components/SmallLink.svelte";
</script>

<footer>
  <Separator />
  <div>
    <SmallLink 
      to="https://discord.gg/8qn2m3uKan"
      faIcon="fab fa-discord"
      newTab
      ariaLabel="Discord"
    >
    </SmallLink>
    <SmallLink 
      to="https://store.steampowered.com/app/2270460/Intervallic/"
      faIcon="fab fa-steam"
      newTab
      ariaLabel="Steam"
    >
    </SmallLink>
    <SmallLink 
      to="https://itch.io/profile/overturegames"
      faIcon="fab fa-itch-io"
      newTab
      ariaLabel="itch.io"
    >
    </SmallLink>
    <SmallLink 
      to="https://www.instagram.com/overturegames/"
      faIcon="fab fa-instagram"
      newTab
      ariaLabel="Instagram"
    >
    </SmallLink>
    <SmallLink 
      to="https://www.linkedin.com/company/overture-games"
      faIcon="fab fa-linkedin"
      newTab
      ariaLabel="LinkedIn"
    >
    </SmallLink>
    <SmallLink 
      to="https://www.youtube.com/channel/UCKpXdbdDTjqymi79hnCnR6A"
      faIcon="fab fa-youtube"
      newTab
      ariaLabel="YouTube"
    >
    </SmallLink>
  </div>
  <p>
    Contact us at <a href="mailto:overturegamestudio@gmail.com">overturegamestudio@gmail.com</a>
  </p>
  <p>
    Copyright © Overture Games, LLC. All rights reserved.
  </p>
  <!-- todo: add contact info somewhere -->
</footer>

<style lang="scss">
  footer {
    background-color: #1d1731;
    margin: 0;
    padding: 32px;
  }

  p {
    margin: 0;
    color: #cbdbfc;
    text-align: center;
    font-size: 20px;
    opacity: 75%;
  }

  a {
    color: #cbdbfc;
  }

  div {
    justify-content: center;
    align-items: center;
    padding: 40px 0 20px 0;
    display: flex;
  }
</style>
