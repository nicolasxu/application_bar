<template>
  <div class="app-pin">
    <div class="rm-btn" @click="remove">X</div>
    <div class="app-img">{{app.name}}</div>
  </div>
</template>

<script>
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
      }
    }
  }
</script>

<style scoped lang="scss">
  .app-pin {
    display: inline-block;
    position: relative;
    .rm-btn {
      position: absolute;
      border-radius: 10px;
      width: 10px;
      height: 10px;
    }
    .app-img {
      width: 100px;
      height: 40px;
      background-color: lightslategrey;
    }
  }
</style>