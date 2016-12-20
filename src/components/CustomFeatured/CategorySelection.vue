<template>
	<div>
		<div class="title-text-container">
			<h3>All Applications</h3>
	  </div>
	  <div class="selection-container" >
			<button class="all-btn" @click.prevent="setAll">All</button>
	  	<select name="category-sel" v-model="selectedCat" class="cat-selector">
	  		<option value="all">All</option>
				<option v-for="cat in cats" :value="cat">{{cat}}</option>
	  	</select>
	  </div>
    <div>
      <app-list :list="selectedList"></app-list>
    </div>
	</div>
</template>

<script>
import AppList from './AppList'
export default {
  name: 'CategorySelection',
  props: ['cats', 'globalList'],
  components: {AppList},
  data: function () {
    return {
      selectedCat: 'all'
    }
  },
  computed: {
    selectedList: function () {
      if (this.selectedCat === 'all') {
        return this.globalList
      }
      var selectedCategoryStr = this.selectedCat
      var selectedList = []
      var allApps = this.globalList
      for (var i = 0; i < allApps.length; i++) {
        if (allApps[i].category === selectedCategoryStr) {
          selectedList.push(allApps[i])
        }
      }
      return selectedList
    }
  },
  methods: {
    setAll: function () {
      this.selectedCat = 'all'
    }
  }
}
</script>

<style lang="scss" scoped>
	@import '../variable.scss';
	.title-text-container, .selection-container {
		display: inline-block;
	}
	.title-text-container h3 {
		font-size: 20px;
		font-weight: bold;
	}
	.title-text-container {
		margin-right: 45px;
	}
	.all-btn {
		margin-right: 15px;
		border: 1px solid transparent;
		width: 74px;
		height: 45px;
		background-color: $nh-green; 
		color: white;
		font-size: 25px;

	}
	.cat-selector {
		width: 297px;
		height: 45px;
		font-size: 25px;
		border: 1px solid lightgrey;
	}
</style>