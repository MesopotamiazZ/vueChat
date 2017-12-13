/**
 * notice提示
 */
<template>
  <div class="noticeBubble">
    {{message}}
  </div>
</template>
<script>
  export default {
    name: 'noticeBubble',
    props: {
      message: {
        type: String
      }
    }
  }
</script>
<style lang="less">
  .noticeBubble {
    display: inline-block;
    // max-width: 200px;
    min-height: 15px;
    border-radius: 7.5px;
    line-height: 15px;
    color: grey;
    padding: 2px 10px;
    background: lightsalmon;
    // margin: 0 auto;
  }
</style>
