<template>
  <div v-once class="app-pin-empty">
    <div class="app-img">empty</div>
  </div>
</template>

<script>
export default {
  name: 'appPinEmpty',
  data: function () {
    return {}
  }
}
</script>

<style scoped>
  .app-pin-empty {
    display: inline-block;
    width: 100px;
    height: 40px;
  }
</style>