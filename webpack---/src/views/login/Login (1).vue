<template>
	<div class="mian login">
		<div class="login-banner">
			<div class="bankPage c-row c-row-middle-center" @click="goPage('/home')" >
				<div class="bank c-row c-row-middle-center">
					<img class="navbar-back" :src="require('../../assets/images/icon/back.png')"/>
					<!-- <van-icon size="20" color="#fff" name="arrow-left navbar-back"/> -->
				</div>
			</div>
			<img class="logo" :src="globalConfig.clientCfg.HeadLogo" />
		</div>
		<div class="login-box">
			<div class="tit">
				{{ $t('homepage.login') }}
			</div>
			<div class="mian-from">
				<div class="lab">
					{{ $t('homepage.numberFormat') }}:<span v-if="globalConfig.clientCfg.AreaCodeList">{{ AreaCode || globalConfig.clientCfg.AreaCodeList[0] }}</span>
				</div>
				<!-- 英国盘口下 -->
				<div class="item c-row c-row-center first" v-if="globalConfig.clientCfg.DollarSign!='$'">
					<div class="c-row number" @click="sendCode">
						<span class="c-row c-row-middle-center">
							<div class="mobile"></div>
							<!-- <img class="mobile" :src="require('../../assets/images/icon/icon_mobile.png')" /> -->
						</span>
						<div class="p-l-5" v-if="globalConfig.clientCfg.AreaCodeList">{{ AreaCode || globalConfig.clientCfg.AreaCodeList[0] }}</div>
					</div>
					<input v-model="form.mobile" maxlength="16" type="text" :placeholder="$t('homepage.mobile')" oninput="value=value.replace(/\D/g,'')" />
				</div>
				
				<div class="item c-row c-row-middle-center" v-else>
					<div class="c-row number" @click="sendCode">
						<span class="c-row c-row-middle-center">
							<div class="mobile"></div>
							<!-- <img class="mobile" :src="require('../../assets/images/icon/icon_mobile.png')" /> -->
						</span>
					</div>
					<input v-model="form.mobile" maxlength="16" type="text" :placeholder="$t('homepage.mobile')" oninput="value=value.replace(/\D/g,'')" />
				</div>
				
				
				<div class="item c-row c-row-center">
					<span class="img c-row c-row-middle-center">
						<div class="password"></div>
						<!-- <img class="password" :src="require('../../assets/images/icon/icon_password.png')" /> -->
					</span>
					<Put @input="getPwd" :placeholder="$t('homepage.pwd')"></Put>
				</div>
				
				<div class="mian-btn">
					<van-button class="gradient" block :round="true" @click="login">
						<span>{{ $t('homepage.login') }}</span>
					</van-button>
					<div class="text m-t-15 c-row c-row-middle-center">
						<span class="p-r-5" @click="goPage('/register')">{{ $t('homepage.register') }}</span>｜
						<!-- 英国盘口下 -->
						<!-- <span class="p-l-5"  v-if="globalConfig.clientCfg.DollarSign=='$'&&globalConfig.clientCfg.ProjectName=='PullBall'||globalConfig.clientCfg.ProjectName=='Tclottery'&&globalConfig.clientCfg.DollarSign=='₹'" @click="goPage('/keFuMenu')">{{ $t('homepage.forgotPwd') }}</span>
						<span class="p-l-5" v-else @click="">{{ $t('homepage.forgotPwd') }}</span> -->
						<span class="p-l-5" @click="getForgot">{{ $t('homepage.forgotPwd') }}</span>
					</div>
				</div>
			</div>
		</div>
		<!-- 选择区号 -->
		<van-popup v-model="show" position="bottom" :style="{ borderRadius: '15px 15px 0 0',padding:'5px 0 0', maxWidth:'10rem',left:'auto'}">
			<div class="AreaCode-box" v-for="(item,index) in globalConfig.clientCfg.AreaCodeList" :key="index" @click="SelectCode(item)">
				<div class="item c-row c-row-between c-row-middle">
					<div class="left c-row c-row-middle">
						{{item}}
					</div>
					<div class="right">
						<div :class="item==AreaCode?'action chek':'chek'"><van-icon name="success" color="#fff" size="16" /></div>
					</div>
				</div>
			</div>
		</van-popup>
		<Loading v-show="showLoading"></Loading>
	</div>
</template>

