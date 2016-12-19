<template>
	<li class="item">
		<div class="img">
			IMAGE
		</div>
		<div class="app">
			<div class="title">
				{{app.name}}
			</div>
			<div class="description">
				{{app.description}}
			</div>
			<div class="action">
				<a href="javascript:void(0);" title="add to featured apps" 
					v-if="!isFeatured">Add to Featured
				</a>
				<a href="javascript:void(0);" title="remove from featured apps" 
					v-if="isFeatured">Remove from Featured
				</a>
			</div>
		</div>
	</li>
</template>

<script>
  export default {
    name: 'ListItem',
    props: ['app'],
    computed: {
      isFeatured: function () {

      }
    },
    methods: {
      add: function () {
        this.$emit('add', this.app.aId)
      },
      remove: function () {
        this.$emit('remove', this.add.aId)
      }
    }
  }
</script>

<style lang="scss">
	.item {

	}
</style>