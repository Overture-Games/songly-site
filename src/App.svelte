<script lang="ts">
  import Header from "./Header.svelte";
  import Paragraph from "./components/Paragraph.svelte";
  import Section from "./components/Section.svelte";
  import TagLine from "./components/TagLine.svelte";
  import Title from "./components/Title.svelte";
  import LargeLink from "./components/LargeLink.svelte";
  import Footer from "./Footer.svelte";
  import Anchor from "./components/Anchor.svelte";
</script>

<Header />
<Anchor name="content" />
<Section>
  <TagLine>
    Overture Games makes beginner musicians stress free when they practice.
  </TagLine>
  <Paragraph>
    Over 50% of beginner music students quit in the first 1-2 years of practice.
    After interviewing over a hundred students, parents and teachers we found that
    the main reason for quitting was because practice is boring, lonely and frustrating.
    Current solutions fail to make practicing fun for everyone, and that's where our first
    game Intervallic comes in.
  </Paragraph>
</Section>
<Section>
  <Title>
    With Intervallic, you can play your instrument in front of a device with a microphone to
    cause a character in the game react in real-time. 
  </Title>
  <LargeLink to="https://discord.gg/jaHwtTZQvG" faIcon="fab fa-discord" newTab>
    Stay updated on our Discord server
  </LargeLink>
</Section>
<Footer />

<style>

</style>
