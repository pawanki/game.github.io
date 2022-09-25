<template>
	<div :class="isBackGround?'navbar action':'navbar' ">
		<div class="navbar-left" v-if="isBack" >
			<div class="bank c-row c-row-middle-center" @click="backPage">
				<img class="navbar-back" :src="require('../assets/images/icon/back.png')"/>
				<!-- <van-icon size="20" name="arrow-left navbar-back" /> -->
			</div>
		</div>
		<div class="navbar-left" v-else>
			<slot name="left" />
		</div>
		
		<div class="navbar-title">
			<slot />
		</div>
		<div class="navbar-right">
			<slot name="right" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		props: {
			isBack: {
				type: Boolean,
				default: false,
			},
			isBackGround:{
				type:Boolean,
				default:false,
			}
		},
		data() {
			return {
				url: '',
			}
		},
		mounted() {
			// if (this.$slots.right != undefined) {
			// 	this.url = this.$slots.right[0].data.attrs.url
			// }
		},
		methods: {
			backPage() {
				this.$router.go(-1);
			},
			// Goright(url) {
			// 	this.$router.push(url)
			// }
		},
		//	  watch: {
		//	    $route: {
		//	      handler(route) {
		//	        this.navbar = route.meta.title;
		//	      },
		//	      immediate: true
		//	    }
		//	  }
		//props:['index']
	}
</script>

<style lang="scss" scoped>
	@import '@/plugins/css/base';
	.navbar {
		width: 100%;
		max-width: 400px;
		top: 0;
		height: 50px;
		line-height: 50px;
		background-image: linear-gradient(to right, $base-head-left, $base-head-right);
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		color: #fff;
		z-index: 999;
			&.action{
				background: url('../assets/images/checkin/header.png');
				background-size: cover;
			}
		&-title {
			font-size: 16px;
			flex: 1;
			text-align: center;
		}
		.bank{
			width: 26px;
			height: 26px;
			border-radius: 26px;
		}

		&-left,
		&-right {
			position: absolute;
			top: 0;
			bottom: 0;
			// width: 50px;
			line-height: 50px;
			padding: 0 10px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		&-left {
			left: 0;
		}

		&-right {
			right: 0;
		}

		&-icon {
			height: 45px;
		}

		&-back {
			width: 26px;
			height: 26px;
		}
	}
</style>
