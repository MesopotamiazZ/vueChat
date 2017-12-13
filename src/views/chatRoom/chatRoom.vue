<template>
  <div class="chatRoom">
    <avatar :isSelf="false"></avatar>
    <wordBubble :message="'我的一生'" 
    :isSelf="false"
    :fontSize="15"></wordBubble>
    <div></div>
    <noticeBubble :message="'123进入房间'"></noticeBubble>
  </div>
</template>
<script>
  import wordBubble from '../components/wordBubble'
  import avatar from '../components/avatar'
  import noticeBubble from '../components/noticeBubble'
  import { mapState, mapMutations } from 'vuex'
  import * as type from '@/store/types'
  export default {
    name: 'chatRoom',
    components: {
      wordBubble,
      avatar,
      noticeBubble
    },
    methods: {
      ...mapMutations({
        'isShowSendMessage': type.IS_SHOW_SENDMESSAGE
      })
    },
    computed: {
      ...mapState([
        'isShow'
      ])
    },
    created () {
      this.isShowSendMessage(true)
    }
  }
</script>
<style lang="less">
  .chatRoom {
    position: relative;
  }
</style>
