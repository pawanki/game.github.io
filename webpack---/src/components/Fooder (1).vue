<template>
	<div class="nav c-pr">
        <!-- globalConfig.clientCfg.DollarSign=='₫' -->
        <div class="c-box">
            <div class="toggle_menu_container m-b-15" v-if="game">
                <toggle-menu position="RB" menuBg="none" itemBg="none" :menuItems="menuItems" @clickMenu="clickMenu" :width="60" baseDistance="100"></toggle-menu>
            </div>
            <!-- 活动 -->
			<!--  @click="Goright('/indexLong',{'type':0})" -->
            <div :class="activity?'activityBox longBox c-row c-row-middle-center m-b-15':'activityBox longBox1 c-row c-row-middle-center m-b-15'" v-show="long" id="moveDiv" @click="onClick">
                <img class="img" width="55px" height="55px" :src="require('@/assets/images/icon/long.svg')" />
            </div>
            <div class="activityBox serveBox c-row" v-show="serve" @click="Goright('/keFuMenu')">
                <img class="img" width="55px" height="55px" :src="require('@/assets/images/icon/icon_sevice.png')" />
            </div>
            <div class="activityBox c-row" v-show="activity" @click="Goright('/activity')">
                <img class="img" width="50px" :src="require('@/assets/images/icon/icon_activi.png')" />
            </div>
        </div>
		<van-tabbar v-model="active">
			<van-tabbar-item v-for="(vo,index) in $t('homepage.tabbar.tabbarList')" :key="index" :to="vo.to">
				<div v-if="index==2" :class="active==index?'muan action muan'+index:'muan muan'+index">
					<!-- <img :src="vo.img" :class="index==2?'img':''"> -->
				</div>
				<div v-else :class="active==index?'muan action muan'+index:'muan muan'+index">
					<!-- <img :src="active==index?vo.imgAction:vo.img"> -->
				</div>
				<span :class="active==index?'name action':'name'">{{ vo.name }}</span>
			</van-tabbar-item>
		</van-tabbar>
	</div>
	
</template>

