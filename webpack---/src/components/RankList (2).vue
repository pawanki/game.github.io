<template>
<div class="RankList">
	<van-swipe style="height: 100%;" :autoplay="autoplay"  :vertical="vertical" :loop="loop" :touchable="touchable"  :showIndicators="showIndicators" :initialSwipe="initialSwipe">
	  <van-swipe-item class="item" v-for="(item,index) in list" :key="index" v-if="list.length">
	  	<div class="swiper-item" v-for="(vo,cindex) in item" :key="cindex" @click="clickFn({vo,cindex})">
	  		<div class="c-row c-row-between item">
	  			<img class="img" :src="vo.UserPhoto" />
	  			<div class="info c-row c-row-between">
	  				<div class="m-l-10 name">{{vo.NickName}}</div>
	  				<div class="price">
	  					<span v-if="!utils.isYueNanCurrencySymbol()">{{utils.getCurrencySymbol()}} {{utils.numFilter(vo.Price)}}</span>
	  					<span v-if="utils.isYueNanCurrencySymbol()"> {{utils.numFilter(vo.Price)}} {{utils.getCurrencySymbol()}}</span>
	  				</div>
	  				<div class="time">{{vo.Time}}</div>
	  			</div>
	  		</div>
	  	</div>
	  </van-swipe-item>
	</van-swipe>
</div>
</template>

<script>
	export default {
		name: 'RankList',
		data() {
			return {};
		},
		props: {
			/* 列表 */
			list: {
				type: [Array, Object],
				default: () => {
					return [];
				}
			},
			autoplay:{
				type: [String, Number],
				default: 4000
			},
			/* 宽度 */
			width: {
				type: [String, Number],
				default: 'auto'
			},
			/* 当前下标 */
			initialSwipe : {
				type: Number,
				default: 0
			},
			/* 滑动动画时长 */
			duration : {
				type: Number,
				default: 500
			},
			loop:{
				type : Boolean,
				default : true,
			},
			// 是否显示指示器
			showIndicators:{
				type : Boolean,
				default : false,
			},
			/* 是否纵向 */
			vertical: {
				type : Boolean,
				default : false,
			},
			// 是否可以通过手势滑动
			touchable:{
				type : Boolean,
				default : false,
			},
		},
		methods: {
			stopTouchMove(){
				return true;
			},
			/* 添加点击事件 */
			clickFn(e){
				this.$emit('click',e);
			},
			/* 轮播切换改变 */
			changeBanner(e){
				let current = e.detail.current;
				this.$emit('change',{
					current,
				})
			}
		},
	};
</script>

<style scoped lang="scss">
@import '@/plugins/css/base';
.RankList {
	position: relative;
	box-shadow: 0 1px 18px 0 rgba(203,202,220,0.56);
	padding: 10px;
	height: 200px;
	overflow: hidden;
	.item{
		height: 45px;
		line-height: 45px;
		.img{
			width: 40px;
			height: 40px;
			border-radius: 40px;
			display: block;
			overflow: hidden;
		}
		.info{
			width: 100%;
			.name{
				width: 80px;
				font-size: 14px;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 1; /* 控制最多显示几行 */
			}
			.price{
				text-align: center;
				color: $base-color;
				font-size: 15px;
				font-weight: 600;
			}
			.time{
				font-size: 12px;
			}
		}
	}
}
</style>
