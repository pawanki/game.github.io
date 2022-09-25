import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)
  const routes = [
	{
	  	path: '/',
	  	name: 'Loading',
	  	component: () => import('../views/Loading.vue'),
	},
	{
		path: '/Home',
		name: 'Home',
		component: () => import('../views/Home.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},{
		path: '/loginVerify',
		name: 'LoginVerify',
		component: () => import('../views/login/LoginVerify.vue'),
	},{
		path: '/register',
		name: 'Register',
		component: () => import('../views/login/Register.vue'),
	},{
		path: '/privacyPolicy',
		name: 'PrivacyPolicy',
		component: () => import('../views/mian/PrivacyPolicy.vue'),
	},{
		path: '/riskAgreement',
		name: 'RiskAgreement',
		component: () => import('../views/mian/RiskAgreement.vue'),
	},{
		path: '/forgot',
		name: 'Forgot',
		component: () => import('../views/login/Forgot.vue'),
	},{
		path: '/mian',
		name: 'Mian',
		component: () => import('../views/mian/Mian.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/myProfile',
		name: 'MyProfile',
		component: () => import('../views/mian/MyProfile.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/win',
		name: 'Win',
		component: () => import('../views/game/Win.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/liveWin',
		name: 'LiveWin',
		component: () => import('../views/game/LiveWin.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/winTrx',
		name: 'WinTrx',
		component: () => import('../views/game/WinTrx.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/red',
		name: 'red',
		component: () => import('../views/red.vue'),
	},{
		path: '/colorLand',
		name: 'ColorLand',
		component: () => import('../views/game/ColorLand.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/lottery',
		name: 'Lottery',
		component: () => import('../views/Lottery.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/lottery/win',
		name: 'Lottery',
		component: () => import('../views/lottery/Lottery.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/lottery/record',
		name: 'Record',
		component: () => import('../views/lottery/Record.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	}
	// ,{
	// 	path: '/checkIn',
	// 	name: 'CheckIn',
	// 	component: () => import('../views/mian/CheckIn.vue'),
	// 	meta:{
	// 		type:'login',//判断是否需要登录 
	// 	}
	// }
	,{
		path: '/checkDes',
		name: 'CheckDes',
		component: () => import('../views/mian/CheckDes.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/checkRecord',
		name: 'CheckRecord',
		component: () => import('../views/mian/CheckRecord.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/promotion',
		name: 'Promotion',
		component: () => import('../views/mian/Promotion.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/promotionDes',
		name: 'PromotionDes',
		component: () => import('../views/mian/PromotionDes.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/bonusrecord',
		name: 'Bonusrecord',
		component: () => import('../views/mian/Bonusrecord.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/wallet',
		name: 'Wallet',
		component: () => import('../views/mian/Wallet.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/rechargerecord',
		name: 'Rechargerecord',
		component: () => import('../views/mian/Rechargerecord.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/bettingrecordwin',
		name: 'BettingRecordWin',
		component: () => import('../views/mian/BettingRecordWin.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/bettingrecordlivewin',
		name: 'BettingRecordliveWin',
		component: () => import('../views/mian/BettingRecordliveWin.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/bettingrecordwinTrx',
		name: 'BettingRecordWinTrx',
		component: () => import('../views/mian/BettingRecordWinTrx.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/bettingrecord5d',
		name: 'BettingRecord5D',
		component: () => import('../views/mian/BettingRecord5D.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/bettingrecord4d',
		name: 'BettingRecord4D',
		component: () => import('../views/mian/BettingRecord4D.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/bettingrecordland',
		name: 'BettingRecordLand',
		component: () => import('../views/mian/BettingRecordLand.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/bettingrecordnation',
		name: 'BettingRecordNation',
		component: () => import('../views/mian/BettingRecordNation.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/bettingrecordlottery',
		name: 'BettingRecordLottery',
		component: () => import('../views/mian/BettingRecordLottery.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/withdrawalrecord',
		name: 'Withdrawalrecord',
		component: () => import('../views/mian/Withdrawalrecord.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/historicalBetting',
		name: 'HistoricalBetting',
		component: () => import('../views/mian/HistoricalBetting.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/loginLog',
		name: 'LoginLog',
		component: () => import('../views/mian/LoginLog.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/messageCenter',
		name: 'MessageCenter',
		component: () => import('../views/mian/MessageCenter.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/messageDes',
		name: 'MessageDes',
		component: () => import('../views/mian/MessageDes.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/transactions',
		name: 'Transactions',
		component: () => import('../views/mian/Transactions.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	}
	,{
		path: '/mission',
		name: 'Mission',
		component: () => import('../views/mian/Mission.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/redenvelopes',
		name: 'Redenvelopes',
		component: () => import('../views/mian/Redenvelopes.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/newtutorial',
		name: 'Newtutorial',
		component: () => import('../views/mian/Newtutorial.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/about',
		name: 'About',
		component: () => import('../views/mian/About.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/keFuMenu',
		name: 'KeFuMenu',
		component: () => import('../views/mian/KeFuMenu.vue'),
	},{
		path: '/keFuMenus',
		name: 'KeFuMenus',
		component: () => import('../views/mian/KeFuMenus.vue'),
	},{
		path: '/keFuMenuDes',
		name: 'keFuMenuDes',
		component: () => import('../views/mian/KeFuMenuDes.vue'),
	},{
		path: '/withdrawal',
		name: 'Withdrawal',
		component: () => import('../views/mian/Withdrawal.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/addbank',
		name: 'Addbank',
		component: () => import('../views/mian/Addbank.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/addCpfbank',
		name: 'AddCpfbank',
		component: () => import('../views/mian/AddCpfbank.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/addElcbank',
		name: 'AddElcbank',
		component: () => import('../views/mian/AddElcbank.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/addWavebank',
		name: 'AddWavebank',
		component: () => import('../views/mian/AddWavebank.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/addUsdt',
		name: 'addUsdt',
		component: () => import('../views/mian/addUsdt.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/recharge',
		name: 'Recharge',
		component: () => import('@/views/mian/Recharge.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/usdt',
		name: 'Usdt',
		component: () => import('../views/mian/Usdt.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/touchngo',
		name: 'Touchngo',
		component: () => import('../views/mian/Touchngo.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/5D',
		name: '5D',
		component: () => import('../views/game/5D.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/4DW',
		name: '4DW',
		component: () => import('../views/game/4DW.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/4DW2',
		name: '4DW2',
		component: () => import('../views/game/4DW2.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/4DW3',
		name: '4DW3',
		component: () => import('../views/game/4DW3.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/4Djs',
		name: '4Djs',
		component: () => import('../views/game/4DJS.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/4D',
		name: '4D',
		component: () => import('../views/game/4D.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/vietnam',
		name: 'Vietnam',
		component: () => import('../views/game/Vietnam.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/nation',
		name: 'Nation',
		component: () => import('../views/game/Nation.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/game/lottery',
		name: 'Lottery',
		component: () => import('../views/game/Lottery.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/slots',
		name: 'Slots',
		component: () => import('../views/slot/Slots.vue')
	},{
		path: '/slotsList',
		name: 'SlotsList',
		component: () => import('../views/slot/SlotsList.vue')
	},{
		path: '/casino',
		name: 'Casino',
		component: () => import('../views/slot/Casino.vue')
	},{
		path: '/casinoAg',
		name: 'CasinoAg',
		component: () => import('../views/slot/CasinoAg.vue')
	},{
		path: '/sport',
		name: 'Sport',
		component: () => import('../views/slot/Sport.vue')
	},{
		path: '/sportAg',
		name: 'SportAg',
		component: () => import('../views/slot/SportAg.vue')
	},{
		path: '/gameGo',
		name: 'GameGo',
		component: () => import('../views/iframe/GameGo.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/activity',
		name: 'Activity',
		component: () => import('../views/mian/Activity.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/activityDes',
		name: 'ActivityDes',
		component: () => import('../views/mian/ActivityDes.vue'),
	},{
		path: '/pages/login/register',
		name: 'Register',
		component: () => import('../views/page/Register.vue'),
	},{
		path: '/center',
		name: 'Center',
		component: () => import('../views/mian/Center.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/deposit',
		name: 'Deposit',
		component: () => import('../views/mian/Deposit.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/Company',
		name: 'Company',
		component: () => import('../views/mian/Company.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/newList',
		name: 'NewList',
		component: () => import('../views/mian/NewList.vue'),
	},{
		path: '/newdes',
		name: 'Newdes',
		component: () => import('../views/mian/Newdes.vue'),
	},
	{
		path: '/upiPay',
		name: 'UpiPay',
		component: () => import('../views/mian/UpiPay.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
	},{
		path: '/rankList',
		name: 'RankList',
		component: () => import('../views/mian/RankList.vue'),
	},{
		path: '/myTeam',
		name: 'MyTeam',
		component: () => import('../views/mian/MyTeam.vue'),
        meta:{
        	type:'login',//判断是否需要登录 
        }
	},{
		path: '/tutorial',
		name: 'Tutorial',
		component: () => import('../views/mian/Tutorial.vue'),
	},{
		path: '/verify',
		name: 'Verify',
		component: () => import('../views/verify/Verify.vue'),
        meta:{
        	type:'login',//判断是否需要登录 
        }
	},{
		path: '/verify',
		name: 'Verify',
		component: () => import('../views/verify/Verify.vue'),
        meta:{
        	type:'login',//判断是否需要登录 
        }
	},{
		path: '/vdownload',
		name: 'Vdownload',
		component: () => import('../views/verify/Vdownload.vue'),
        meta:{
        	type:'login',//判断是否需要登录 
        }
	},{
		path: '/vexplain',
		name: 'Vexplain',
		component: () => import('../views/verify/Vexplain.vue'),
        meta:{
        	type:'login',//判断是否需要登录 
        }
	},{
		path: '/vbackup',
		name: 'Vbackup',
		component: () => import('../views/verify/Vbackup.vue'),
        meta:{
        	type:'login',//判断是否需要登录 
        }
	},
    {
    	path: '/vsafety',
    	name: 'Vsafety',
    	component: () => import('../views/verify/Vsafety.vue'),
        meta:{
        	type:'login',//判断是否需要登录 
        }
    },
    {
    	path: '/indexLong',
    	name: 'IndexLong',
    	component: () => import('../views/long/IndexLong.vue'),
        meta:{
        	type:'login',//判断是否需要登录 
        }
    },{
    	path: '/longInfo',
    	name: 'LongInfo',
    	component: () => import('../views/long/LongInfo.vue'),
        meta:{
        	type:'login',//判断是否需要登录 
        }
    },{
    	path: '/noticeList',
    	name: 'NoticeList',
    	component: () => import('../views/notice/NoticeList.vue'),
    },{
    	path: '/shop',
    	name: 'Shop',
    	component: () => import('../views/shop/Shop.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
    },{
    	path: '/integral',
    	name: 'Integral',
    	component: () => import('../views/shop/Integral.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
    },{
    	path: '/exchange',
    	name: 'Exchange',
    	component: () => import('../views/shop/Exchange.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
    },{
    	path: '/rule',
    	name: 'Rule',
    	component: () => import('../views/shop/Rule.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
    },{
    	path: '/details',
    	name: 'Details',
    	component: () => import('../views/shop/Details.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
    },{
    	path: '/trxIframe',
    	name: 'TrxIframe',
    	component: () => import('../views/iframe/TrxIframe.vue'),
		meta:{
			type:'login',//判断是否需要登录 
		}
    }
	
	
    
    
    
    
    
    
    
    
    
	
	
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
  	if(savedPosition) {
  		return savedPosition
  	} else {
  		return {
  			x: 0,
  			y: 0
  		}
  	}
  }
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
 return originalPush.call(this, location).catch(err => err)
 }
export default router