<script>
    import toggleMenu from './toggleMenu'
	import {
		findIndex
	} from "lodash";
	export default {
        components: {
          toggleMenu
        },
		props: {
			activity:{
				type: Boolean,
				default: false
			},
			serve:{
				type: Boolean,
				default: false
			},
            long:{
            	type: Boolean,
            	default: false
            },
            game:{
            	type: Boolean,
            	default: false
            },
		},
		data() {
			return {
				active: 0,
				tabbar: [{
					name: "主页",
					to: "/home",
					img: require('../assets/images/tabber/home.png'),
					imgAction: require('../assets/images/tabber/home_active.png'),
				}, {
					name: "签到",
					to: "/activity",
					img: require('../assets/images/tabber/task.png'),
					imgAction: require('../assets/images/tabber/task_active.png'),
				}, {
					name: "推广",
					to: "/promotion",
					img: require('../assets/images/tabber/invite.png'),
					imgAction: require('../assets/images/tabber/invite.png'),
				}, {
					name: "钱包",
					to: "/wallet",
					img: require('../assets/images/tabber/selection.png'),
					imgAction: require('../assets/images/tabber/selection_active.png'),

				}, {
					name: "我的",
					to: "/mian",
					img: require('../assets/images/tabber/mine.png'),
					imgAction: require('../assets/images/tabber/mine_active.png'),
				}],
                menuItems: [
                  {name: 'menu1', src: require('../assets/images/fooder/ic_txcanbang.svg')},
                  {name: 'menu2', src: require('../assets/images/fooder/tren-duoi.svg')},
                  {name: 'menu3', src: require('../assets/images/fooder/ic_xocida.svg')},
                  // {name: 'menu4', src: require('../assets/images/tabber/home.png')},
                  // {name: 'menu5', src: require('../assets/images/tabber/home.png')},
                ],
                UserInfo:[],
                flags: false,
                position: { x: 0, y: 0 },
                nx: '', ny: '', dx: '', dy: '', xPum: '', yPum: '',
			}
		},
		methods: {
            clickMenu(item, index) {
                let that = this;
                console.log(item, index)
                if(localStorage.getItem('UserInfo')){
                    that.UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
                }
                that.getGameUrl(index+1);
            },
            getGameUrl(id) {
            	var that = this;
            	if(!that.UserInfo.UserId){
            		return that.Goright('/login');
            	}
            	that.showLoading = true;
            	that.$api.GetGameUrl({
            		uid: that.UserInfo.UserId,
            		sign:that.UserInfo.Sign,
            		typeid:9,
                    asymbol:that.globalConfig.clientCfg.DollarSign,
            		gameid:id,
            		phonetype:that.utils.getUserAgent()==0?'pc':'m',
            	}).then(res => {
            		that.showLoading = false;
            		//成功操作
            		if (res.success) {
            			that.Goright('/gameGo',{url:res.data.url,type:9})
            		} else {
            			that.$msg(res.msg);
            		}
            	}).catch(res => {
                    console.log(res)
            		that.showLoading = false;
            		that.$msg(that.$t('homepage.network'));
            	})
            },
            // 跳转链接
			Goright(url,params) {
                if(params){
                	this.$router.push({path:url,query:params})
                }else{
                	this.$router.push(url)
                }
			},
            // 实现移动端拖拽
            down(){
            	this.flags = true;
            	var touch;
            	if(event.touches){
            		touch = event.touches[0];
            	}else {
            		touch = event;
            	}
            	this.position.x = touch.clientX;
            	this.position.y = touch.clientY;
            	this.dx = moveDiv.offsetLeft;
            	this.dy = moveDiv.offsetTop;
            },
            move(){
            	if(this.flags){
            		var touch ;
            		if(event.touches){
            			touch = event.touches[0];
            		}else {
            			touch = event;
            		}
            		this.nx = touch.clientX - this.position.x;
            		this.ny = touch.clientY - this.position.y;
            		this.xPum = this.dx+this.nx;
            		this.yPum = this.dy+this.ny;
            		moveDiv.style.left = this.xPum+"px";
            		moveDiv.style.top = this.yPum +"px";
            		//阻止页面的滑动默认事件
            		document.addEventListener("touchmove",function(){ // 1.2 如果碰到滑动问题，请注意是否获取到 touchmove
            			event.preventDefault();//jq 阻止冒泡事件
            			// event.stopPropagation(); // 如果没有引入jq 就用 stopPropagation()
            		},false);
            	}
            },
            //鼠标释放时候的函数
            end(){
            	this.flags = false;
            },
			onClick(e){
				let that = this;
				that.$emit('onClick',e)
			}
            
		},
		watch: {
			$route: {
				handler(route) {
					this.active = findIndex(this.tabbar, function(o) {
						return o.to === route.path;
					});
				},
				immediate: true
			}
		},
	}
</script>

