<script lang="ts">
  import Anchor from './components/Anchor.svelte';
  import LargeLink from './components/LargeLink.svelte';
  import QuestionAnswer from './components/QuestionAnswer.svelte';
  import questionsAndAnswersJson from './assets/faq.json';
  import Section from './components/Section.svelte';
  import Separator from './components/Separator.svelte';
  import TagLine from './components/TagLine.svelte';
</script>

<Anchor name="faq" />
<Section>
  <Separator />
  <TagLine>Frequently Asked Questions</TagLine>
  <div class="questions-and-answers">
    {#each questionsAndAnswersJson as { question, answer }}
      <div>
        <QuestionAnswer question message={question} />
        <QuestionAnswer message={answer} />
      </div>
    {/each}
  </div>
  <div class="discord">
    <LargeLink to="https://discord.gg/eeeWxyJMtM" faIcon="fab fa-discord" newTab className="">
      Stay updated on our Discord server
    </LargeLink>
  </div>
</Section>

<style lang="scss">
  .discord {
    align-items: center;
    padding: 40px 0 40px 0;
  }

  .questions-and-answers {
    display: flex;
    flex-direction: column;
    align-items: justify;
    gap: 10px;
  }
</style>