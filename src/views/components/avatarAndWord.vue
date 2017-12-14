<template>
  <div class="avatarAndWord">
    <div class="slefMsg" v-if="isSelf">
      <avatar :isSelf="isSelf"></avatar><wordBubble :isSelf="isSelf" :message="message"></wordBubble>
    </div>
    <div class="otherMsg" v-else>
      </avatar><wordBubble :isSelf="isSelf" :message="message"></wordBubble><avatar :isSelf="isSelf"></avatar>
    </div>
    <div style="clear: both;"></div>
  </div>
</template>
<script>
  import wordBubble from '../components/wordBubble'
  import avatar from '../components/avatar'
  export default {
    name: '',
    components: {
      wordBubble,
      avatar
    },
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
  .avatarAndWord {
    padding: 7px 5px;
    .slefMsg {
      
    }
    .otherMsg {

    }
  }
</style>