<style lang="scss">
	@import '@/plugins/css/base';
	.nav{width: 100%; height: 55px; bottom: 0; max-width: 400px; position: fixed; z-index: 999;touch-action: none;}
	.van-tabbar {
		height: 55px;
		background-color: #fff;
		z-index: 999;
		/* background-image: linear-gradient(#366bb3, #4576bc); */
		width: 100%;
		max-width: 400px;
		left: auto !important;
		/* transform: translate(-50%,0); */
	}

	.van-tabbar .van-icon {
		font-size: 26px;
	}

	.van-tabbar .van-tabbar-item__icon {
		margin-bottom: 0 !important;
	}

	.van-tabbar .van-tabbar-item {
		font-size: 13px;
		color: #303133;
		text-align: center;
	}
	.van-tabbar .name{
		display: block;
		width: 100%;
	}
	.van-tabbar .name.action{
		display: block;
		width: 100%;
		color: $base-color;
	}

	.van-tabbar .van-tabbar-item.van-tabbar-item--active {
		color: $base-color;
	}

	.van-tabbar .muan {
		background-color: #fff;
		height: 25px;
		width: 25px;
		margin: 0 auto 3px;
		&.muan0{
			background: $base-footer-muan0;
			background-size:auto 98%;
		}
		&.muan1{
			background: $base-footer-muan1;
			background-size:auto 98%;
		}
		&.muan3{
			background: $base-footer-muan3;
			background-size:auto 98%;
		}
		&.muan4{
			background: $base-footer-muan4;
			background-size:auto 98%;
		}
		&.muan2{
			position: relative;
			z-index: 99;
			padding: 5px;
			height: 50px;
			width: 50px;
			border-radius: 50px;
			margin: -24px auto 4px;
			background:#fff $base-footer-muan2;
			background-size:auto 80%;
		}
		&.action{
			&.muan0{
				background: $base-footer-amuan0;
				background-size:auto 98%;
			}
			&.muan1{
				background: $base-footer-amuan1;
				background-size:auto 98%;
			}
			&.muan3{
				background: $base-footer-amuan3;
				background-size:auto 98%;
			}
			&.muan4{
				background: $base-footer-amuan4;
				background-size:auto 98%;
			}
		}
	}

	.van-tabbar img {
		height: 25px;
		width: 25px;
		display: block;
		margin: 0 auto 4px;
	}

	.van-tabbar img.img {
		height: 40px;
		width: 40px;
		display: block;
	}
    
    .c-box{
        position: absolute;
        bottom:100px;
        right: 10px;
        z-index: 9999;
    }
	.activityBox{
		width: 60px;
		height: 60px;
	}
	.activityBox.serveBox{
		right: 15px;
		width: 55px;
	}
    .activityBox.longBox{
        background-color: #fff;
        width: 55px;
        height: 55px;
        color: #fff;
        border-radius: 55px;
        overflow: hidden;
        font-size: 16px;
        box-shadow: 0 1px 18px 0 rgba(203,202,220,0.56);
    }
    .longBox{
        position: relative;
    }
    
    .activityBox.longBox .img{
        width: 55px;
    }
    .activityBox.longBox1{
        background-color: #fff;
        width: 55px;
        height: 55px;
        overflow: hidden;
        color: #fff;
        border-radius: 55px;
        font-size: 16px;
        box-shadow: 0 1px 18px 0 rgba(203,202,220,0.56);
    }
    .activityBox.longBox1 .img{
        width: 55px;
    }
	.serveBox .img{
		width: 55px;
		height: 55px;
		border-radius: 55px;
		background-color: #fff;
		box-shadow: 0 1px 18px 0 rgba(203,202,220,0.56);
	}
	.activityBox .img{
		width: 55px;
	}
	.activityBox .img,.serveBox .img{
		-webkit-animation: stepHome 3s infinite alternate;
		animation: stepHome 3s infinite alternate;
	}
    .toggle_menu_container{
        height: 55px;
        width: 55px;
        border-radius:55px;
        background-color: #fff;
        box-shadow: 0 1px 18px 0 rgba(203,202,220,0.56);
        position: relative;
    }
	
	/* @-webkit-keyframes stepHome {
		25% {
		-webkit-transform:translateY(20%);
		transform:translateY(20%)
	}
	50% {
		-webkit-transform:translateY(0);
		transform:translateY(0)
	}
	75% {
		-webkit-transform:translateY(20%);
		transform:translateY(20%)
	}
	100% {
		-webkit-transform:translateY(0);
		transform:translateY(0)
	}
	}
	@keyframes stepHome {
		25% {
		-webkit-transform:translateY(20%);
		transform:translateY(20%)
		}
		50% {
			-webkit-transform:translateY(0);
			transform:translateY(0)
		}
		75% {
			-webkit-transform:translateY(20%);
			transform:translateY(20%)
		}
		100% {
			-webkit-transform:translateY(0);
			transform:translateY(0)
		}
	} */
    
    
    
    

	
</style>
