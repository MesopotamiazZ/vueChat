/**
 * notice提示
 */
<template>
  <div class="noticeBubble-wrapper">
    <div class="noticeBubble">
      {{message}}
    </div>
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
.noticeBubble-wrapper {
  .noticeBubble {
    width: 150px;
    min-height: 15px;
    border-radius: 7.5px;
    line-height: 15px;
    color: grey;
    padding: 2px 10px;
    background: lightsalmon;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
