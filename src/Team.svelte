<script lang="ts">
  import Anchor from './components/Anchor.svelte';
  import Section from './components/Section.svelte';
  import Separator from './components/Separator.svelte';
  import TagLine from './components/TagLine.svelte';
  import TeamMember from './components/TeamMember.svelte';
  import teamMembersJson from './assets/team.json';
</script>

<Anchor name="team" />
<Section>
  <Separator />
  <TagLine>Meet the Team!</TagLine>
  <div>
    {#each teamMembersJson as { name, bio }}
      <TeamMember bio={bio} alt={name} />
    {/each}
  </div>
</Section>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
</style>