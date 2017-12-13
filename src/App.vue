<template>
  <div id="app">
    <chat-header class="chat-header"></chat-header>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <footer>
      <sendMessage v-show="isShow"></sendMessage>
    </footer>
  </div>
</template>
<script>
import chatHeader from '@/views/chatHeader'
import sendMessage from '@/views/sendMessage.vue'
import { mapState, mapMutations } from 'vuex'
import * as type from '@/store/types'
console.log(type)
export default {
  name: 'app',
  components: {
    chatHeader,
    sendMessage
  },
  data () {
    return {
      // isShow: false
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
    console.log(9898)
    this.isShowSendMessage(false)
  }
}
</script>

<style lang="less">
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .chat-header {
    min-height: 50px;
    background: #60636b;
  }
  .content-wrapper {
    flex: auto;
    min-height: 400px;
    // background: lightblue;
  }
  footer {
    min-height: 50px;
    background: #60636b;
    line-height: 47px;
  }
</style>
