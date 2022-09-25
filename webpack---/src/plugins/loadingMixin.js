import Fooder from '@/components/Fooder.vue'
import Header from '@/components/Header.vue'
import Loading from '@/components/Loading.vue'
import Clipboard from "clipboard";
export default {
	components: {
		Fooder,
		Header,
		Loading,
	},
    data() {
        return {
			UserInfo:{},
			Amount:0.00,
			UGold:0,
			URate:0,
			noticeMsg:'',
			// IsURatio:false,//判断是否开启USDT
			lang:'en',
			InfoList:[],
			RebaterateList:[],
        }
    },
    methods: {
		goBackItem(url){	//1:mian 2:wallet 3:win 4:5D 5:colorLand 6:winTrx 7:4D 8:winTrx
			let that = this;
			url = parseInt(url);
			switch (url){
				case 1:
					that.goPage('/mian')
					break;
				case 2:
					that.goPage('/wallet')
					break;
				case 3:
					that.goPage('/win')
					break;
				case 4:
					that.goPage('/5D')
					break;
				case 5:
					that.goPage('/colorLand')
					break;
				case 6:
					that.goPage('/winTrx')
					break;
				case 7:
					that.goPage('/4D')
					break;
				case 8:
					that.goPage('/vietnam')
					break;
				default:
					// that.goPage('/mian')
					break;
			}
		},
		goWithdrawal(url){  //1:mian 2:wallet 3:win 4:5D 5:colorLand 6:winTrx
			let that = this;
			that.goPage('/withdrawal',{'url':url})
		},
		// 刷新金额
		refresh(e,time=1000){ //1是本地金额刷新，2是第三方，time防抖时间
			let that = this;
			if(that.Animation==0){
				that.Animation =1;
				setTimeout(function(){
					that.Animation =0;
				},time)
				if(e==2){
					that.utils.throttle(that.getUserAmount, time);
				}else{
					that.getWinsUserAmount();
				}
			}
		},
		// 复制
		copy() {
			var clipboard = new Clipboard('.tag-read');
			clipboard.on('success', e => {
			  this.$msg(this.$t('homepage.copySuccess'));
			  // 释放内存
			  clipboard.destroy()
			})
			clipboard.on('error', e => {
			  // 不支持复制
			  this.$msg('失败');
			  // 释放内存
			  clipboard.destroy()
			})
		},
		
		// 跳转链接
		goPage(url,params){
			if(params){
				this.$router.push({path:url,query:params})
			}else{
				this.$router.push(url)
			}
		},
		// 公共接口
        async showLoadingFun() {
			let  that = this;
			let res = await that.$api.GetOnSitesApi();
			if(res.success){
				that.globalConfig.clientCfg = res.data;
				that.globalConfig.clientCfg.LanguageList = res.data.Languages.split("|"); // Languages 是以‘|‘分割的字符串，转换成数组
				// that.LanguageList = res.data.Languages.split("|");
				that.globalConfig.clientCfg.AreaCodeList = res.data.AreaCode.split("|");
				localStorage.setItem('clientCfg',JSON.stringify(res.data));
				if (that.globalConfig.clientCfg.LanguageList && that.globalConfig.clientCfg.LanguageList.length > 0){//有多个语言，默认选着第一个语言
					localStorage.setItem('lang',that.globalConfig.clientCfg.LanguageList[0]);
					that.$i18n.locale= that.globalConfig.clientCfg.LanguageList[0];
				}
			}else{
				that.$msg(res.msg);
			}
        },
		//金额刷新接口
		async getUserAmount() {
			let  that = this;
			that.showLoading = true;
			let res = await that.$api.GetUserAmount({
				uid:that.UserInfo.UserId,
				sign:that.UserInfo.Sign,
			});
			if(res.success){
				that.showLoading = false;
				that.Amount = res.data.Amount;
				that.UGold = res.data.UGold;
				that.URate = res.data.URate;
			}else{
				that.showLoading = false;
				if(res.msg=='sign error'){
					localStorage.removeItem('UserInfo');
					localStorage.removeItem('infoList');
					localStorage.removeItem('rebateratelist');
					that.goPage('/login');
				}else{
					that.$msg(res.msg);
				}
			}
		},
		async getWinsUserAmount() {
			let  that = this;
			that.showLoading = true;
			let res = await that.$api.GetWinsUserAmount({
				uid:that.UserInfo.UserId,
				sign:that.UserInfo.Sign,
			});
			if(res.success){
				that.showLoading = false;
				that.Amount = res.data.Amount;
				that.UGold = res.data.UGold;
				that.URate = res.data.URate;
			}else{
				that.showLoading = false;
				if(res.msg=='sign error'){
					localStorage.removeItem('UserInfo');
					localStorage.removeItem('infoList');
					localStorage.removeItem('rebateratelist');
					that.goPage('/login');
				}else{
					that.$msg(res.msg);
				}
			}
		},
		//信息接口 type 0维护公告 1大厅滚动消息 2登录弹框 3在线推送
		async getSitemessage(type) {
			let  that = this;
			that.showLoading = true;
			let res = await that.$api.GetSitemessage({
				type:type,
			});
			if(res.success){
				that.showLoading = false;
				if(type==1&&res.data.SiteMessage){
					that.noticeMsg=res.data.SiteMessage;
				}else if(type==2&&res.data.SiteMessage){
					that.$dialog.alert({
						title: that.$t('homepage.tips'),
						confirmButtonText: that.$t('homepage.confirm'),
						message: res.data.SiteMessage,
					}).then(() => {
						localStorage.setItem("open", JSON.stringify(false));
					});
				}else if(type==3){
					// that.pushShow = true;
					// that.pushMsg = res.data.SiteMessage;
				}
			}else{
				that.showLoading = false;
				that.$msg(res.msg);
			}
		},
		// 判断账号单点登录
		async UserExpired(uid,keycode,sign) {
			let  that = this;
			that.showLoading = true;
			let res = await that.$api.UserExpired({
				uid:uid,
				keycode:keycode,
				sign:sign,
			});
			if(res.success){
				that.showLoading = false;
				// State 0正常 1账号已在别处登录 2登入已过期
				if(res.data.State==1){
					let message = that.$t('homepage.informationTip1');
					that.$dialog.alert({
						title: that.$t('homepage.tips'),
						confirmButtonText: that.$t('homepage.confirm'),
						message: message,
					}).then(() => {
						localStorage.removeItem('UserInfo');
						localStorage.removeItem('infoList');
						localStorage.removeItem('rebateratelist');
						that.$router.push('/login');
					});
					// Vue.prototype.$prompt(message,arr.length,true);
				}else if(res.data.State==2){
					let message = that.$t('homepage.informationTip');
					that.$dialog.alert({
						title: that.$t('homepage.tips'),
						confirmButtonText: that.$t('homepage.confirm'),
						message: message,
					}).then(() => {
						localStorage.removeItem('UserInfo');
						localStorage.removeItem('infoList');
						localStorage.removeItem('rebateratelist');
						that.$router.push('/login');
					});
					// Vue.prototype.$prompt(message,arr.length,true);
				}
			}else{
				that.showLoading = false;
				if(res.msg=='uid can not be empty'||res.msg=='UserID error'){
					localStorage.removeItem('UserInfo');
					localStorage.removeItem('infoList');
					localStorage.removeItem('rebateratelist');
					that.goPage('/login');
				}else{
					that.$msg(res.msg);
				}
			}
		},
    },
	mounted(){
		// 如果出现没有区号 需要开启这个
		// let that = this;
		// that.showLoadingFun();
		// setTimeout(function(){
		// 	that.AreaCode = that.globalConfig.clientCfg.AreaCodeList[0];
		// },500)
	},
	created: function () {
		let that = this;
		that.lang = localStorage.getItem("lang");
		if(localStorage.getItem('UserInfo')&&this.$route.path!='/'){
			that.InfoList = JSON.parse(localStorage.getItem('infoList'));
			that.RebaterateList = JSON.parse(localStorage.getItem('rebateratelist'));
			that.UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
			// console.log(that.UserInfo)
			if(that.UserInfo){
				that.UserExpired(that.UserInfo.UserId,that.UserInfo.KeyCode,that.UserInfo.Sign);
			}
		}
		// if(localStorage.getItem('IsURatio')&&this.$route.path!='/'){
		// 	that.IsURatio = JSON.parse(localStorage.getItem('IsURatio'));
		// }
		
	}
};