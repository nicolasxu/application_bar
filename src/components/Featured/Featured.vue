<template>
  <section class="featured-apps">
    <div class="toggle-container">
      <div class="star-icon">Featured Applications</div>
      <div class="toggle-text"><a href="javascript:void(0)" @click.prevent="toggleCustomApps">Save and Close</a></div>
    </div>
    <div class="apppin-container">
      <app-pin v-for="app in featuredApps" :app="app"></app-pin>
      <app-pin-empty v-if="featuredApps.length < 6"></app-pin-empty>
    </div>    
  </section>


</template>

<script>
  import AppPin from './AppPin'
  import AppPinEmpty from './AppPinEmpty'

  export default {
    name: 'Featured',
    components: { AppPin, AppPinEmpty },
    created: function () {
    },
    props: ['featuredApps'],
    methods: {
      toggleCustomApps: function () {
        this.$emit('toggle')
      }
    }
  }
</script>

<style scoped lang="scss">
  .featured-apps {
    position: relative;
    overflow-x: hidden;
    height: 121px;
    max-width: 1508px;
    margin-left: auto;
    margin-right: auto;
    .star-icon {

    }
    .star-icon::before {
      position:relative;
      top: 3px;
      content: url('./star_NHINT.png');
      margin-right: 10px;
    }
    .toggle-text {
      margin-left: 30px;
    }
    .toggle-container, .apppin-container {
      margin-top: 17px;
    }
    .toggle-container {
      display: inline-block;
      vertical-align: top;
    }
    .apppin-container {
      display: inline-block;

    }

  }

</style>