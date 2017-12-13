/**
 * message提示
 */

<template>
  <div class="wordBubble-wrapper">
    <div class="wordBubble" :class="{mySelf: isSelf, other: !isSelf}" :style="{fontSize: fontSize + 'px'}">
      {{message}}
    </div>
    <div style="clear: both;display: inline-block;"></div>
  </div>
</template>
<script>
  export default {
    name: 'wordBubble',
    props: {
      isSelf: {
        type: Boolean
      },
      message: {
        type: String
      },
      fontSize: {
        type: Number
      }
    }
  }
</script>
<style lang="less">
  .wordBubble-wrapper {
    display: inline-block;
    .wordBubble {
      display: inline-block;
      max-width: 200px;
      min-height: 30px;
      line-height: 30px;
      word-wrap: break-word;
      padding: 2px 10px;
    }
    .mySelf {
      border-radius: 4px;
      background: #D9D9D9;
      float: left;
    }
    .other {
      border-radius: 4px;
      background: lightgreen;
      float: right;
    }
  }
</style>
