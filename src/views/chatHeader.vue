<template>
  <div id="chatHeader">
    <div class="header-title">
      {{titleText}}
    </div>
    <i class="icon-man" @click="goToSet"></i>
  </div>
</template>

<script>
export default {
  name: 'chatHeader',
  props: {
    titleText: {
      type: String,
      default: 'vue-chat'
    }
  },
  data () {
    return {}
  },
  methods: {
    goToSet () {
      // 点击设置
    }
  }
}
</script>

<style lang="less">
  @import '~assets/less/fontIcon.less';
  #chatHeader {
    display: flex;
    justify-content: center;
    .header-title {
      display: inline-block;
      width: 100px;
      height: 100%;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
      font-weight: 700;
      color: #fff;
    }
    i {
      position: absolute;
      top: 12px;
      right: 15px;
      font-size: 25px;
      cursor: pointer;
      color: #fff;
    }
  }
</style>
