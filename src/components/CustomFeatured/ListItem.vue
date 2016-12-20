<template>
	<li class="item">
		<div class="img-container">
			IMAGE
			<img :src="app.imgUrl" alt="app.name">
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
					v-if="!isFeatured" @click.prevent="add">Add to Featured
				</a>
				<a href="javascript:void(0);" title="remove from featured apps" 
					v-if="isFeatured" @click.prevent="remove">Remove from Featured
				</a>
			</div>
		</div>
	</li>
</template>

<script>
import * as Util from '../appBarUtil'
import channel from '../../messageChannel.js'

export default {
  name: 'ListItem',
  props: ['app'],
  data: function () {
    return {
      featuredApps: Util.getFeaturedApps()
    }
  },
  computed: {
    isFeatured: function () {
      for (var i = 0; i < this.featuredApps.length; i++) {
        if (this.featuredApps[i].aId === this.app.aId) {
          return true
        }
      }
      return false
    }
  },
  methods: {
    add: function () {
      channel.$emit('add', this.app.aId)
    },
    remove: function () {
      channel.$emit('remove', this.app.aId)
    }
  }
}
</script>

<style lang="scss" scoped>
	@import '../variable.scss';
	.item {
		list-style: none;
		border-bottom: 1px solid lightgray;
		padding: 13px 0;
		.img-container {
			display: inline-block;
			vertical-align: top;
			width: 180px;
			height: 80px;
			border-radius: 5px;
			background-color: grey;
		}
		.app {
			display: inline-block;
			margin-left: 28px;
			width: 70%;
			.title {
				font-size: 20px;
				color: $nh-green;
			}
			.description {
				font-size: 18px;
			}
			.action a {
				color: $nh-green;
				font-size: 17px;
			}
		}
	}
</style>