<script lang="ts">
  export let bio: string;
  export let alt: string;

  import AffieImage from '../assets/affie-picture.webp';
  import AspenImage from '../assets/aspen-picture.webp';
  import CardSeparator from '../assets/card separator.svg';
  import JackImage from '../assets/jack-picture.webp';
  import LeoImage from '../assets/leo-picture.webp';
  import MercedesImage from '../assets/mercedes-picture.webp';
  import PeterImage from '../assets/peter-picture.webp';
  import StevenImage from '../assets/steven-picture.webp'

  const images = {
    "Affie": AffieImage,
    "Aspen": AspenImage,
    "Jack": JackImage,
    "Leo": LeoImage,
    "Mercedes": MercedesImage,
    "Peter": PeterImage,
    "Steven": StevenImage,
  };
</script>

<div class="outer">
  <div class="picture">
    <img src={images[alt]} alt={alt} />
  </div>
  <img class="separator" src={CardSeparator} alt="separator" />
  <div class="bio">
    <p>
      {bio}
    </p>
  </div>
</div>

<style lang="scss">
  .outer {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 2px solid white;
    border-radius: 30px;
    background-color: #2e2e51;
    outline: 1px solid #cbdbfc;
    outline-offset: -10px;
    padding: 20px 30px 20px 30px;
  }

  .picture {
    width: 20%;
  }

  .bio {
    width: 80%;
  }

  img {
    width: 100%;
  }

  p {
    padding-left: 40px;
    text-align: justify;
    color: #cbdbfc;
    font-size: 24px;
  }

  .separator {
    display: none;
  }

  @media (max-width: $desktop) {
    .outer {
      flex-direction: column;
      width: calc(100% - 60px);
      padding: 20px 30px 10px 30px;
    }

    .picture {
      width: 60%;
      padding-bottom: 20px;
    }

    .bio {
      width: 100%;
    }

    p {
      padding-left: 0;
      font-size: 20px;
    }

    .separator {
      display: flex;
    }
  }
</style>
