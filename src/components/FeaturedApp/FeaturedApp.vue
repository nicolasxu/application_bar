<template>
  <section>
    <div class="title-toggle">
      <div>Featured Applications</div>
      <div><a href="javascript:void(0)" @click.prevent="toggleCustomApps">Save and Close</a></div>
    </div>
    <div class="app-pin-container">
      <app-pin v-for="app in featuredApps" :app="app"></app-pin>
      <app-pin-empty v-if="featuredApps.length < 6"></app-pin-empty>
    </div>    
  </section>


</template>

<script>
  import AppPin from './AppPin'
  import AppPinEmpty from './AppPinEmpty'

  export default {
    name: 'FeaturedApp',
    components: { AppPin, AppPinEmpty },
    created: function () {
      console.log(this.featuredApps)
    },
    props: ['featuredApps'],
    methods: {
      toggleCustomApps: function () {
        this.$emit('toggleCustom')
        console.log('Toggle custom apps')
      }
    }
  }
</script>

<style scoped>
  .title-toggle {
    display: inline-block;
  }
  .app-pin-container {
    display: inline-block;

  }
</style>