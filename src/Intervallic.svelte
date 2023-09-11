<script lang="ts">
  import Anchor from './components/Anchor.svelte';
  import intervallicPoster from './assets/intervallic.webp';
  import intervallicTrailer from './assets/Trailer-2.mp4';
  import LargeLink from './components/LargeLink.svelte';
  import Paragraph from './components/Paragraph.svelte';
  import Section from './components/Section.svelte';
  import Separator from './components/Separator.svelte';
  import TagLine from './components/TagLine.svelte';
  import Title from './components/Title.svelte';
  import Video from './components/Video.svelte';
</script>

<Anchor name="intervallic" />
<Section>
  <Separator />
  <TagLine>Intervallic</TagLine>
  <Title>
    Get motivated and pick up that dusty instrument!
  </Title>
  <Paragraph>
    Intervallic is an audio-responsive video game that gives real-time feedback 
    and makes even the most boring music practice fun! Use a microphone, MIDI instrument, 
    or computer keyboard to control a flying robot space cat around the planet of 
    Audius!
  </Paragraph>
  <Section>
    <Video
      poster={intervallicPoster}
      src={intervallicTrailer}
    />
  </Section>
  <Paragraph>
    In this single-player 2D side scroller, each note that you play moves the 
    cat up and down on the screen based on the musical intervals that you play. 
    Objects are arranged so that by the end of each level as you collect notes 
    and dodge obstacles you have played a full song. Collect notes in each 
    phrase to unlock each sample and collect all of the samples to beat the 
    level.
  </Paragraph>
  <Title>
    Intervallic will be out in Early Access on September 29th, 2023! Check out the demo below!
  </Title>
  <div class="outer">
    <div class="inner">
      <LargeLink to="https://store.steampowered.com/app/2270460" faIcon="fab fa-steam" newTab>
        Intervallic (Demo) on Steam
      </LargeLink>
    </div>
    <div class="inner">
      <LargeLink to="https://overturegames.itch.io/intervallic" faIcon="fab fa-itch-io" newTab>
        Intervallic (Demo) on itch.io
      </LargeLink>
    </div>
  </div>
</Section>

<style lang="scss">
  .outer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;

    @media (max-width: $desktop) {
      flex-direction: column;
    }
  }

  .inner {
    width: 50%;
    height: 100%;

    @media (max-width: $desktop) {
      width: 100%;
      padding: 15px 0 15px 0;
    }
  }
</style>