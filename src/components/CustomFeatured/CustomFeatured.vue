<template>
	<section class="custom">
	  <category-selection :cats="categories"></category-selection>
	  <app-list :list="globalList"></app-list>
	</section>
</template>

<script>
import CategorySelection from './CategorySelection'
import AppList from './AppList'
export default {
  name: 'CustomeFeatured',
  props: ['globalList'],
  components: { CategorySelection, AppList },
  computed: {
    categories: function () {
      // loop through global list to find categories
      var categorySet = {}
      this.globalList.forEach(function (app) {
        categorySet[app.category] = 1
      })
      var categories = []
      for (var key in categorySet) {
        categories.push(key)
      }
      return categories
    }
  }
}
</script>


<style scoped lang="scss">
  .custom {
    max-width: 1508px;
    margin: 0 auto;
    border-top: 2px dashed #FFC238;
    
  }
</style>
