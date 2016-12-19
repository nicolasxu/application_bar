<template>
	<section>
		<div class="title-text-container">
			<h3>All Applications</h3>
	  </div>
	  <div class="selection-container" >
	  	<select name="category-sel" v-model="selectedCat">
	  		<option value="1">cat1</option>
	  		<option value="2">cat2</option>
	  		<option value="3">cat3</option>
	  		<option value="4">cat4</option>
	  	</select>
	  </div>
	</section>


</template>

<script>
export default {
  name: 'CategorySelection',
  props: ['cats'],
  data: function () {
    return {
      selectedCat: ''
    }
  }
}
</script>


<style lang="scss">
	
</style>