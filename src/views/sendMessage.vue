<template>
  <div class="sendMessage">
    <div class="inputMessage">
      <Input v-model="message" autofocus></Input>
    </div>
    <div class="sendBtn">
      <Button type="primary" icon="arrow-right-c"></Button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'sendMessage',
    data () {
      return {
        message: ''
      }
    }
  }
</script>
<style lang="less">
  .sendMessage {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .inputMessage {
      flex: auto;
      margin-left: 10px;
      margin-right: 10px;
      // .ivu-input-wrapper {
      //   border-radius: 15px;
      //   // overflow: hidden;
      // }
      .ivu-input {
        border-radius: 15px;
        padding: 0 10px;
        border: none;
        outline: medium;
        box-shadow: none;
      }
    }
    .sendBtn {
      margin-right: 10px;
      .ivu-btn {
        // width: 32px;
        border-radius: 15px;
        font-size: 12px;
      }
    }
  }
</style>
