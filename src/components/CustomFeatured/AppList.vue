<template>
	<div>
	  <h3 class="title">Customize Featured Applications</h3>
	  <div>To Change the Applications buttons you see on the top bar, click Add to Featured next to the application you 
	    wish to add and X next to the application you would like to remove. 
	  </div>
		<ul class="list-container">
	  	<list-item v-for="item in list" :app="item" ></list-item>
		</ul>
	</div>
</template>

<script>
import ListItem from './ListItem'
export default {
  name: 'AppList',
  components: {ListItem},
  props: ['list']
}
</script>

<style type="scss" scoped>
	.title {
		font-size: 20px;
		font-weight: bold;
	}
	.list-container {
		max-height: 500px;
		background-color: #F9F9F8;
		overflow-y: scroll;
		padding: 20px 60px;

	}
</style>

