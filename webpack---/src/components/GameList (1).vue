<template>
<div class="gomeList" v-if="list.length>0">
	<div class="list">
		<van-swipe class="swpier" height="40px" :autoplay="autoplay" :vertical="vertical" :loop="loop" :touchable="touchable" :show-indicators="showIndicators">
			<van-swipe-item v-for="(item,index) in list" :key="index">
				<div class="swiper-item">
					<div class="c-row c-row-between c-row-middle item">
						<img class="img" :src="item.UserPhoto" />
						<div class="info c-row c-row-between">
							<div class="m-l-10 name">{{item.NickName}}</div>
							<div class="c-row c-row-middle-center">
								<span class="u-p-r-10">{{ $t('homepage.home.got') }}</span>
								<span class="price" v-if="!utils.isYueNanCurrencySymbol()">{{utils.getCurrencySymbol()}} {{utils.numFilter(item.Amount)}}</span>
								<span class="price" v-if="utils.isYueNanCurrencySymbol()"> {{utils.numFilter(item.Amount)}} {{utils.getCurrencySymbol()}}</span>
							</div>
						</div>
					</div>
				</div>
			</van-swipe-item>
		</van-swipe>
	</div>
</div>
</template>

<script>
	export default {
		name: 'GameList',
		data() {
			return {
			};
		},
		props: {
			/* 列表 */
			list: {
				type: [Array, Object],
				default: () => {
					return [];
				}
			},
			type:{
				type: [String, Number],
				default: 1
			},
			autoplay:{
				type: [String, Number],
				default: 3000
			},
			/* 宽度 */
			width: {
				type: [String, Number],
				default: 'auto'
			},
			height:{
				type: [String, Number],
				default: 50
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
				default : false,
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
			// stopTouchMove(){
			// 	return true;
			// },
			/* 添加点击事件 */
			// clickFn(e){
			// 	this.$emit('click',e);
			// },
			/* 轮播切换改变 */
			// changeBanner(e){
			// 	let current = e.detail.current;
			// 	this.$emit('change',{
			// 		current,
			// 	})
			// }
		}
	};
</script>

<style scoped lang="scss">
.gomeList {
	position: relative;
	padding: 5px 10px;
	height: 50px;
	.list{
		height: 40px;
		.swpier{
			height: 100%;
		}
	}
	.item{
		height: 40px;
		line-height: 40px;
		.img{
			width: 30px;
			height: 30px;
			border-radius: 30px;
			overflow: hidden;
		}
		.info{
			width: 100%;
			min-width: 280px;
			.name{
				width: 80px;
				font-size: 13px;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 1; /* 控制最多显示几行 */
			}
			.price{
				text-align: center;
			}
			.time{
				font-size: 12px;
			}
		}
	}
}
</style>
