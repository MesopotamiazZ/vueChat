<template>
  <div class="avatar-wrapper">
    <div class="avatar" :class="{selfAvatar: isSelf, otherAvatar: !isSelf}">
      <Avatar icon="person" />
    </div>
    <div style="clear: both;display: inline-block;"></div>
  </div>
</template>
<script>
  export default {
    name: 'avatar',
    props: {
      isSelf: {
        type: Boolean
      }
    }
  }
</script>
<style lang="less">
  .avatar-wrapper {
    display: inline-block;
    .avatar {
      display: inline-block;
    }
    .selfAvatar {
      float: left;
      // position: absolute;
      // top: 0;
      // left: 34px;
    }
    .otherAvatar {
      float: right;
      // position: absolute;
      // top: 0;
      // right: 34px;
    }
  }
</style>
