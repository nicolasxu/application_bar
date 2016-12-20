<template>
  <div id="app" :class="{'in-edit': showCustom}">
    <!--<featured-application></featured-application>-->
    <!--<custome-featured-application v-if="showCustom"></custome-featured-application>-->
    <featured :featuredApps="featuredApps" :showCustom="showCustom" 
    :canEdit="globalAppListData.canEdit"
    @toggle="toggleCustom">
    </featured>
    <custom-featured v-if="showCustom" 
    :globalList="globalAppListData.dataArr">
    </custom-featured>
  </div>
</template>
<script>
// User can add or remove global list in sitecore,
// the index of app in global_list[] may change,
// to identify app, we need uid.

import * as util from './components/appBarUtil.js'
import Featured from './components/Featured/Featured'
import CustomFeatured from './components/CustomFeatured/CustomFeatured.vue'
import channel from './messageChannel.js'

export default {
  name: 'app',
  components: {
    Featured, CustomFeatured
  },
  data: function () {
    return {showCustom: false}
  },
  created: function () {
    this.globalAppListData = util.getGlobalListData()
    this.featuredApps = util.getFeaturedApps()
    console.log(channel)
    channel.$on('add', this.addToFeatured)
    channel.$on('remove', this.removeFromFeatured)
  },
  methods: {
    addToFeatured: function (aId) {
      console.log('Add catched... ' + aId + ' to featured...')
      util.addFeatured(aId)
    },
    removeFromFeatured: function (aId) {
      console.log('Remove catched...' + aId + ' from featured... ')
      util.removeFeatured(aId)
    },
    toggleCustom: function () {
      this.showCustom = !this.showCustom
    }
  }
}
</script>
<style lang="scss" scoped>
 
  #app {
    position: relative;
    background-color: #f1f1f1;
    width: 100%;
  }
  #app.in-edit {
    background-color: #fff6d7;
  }
</style>
