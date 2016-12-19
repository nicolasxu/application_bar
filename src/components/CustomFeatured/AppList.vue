<template>
	<div>
	  <h3>Customize Featured Applications</h3>
	  <div>To Change the Applications buttons you see on the top bar, click Add to Featured next to the application you 
	    wish to add and X next to the application you would like to remove. 
	  </div>
		<ul>
	  	<list-item v-for="item in list" :app="item"></list-item>
		</ul>
	</div>
</template>

<script>
import ListItem from './ListItem'
export default {
  name: 'AppList',
  components: {ListItem},
  props: ['list'],
  created: function () {
    console.log(this.list.length)
  }
}
</script>

<style type="scss">
	
</style>

