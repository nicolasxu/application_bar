<template>
  <div class="app-pin">
      <div class="rm-btn" @click="remove"></div>
      <div class="app-img">{{app.name}}</div>
  </div>
</template>

<script>
import channel from '../../messageChannel'
export default {
  name: 'appPin',
  props: ['app'],
  data: function () {
    return {}
  },
  methods: {
    remove: function () {
      // app pin doesn't know the featured list array
      // emit remove event with uid
      console.log('remove featured app with array index ' + this.app.aId)
      channel.$emit('remove', this.app.aId)
    }
  }
}
</script>

<style scoped lang="scss">
  .app-pin {
    display: inline-block;
    position: relative;
    margin-left: 36px;
    .rm-btn {
      &:hover {
        cursor: pointer;
        transform: scale(1.1, 1.1);
      }
      box-sizing: content-box;
      position: absolute;
      top: -13px;
      left: -13px;
      display: inline-block;
      background-image: url('./close_btn_NHINT.png');
      // position: absolute;
      border-radius: 13px;
      width: 25px;
      height: 25px;
    }
    .app-img {
      width: 165px;
      height: 76px;
      background-color: lightslategrey;
    }
    

  }
</style>