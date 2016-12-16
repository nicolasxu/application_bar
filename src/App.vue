<template>
  <div id="app">
    <!--<featured-application></featured-application>-->
    <!--<custome-featured-application v-if="showCustom"></custome-featured-application>-->
    <featured-apps :featuredApps="featuredApps"></featured-apps>
    <custom-featured-apps v-if="showCustom"></custom-featured-apps>
  </div>
</template>
<script>
// User can add or remove global list in sitecore,
// the index of app in global_list[] may change,
// to identify app, we need uid.

import * as util from './components/appBarUtil.js'
import FeaturedApps from './components/FeaturedApp/FeaturedApp'
export default {
  name: 'app',
  components: {
    FeaturedApps
  },
  data: function () {
    return {showCustom: false}
  },
  created: function () {
    console.log('This application bar init...')
    this.globalAppList = util.getGlobalList()
    this.featuredApps = util.getFeaturedApps()
  },
  methods: {
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
  #app-bar  {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
</style>
