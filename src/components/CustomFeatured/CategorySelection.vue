<template>
	<div>
		<div class="title-text-container">
			<h3>All Applications</h3>
	  </div>
	  <div class="selection-container" >
			<button class="all-btn">All</button>
	  	<select name="category-sel" v-model="selectedCat" class="cat-selector">
	  		<option value="all">All</option>
				<option v-for="cat in cats" :value="cat">{{cat}}</option>
	  	</select>
	  </div>
		{{selectedCat}}
	</div>


</template>

<script>
export default {
  name: 'CategorySelection',
  props: ['cats'],
  data: function () {
    return {
      selectedCat: 'all'
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