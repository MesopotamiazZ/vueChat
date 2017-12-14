<template>
  <div class="chatRoom">
    <!-- <avatarAndWord :isSelf="true" :message="'mine'"></avatarAndWord>
    <avatarAndWord :isSelf="false" :message="'other'"></avatarAndWord>
    <notice-bubble :message="'123 加入聊天'"></notice-bubble> -->

  </div>
</template>
<script>
  import wordBubble from '../components/wordBubble'
  import avatar from '../components/avatar'
  import avatarAndWord from '../components/avatarAndWord'
  import noticeBubble from '../components/noticeBubble'
  // import CHAT from '@/api/client'
  import { mapState, mapMutations } from 'vuex'
  import * as type from '@/store/types'
  export default {
    name: 'chatRoom',
    components: {
      wordBubble,
      avatar,
      noticeBubble,
      avatarAndWord
    },
    data () {
      return {
        isSelf: true, // 是否是自己发的消息
        msg: '', // 消息内容
        notice: '', // 系统/服务器提示内容
        msgArr: [] // 存放聊天记录和登陆信息
      }
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
    },
    watch: {
      msgArr (newArr, oldArr) {
        console.log('数组发生变化')
      }
    }
  }
</script>
<style lang="less">
  .chatRoom {
    position: relative;
    .avatarAndWord {
      .slefMsg {
        .avatar-wrapper {
          margin-right: 5px;
        }
      }
      .otherMsg {
        float: right;
        .avatar-wrapper {
          margin-left: 5px;
        }
      }
    }
  }
</style>
