<template>
  <div id="app">
    <featured-application></featured-application>
    <custome-pin v-if="showCustom"></custome-pin>
  </div>
</template>
<script>
import LeftNavigation from './components/leftNavigation'
import MainContent from './components/MainContent'

export default {
  name: 'app',
  components: {
    LeftNavigation, MainContent
  }
}
</script>
<style lang="scss">
  #app  {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
</style>
