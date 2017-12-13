<template>
<div>
  <vue-particles color="#dedede" class="back"
  :particleOpacity="0.5"
  :moveSpeed="2.7"
  shapeType="circle"
  :lineOpacity="0.2"></vue-particles>
  <div class="login">
    <div class="login-content">
      <span class="content-title">请输入昵称</span>
      <Input v-model="username"></Input>
      <Button type="success" long @click="goToChat">进入聊天</Button>
    </div>
  </div>
</div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  import * as type from '@/store/types'
  import CHAT from '@/api/client'
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        userid: ''
      }
    },
    methods: {
      goToChat () {
        if (this.username.trim()) {
          // 登陆成功
          this.isShowSendMessage(true)
          // 生成唯一ID
          this.setUserId()
          if (sessionStorage) {
            // console.log(this.user)
            sessionStorage.setItem('userid', this.userid)
            sessionStorage.setItem('username', this.username)
          }
          CHAT.init()
          // 跳到chatRoom
          this.$router.push('/chat')
        } else {
          alert('昵称不能为空...')
        }
      },
      setUserId () {
        this.userid = new Date().getTime() + Math.floor(Math.random() * 10)
      },
      ...mapMutations({
        'isShowSendMessage': type.IS_SHOW_SENDMESSAGE
      })
    },
    computed: {
      ...mapState([
        'isShow'
      ]),
      user () {
        return {userid: this.userid, username: this.username}
      }
    }
  }
</script>
<style lang="less">
  .login {
    height: 85vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .login-content {
      .content-title {
        display: block;
        font-size: 20px;
        text-align: center;
      }
      .ivu-input-wrapper {
        display: block;
        width: 350px;
        margin-top: 25px;
      }
      .ivu-btn-long {
        width: 350px;
        display: block;
        margin-top: 25px;
      }
    }
  }
  .back {
    position: absolute;
    top: 50px;
    left: 0;
    height: 85vh;
    width: 100vw;
    z-index: -1;
    background: #162335;
    // background: #1c2438;
  }
</style>
