<template>
	<div class="mian">
		<van-image class="logo" :src="globalConfig.clientCfg.HeadLogo"></van-image>
		<div class="time c-row c-row-middle-center" @click="onHome">{{num}}</div>
		<!-- <image class="img" src="../../static/img/loading.jpg"></image> -->
	</div>
</template>

<script>
	import loading from "../plugins/loadingMixin"
	export default {
		mixins: [loading],
		data() {
			return {
				num:3,
				timer:null,
			}
		},
		methods: {
			Gohome(){
				let that = this;
				setTimeout(function(){
					that.goPage('/home');
				},1000)
			},
			onHome(){
				let that = this;
				that.goPage('/home');
				clearInterval(that.timer);
			},
			countDown() {
				let that = this;
				that.timer = setInterval(() => {
					if (that.num > 0) { //限制倒计时区间
						that.num--
					} else {
						clearInterval(that.timer);  //删除定时器
						that.timer = null;
						that.goPage('/home');
					}
				}, 1000)
			}
		},
		created() {
			this.showLoadingFun();
			this.countDown();
		}
	}
</script>

<style lang="scss" scoped>
@import '@/plugins/css/base';
.mian{
	padding: 0;
	background: $base-color;
	background-image: linear-gradient(to right, $base-head-left, $base-head-right);
	// background: url(../../static/img/loading.png) no-repeat center center;
	// background-size: 100% 100%;
	height: 100vh;
	width: 100vw;
	max-width: 400px;
	position: relative;
	.time{
		position: absolute;
		right: 15px;
		top: 15px;
		height: 35px;
		width: 35px;
		border-radius: 35px;
		background-color: #fff;
		font-size: 17px;
		color: $base-color;
	}
	.logo{
		position: absolute;
		bottom: 20%;
		left: 50%;
		transform: translate(-50%,0);
		width: 40%;
	}
	.img{
		height: 100vh;
		width: 100vw;
		max-width: 400px;
	}
}
</style>
