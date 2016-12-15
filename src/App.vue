<template>
  <div id="app">
    <!--<featured-application></featured-application>-->
    <!--<custome-featured-application v-if="showCustom"></custome-featured-application>-->
  </div>
</template>
<script>
// User can add or remove global list in sitecore,
// the index of app in global_list[] may change,
// to identify app, we need uid.
import LeftNavigation from './components/leftNavigation'
import MainContent from './components/MainContent'

export default {
  name: 'app',
  components: {
    LeftNavigation, MainContent
  },
  methods: {
    init: function () {
      console.log('This application bar init...')
    },
    addToFeatured: function (uid) {
      console.log('Add ' + uid + ' to featured...')
    },
    removeFromFeatured: function (uid) {
      console.log('Remove ' + uid + ' from featured... ')
    }
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