<script>
	import loading from "../../plugins/loadingMixin"
	import Put from '@/components/PwInput.vue'
	export default {
		name: 'Login',
		components: {Put},
		mixins: [loading],
		data() {
			return {
				show:false,
				AreaCode:'',
				showLoading:false, //Loading 加载
				form: {
					mobile: "",
					pwd: "",
				},
			};
		},
		mounted() {
			var that = this;
			if(!that.globalConfig.clientCfg.AreaCode){
				that.showLoadingFun();
				setTimeout(function(){
					if(that.$route.query.uid&&that.$route.query.key){
						that.adminMain(that.$route.query.uid,that.$route.query.key)
					}
					that.AreaCode = that.globalConfig.clientCfg.AreaCodeList[0];
				},1000)
			}else{
				that.AreaCode = that.globalConfig.clientCfg.AreaCodeList[0];
				if(that.$route.query.uid&&that.$route.query.key){
					that.adminMain(that.$route.query.uid,that.$route.query.key)
				}
			}
			window.addEventListener('keydown',that.keyDown);
		},
		created() {
			// var that = this;
			// document.onkeydown = function(e) { //键盘回车登录
			// 	var key = window.event.keyCode;
			// 	if (key == 13) {
			// 		that.login();
			// 	}
			// }
		},
		methods: {
			getPwd(e){
				let that = this;
				that.form.pwd = e;
			},
			keyDown(e){
				var that = this;
				//如果是回车则执行登录方法
				if(e.keyCode == 13){
					that.login();
				}
			},
			sendCode(){
				if(this.globalConfig.clientCfg.AreaCodeList.length>1){
					this.show = true;
				}
			},
			SelectCode(item){
				this.show = false;
				this.AreaCode = item;
			},
			getForgot(){
				let that = this;
				that.$api.GetForPwdState({}).then(res => {
					// console.log(res)
					if(res.code==0&&res.success){
						if(res.data.State === '0'){
							that.goPage('/forgot');
						}else{
							that.goPage('/keFuMenu');
						}
					}else{
						that.showLoading = true;
						setTimeout(function(){
						    that.showLoading = false;
						},10000);
						that.$msg(res.msg);
					}
				}).catch(res => {
					// 失败进行的操作
					that.$msg(that.$t('homepage.network'));
				});
			},
			async adminMain(uid,key) {
				let {mobile,pwd} = this.form;
				let params = {
					uid: uid,
					key: key,
				}
				let res = await this.$api.AdminLogin(params);
				if (res.success) {
					this.showLoading = false;
					localStorage.setItem("UserInfo", JSON.stringify(res.data));
					localStorage.setItem("open",1);
					localStorage.setItem("volumeShow",1);
					this.$router.push('/home')
				} else {
					this.showLoading = false;
					this.$msg(res.msg);
				}
			},
			
			async main() {
				let {mobile,pwd} = this.form;
				let params = {
					username: this.AreaCode + mobile,
					pwd: this.form.pwd,
					phonetype: this.utils.getUserAgent()
				}
				let res = await this.$api.Login(params);
				if (res.success) {
					this.showLoading = false;
                    if(res.data.Isvalidator==1){
                        this.$router.push({path:'/loginVerify',query:{'uid':res.data.UserId,'sign':res.data.Sign}});
                    }else{
						localStorage.removeItem('infoList');
						localStorage.removeItem('rebateratelist');
						
                        localStorage.setItem("UserInfo", JSON.stringify(res.data));
                        localStorage.setItem("open",1);
                        localStorage.setItem("volumeShow",1);
                        this.$router.push('/home');
                        //  this.$router.push({name:'LoginVerify',params:{'uid':res.data.UserId,'sign':res.data.Sign}});
                    }
				} else {
					this.showLoading = false;
					this.$msg(res.msg);
				}
			},
			login() {
				let that = this;
				let {mobile,pwd} = this.form;
				if (!mobile) {
					return that.$msg(that.$t('homepage.pleaseRequired'));
				}
				if (!pwd) {
					return that.$msg(that.$t('homepage.pleaseRequired'));
				}
				that.showLoading = true;
				let index = that.globalConfig.clientCfg.AreaCodeList.indexOf(that.AreaCode);
				if(index==-1){
					that.AreaCode = that.globalConfig.clientCfg.AreaCodeList[0];
				}
				this.main();
			}
		},
        watch:{
           
        },
		destroyed(){
			window.removeEventListener('keydown',this.keyDown,false);
		}
	};
</script>

<style lang="scss" scoped>
	.bank{
		width: 26px;
		height: 26px;
		border-radius: 26px;
		.navbar-back{
			width: 26px;
			height: 26px;
		}
	}
	@import '@/plugins/css/from';
</style>
