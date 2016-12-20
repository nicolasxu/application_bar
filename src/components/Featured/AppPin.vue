<template>
  <div class="app-pin">
      <div class="rm-btn" @click="remove" v-show="showCustom"></div>
      <div class="app-img" v-show="!showCustom">{{app.name}} the link</div>
      <div class="app-img-custom" v-show="showCustom">{{app.name}} the image</div>
  </div>
</template>

<script>
import channel from '../../messageChannel'
export default {
  name: 'appPin',
  props: ['app', 'showCustom'],
  data: function () {
    return {}
  },
  methods: {
    remove: function () {
      // app pin doesn't know the featured list array
      // emit remove event with aid
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
    .app-img, .app-img-custom {
      width: 165px;
      height: 76px;
      background-color: lightslategrey;
    }
     .app-img:hover {
        transform: scale(1.1, 1.1);
        cursor: pointer;
      }
    

  }
</style>