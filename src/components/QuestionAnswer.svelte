<script lang="ts">
  export let question = false;
  export let message: string;
</script>

<div>
  <p class={question ? "question" : "answer"}>
    {question ? "Q: " : "A: "}
    <span>{message}</span>
  </p>
</div>

<style lang="scss">
  .question {
    color: #cbdbfc;
  }
  
  .answer {
    color: white;
  }
  
  p {
    font-weight: 900;
    font-size: 24px;
    text-align: justify;

    span {
      font-weight: 300;
    }
  }
</style>
