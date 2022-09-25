import utils from "../utils";
import axios from './http.js'
import baseConfig from '../../../public/baseConfig.js'
import globalConfig from '../../../public/globalConfig.js' 
import Vue from 'vue'
const api = {}

api.GetOnSitesApi = params => {
	 // params.language =localStorage.getItem("lang");
	 return axios({
		 baseURL: baseConfig.baseURL,
         method: 'POST',
         data:params
     })
 }
 
//登录
api.Login = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/UserLogin',
        method: 'POST',
        data:params
     })
 }
 //注册
 api.Register = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/Register',
        method: 'POST',
        data:params
    })
 }
// 
api.GetRegisterState = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/GetRegisterState',
        method: 'POST',
        data:params
    })
}
//判断是否需要短信
api.GetRegisterSMS = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/GetRegisterSMS',
        method: 'POST',
        data:params
    })
}
 
//发送短信
api.SmsVerifyCode = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/SmsVerifyCode',
        method: 'POST',
        data:params
    })
}
//找回密码
api.SmsForget = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/SmsForget',
        method: 'POST',
        data:params
    })
}
//修改密码
api.Uppwd = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/Uppwd',
        method: 'POST',
        data:params
    })
}

api.NewUppwd = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/NewUppwd',
 		method: 'POST',
 		data: params
 	})
}
// 隐私政策
api.GetProtocols = params => {
   	 params.language =localStorage.getItem("lang");
   	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetProtocols',
         method: 'POST',
         data:params
     })
}
// 风险披露协议
api.GetAgreement = params => {
   	 params.language =localStorage.getItem("lang");
   	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetAgreement',
         method: 'POST',
         data:params
     })
}

// 充值奖励列表
api.GetSignInRecharges = params => {
	 params.language =localStorage.getItem("lang");
	return axios({
	baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetSignInRecharges',
		method: 'POST',
		data:params
	})
}
// 签到接口
api.NewSetSinIn = params => {
	params.language =localStorage.getItem("lang");
	return axios({
	baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/NewSetSinIn',
		method: 'POST',
		data:params
	})
}
 // 修改昵称
api.EditNickName = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
 	baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/EditNickName',
 		method: 'POST',
 		data:params
 	})
}
//客服列表
api.GetCustomerServiceList = params => {
	// params.language =localStorage.getItem("lang");
 	return axios({
 	baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetCustomerServiceList',
 		method: 'POST',
 		data:params
 	})
}
//新手指南
api.GetPlayingGuide = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
 	baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetPlayingGuide',
 		method: 'POST',
 		data:params
 	})
}
//领取红包
api.ConversionRedpage = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
 	baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/ConversionRedpage',
 		method: 'POST',
 		data:params
 	})
}
// 邀请好友
api.GetTaskList = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
 	baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetTaskList',
 		method: 'POST',
 		data:params
 	})
} 
//领取奖励
api.SetTaskOrder = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
 	baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/SetTaskOrder',
 		method: 'POST',
 		data:params
 	})
}
//登录日志
api.GetLoginlog = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
 	baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetLoginlog',
 		method: 'POST',
 		data:params
 	})
}
//获取邮件消息列表
api.GetMessageList = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
 	baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetMessageList',
 		method: 'POST',
 		data:params
 	})
} 
//获取邮件消息详情
api.GetMessageDetails = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
 	baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetMessageDetails',
 		method: 'POST',
 		data:params
 	})
} 
 //设置单条消息状态
api.SetOneMessageState = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  	baseURL: globalConfig.clientCfg.ApiUrl,
  		url: '/api/webapi/SetOneMessageState',
  		method: 'POST',
  		data:params
  	})
}
 //设置全部消息状态
api.SetAllMessageState = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  	baseURL: globalConfig.clientCfg.ApiUrl,
  		url: '/api/webapi/SetAllMessageState',
  		method: 'POST',
  		data:params
  	})
}
//设置全部消息状态
api.GetTransactions = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  	baseURL: globalConfig.clientCfg.ApiUrl,
  		url: '/api/webapi/GetTransactions',
  		method: 'POST',
  		data:params
  	})
}
 //投注记录接口
api.GetNewMyEmerdList = params => {
   	 params.language =localStorage.getItem("lang");
   	return axios({
   	baseURL: globalConfig.clientCfg.ApiUrl,
   		url: '/api/webapi/GetNewMyEmerdList',
   		method: 'POST',
   		data:params
   	})
}
//获取钱包接口
api.Getwallet = params => {
	 params.language =localStorage.getItem("lang");
	return axios({
	baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/Getwallet',
		method: 'POST',
		data:params
	})
}
 //获取钱包接口
 api.GetWithdrawals = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
 	baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetWithdrawals',
 		method: 'POST',
 		data:params
 	})
 }
 //充值纪录
 api.GetRechargeRecord = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
 	baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetRechargeRecord',
 		method: 'POST',
 		data:params
 	})
 }
 //提现纪录
 api.GetWithdrawLog = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
 	baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/getWithdrawLog',
 		method: 'POST',
 		data:params
 	})
 }
 //推广
 api.Promotion = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
 	baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/Promotion',
 		method: 'POST',
 		data:params
 	})
 }
 //奖金记录
 api.GetPromotionRecord = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
 	baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetPromotionRecord',
 		method: 'POST',
 		data:params
 	})
 } 
 //轮播图
 api.GetBanner = params => {
 	 // params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/GetBannerList',
        method: 'POST',
        data:params
     })
 }
 //获取首页中奖播报
 api.GetWinalotterys = params => {
 	 // params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/GetWinalotterys',
        method: 'POST',
        data:params
     })
 }
 //获取首页统计
 api.GetWebSite = params => {
 	 // params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/GetWebSite',
        method: 'POST',
        data:params
     })
 }
 //获取提现页面信息
 api.GetWithdrawal = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/GetWithdrawal',
        method: 'POST',
        data:params
     })
 }
 //获取提现页面信息
 api.GetWithdrawalTypes = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/GetWithdrawalTypes',
        method: 'POST',
        data:params
     })
 }
 //提现银行列表
 api.GetWithdrawals = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/GetWithdrawals',
        method: 'POST',
        data:params
     })
 }
//提现规格
 api.GetWithdrawAhundred = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/GetWithdrawAhundred',
        method: 'POST',
        data:params
     })
 } 
//提现规格
 api.NewSetWithdrawal = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/NewSetWithdrawal',
         method: 'POST',
         data:params
      })
} 
//充值方式
 api.GetPayTypeName = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetPayTypeName',
         method: 'POST',
         data:params
	})
} 
//充值类型
 api.GetRechargeTypes = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetRechargeTypes',
         method: 'POST',
         data:params
	})
} 
//本地银行下单
 api.NewSetRechargesBankOrder = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/NewSetRechargesBankOrder',
         method: 'POST',
         data:params
	})
} 
//订单取消
 api.UpRechargesBankOrder = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/UpRechargesBankOrder',
         method: 'POST',
         data:params
	})
} 
//获取银行卡充值订单
 api.GetBankOrder = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetBankOrder',
         method: 'POST',
         data:params
	})
} 
//开奖结果
api.GetEmerdList = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetEmerdList',
         method: 'POST',
         data:params
	})
} 
// 获取消息接口 type 0维护公告 1大厅滚动消息 2登录弹框 3在线推送
api.GetSitemessage = params => {
  	params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetSitemessage',
         method: 'POST',
         data:params
	})
} 
// 登录过期
api.UserExpired = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/UserExpired',
         method: 'POST',
         data:params
	})
}  
 
 
 //获取个人信息
api.GetUserInfo = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/GetUserInfo',
        method: 'POST',
        data:params
    })
}
 
 //添加银行卡列表
api.GetBankList = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetBankList',
         method: 'POST',
         data:params
     })
}
 //添加银行卡
api.SetWithdrawalBankCard = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/SetWithdrawalBankCard',
         method: 'POST',
         data:params
     })
}
//获取今天的提款
api.GetWithdrawalLeaderboard = params => {
  	 // params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetWithdrawalLeaderboard',
         method: 'POST',
         data:params
     })
}
//获取5D类型
api.Get5DtypeList = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/Get5DtypeList',
         method: 'POST',
         data:params
     })
}
//获取未开奖期号
api.GetGame5DIssue = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetGame5DIssue',
         method: 'POST',
         data:params
     })
}
//获取开奖结果
api.Get5DEmerdList = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/Get5DEmerdList',
         method: 'POST',
         data:params
     })
}
//获取开奖结果
api.GetNoaverage5DEmerdList = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetNoaverage5DEmerdList',
         method: 'POST',
         data:params
     })
}
//获取单条开奖结果
api.Get5DOneEmerd = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/Get5DOneEmerd',
         method: 'POST',
         data:params
     })
}
//投注接口
api.SetGame5DBetting = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/SetGame5DBetting',
         method: 'POST',
         data:params
     })
}

//5D我的投注记录
api.GetMy5DEmerdList = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetMy5DEmerdList',
         method: 'POST',
         data:params
    })
}

//5D获取赔率
api.GetOddsList = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetOddsList',
         method: 'POST',
         data:params
    })
}

//获取电子游戏接口
api.GetSlots = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetSlots',
         method: 'POST',
         data:params
    })
}
//获取游戏跳转接口
api.GetGameUrl = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetGameUrl',
         method: 'POST',
         data:params
    })
}

//游戏返回接口
api.GamePlayBack = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GamePlayBack',
         method: 'POST',
         data:params
    })
}
//活动列表
api.GetActivityList = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetActivityList',
         method: 'POST',
         data:params
    })
}
//活动详情
api.GetActivityDetails = params => {
  	 params.language =localStorage.getItem("lang");
  	return axios({
  		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetActivityDetails',
         method: 'POST',
         data:params
    })
}
 
 
 
 // 获取游戏
 api.GetTypeList = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
         baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GettypeList',
         //   url: '/api/goods/goods_list',
         method: 'POST',
         data: params
     })
 }
 // 获取游戏期号
 api.GameIssueNo = params => {
 	 params.language =localStorage.getItem("lang");
     return axios({
         baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetGameIssue',
         //   url: '/api/goods/goods_list',
         method: 'POST',
         data: params
     })
 }
 // 开奖结果接口  没有计算平均值
 api.GetNoaverageEmerdList = params => {
 	 params.language =localStorage.getItem("lang");
     return axios({
         baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetNoaverageEmerdList',
         //   url: '/api/goods/goods_list',
         method: 'POST',
         data: params
     })
 }
 // 我的投注记录
 api.GetMyEmerdList = params => {
 	 params.language =localStorage.getItem("lang");
     return axios({
         baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetMyEmerdList',
         //   url: '/api/goods/goods_list',
         method: 'POST',
         data: params
     })
 }
 // 下注
 api.GameBetting = params => {
 	 params.language =localStorage.getItem("lang");
     return axios({
         baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GameBetting',
         //   url: '/api/goods/goods_list',
         method: 'POST',
         data: params
     })
 }
 // 刷新用户金额
 api.GetUserAmount = params => {
 	 params.language =localStorage.getItem("lang");
     return axios({
         baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetUserAmount',
         //   url: '/api/goods/goods_list',
         method: 'POST',
         data: params
     })
 }
 
 // 获取银行列表
 api.GetCompanyDepositBank = params => {
 	 params.language =localStorage.getItem("lang");
     return axios({
         baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetCompanyDepositBank',
         method: 'POST',
         data: params
     })
 }
 // 获取银行列表
 api.SetCompanyDepositBankOrder = params => {
 	 params.language =localStorage.getItem("lang");
     return axios({
         baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/SetCompanyDepositBankOrder',
         method: 'POST',
         data: params
     })
 }
 // 获取公司银行卡订单
 api.GetCompanyDepositBankOrder = params => {
 	 params.language =localStorage.getItem("lang");
     return axios({
         baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetCompanyDepositBankOrder',
         method: 'POST',
         data: params
     })
 }
 // 取消订单
 api.UpCompanyDepositRechargesBankOrder = params => {
 	 params.language =localStorage.getItem("lang");
     return axios({
         baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/UpCompanyDepositRechargesBankOrder',
         method: 'POST',
         data: params
     })
 }
 //游戏k3
 // 取消订单
api.GetK3typeList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetK3typeList',
		method: 'POST',
		data: params
	})
}
api.GetGameK3Issue = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetGameK3Issue',
		method: 'POST',
		data: params
	})
}

api.GetK3OneEmerd = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetK3OneEmerd',
		method: 'POST',
		data: params
	})
}

api.GetNoaverageK3EmerdList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetNoaverageK3EmerdList',
		method: 'POST',
		data: params
	})
}
api.GetMyK3EmerdList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetMyK3EmerdList',
		method: 'POST',
		data: params
	})
}
api.GetK3OddsList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetK3OddsList',
		method: 'POST',
		data: params
	})
}

api.SetGameK3Betting = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/SetGameK3Betting',
		method: 'POST',
		data: params
	})
}
// 获取新闻列表
api.GetNewsList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetNewsList',
		method: 'POST',
		data: params
	})
}

// 获取新闻详情
api.GetNewsDetails = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetNewsDetails',
		method: 'POST',
		data: params
	})
}
// 获取新闻详情
api.GetHomeWebSite = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetHomeWebSite',
		method: 'POST',
		data: params
	})
} 

// 新增电子钱包
api.SetWithdrawalWallet = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/SetWithdrawalWallet',
		method: 'POST',
		data: params
	})
} 
// 管理员登录前端
api.AdminLogin = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/AdminLogin',
		method: 'POST',
		data: params
	})
}  
// 获取客服类型
api.GetCustomerServiceTypelist = params => {
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetCustomerServiceTypelist',
		method: 'POST',
		data: params
	})
} 

// 投注历史 WinGo  5D  colorLacd
api.GetMyHistoryEmerdList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetMyHistoryEmerdList',
		method: 'POST',
		data: params
	})
} 
api.GetMy5DHistoryEmerdList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetMy5DHistoryEmerdList',
		method: 'POST',
		data: params
	})
} 
api.GetMyK3HistoryEmerdList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetMyK3HistoryEmerdList',
		method: 'POST',
		data: params
	})
} 
api.GetUsdtTypeList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetUsdtTypeList',
		method: 'POST',
		data: params
	})
} 
api.SetRechargesUsdtOrder = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/SetRechargesUsdtOrder',
		method: 'POST',
		data: params
	})
} 
api.SetWithdrawalUsdt = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/SetWithdrawalUsdt',
		method: 'POST',
		data: params
	})
} 
api.GetSlotsType = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetSlotsType',
		method: 'POST',
		data: params
	})
} 
//获取类型接口
api.GetSlotsTypeNames = params => {
	params.language = localStorage.getItem("lang");
    return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/GetSlotsTypeNames',
        method: 'POST',
        data:params
    })
}
//获取充值UPI号
api.GetRechargesUpiList = params => {
	params.language = localStorage.getItem("lang");
    return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/GetRechargesUpi',
        method: 'POST',
        data:params
    })
}  

//生成UPI订单
api.SetRechargesUpiOrder = params => {
	params.language = localStorage.getItem("lang");
    return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/SetRechargesUpiOrder',
        method: 'POST',
        data:params
    })
}  
 
//刷新余额接口 --不调取第三方
api.GetWinsUserAmount = params => {
	params.language = localStorage.getItem("lang");
    return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/GetWinsUserAmount',
        method: 'POST',
        data:params
    })
} 
api.GetFattyPayBankNames = params => {
	params.language = localStorage.getItem("lang");
    return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/GetFattyPayBankNames',
        method: 'POST',
        data:params
    })
}

api.NewSetRechargesUpiOrder = params => {
	params.language = localStorage.getItem("lang");
    return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/NewSetRechargesUpiOrder',
        method: 'POST',
        data:params
    })
}
api.UpdateRechargesUpiOrder = params => {
 	params.language = localStorage.getItem("lang");
     return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/UpdateRechargesUpiOrder',
         method: 'POST',
         data:params
     })
}
 
api.SetWithdrawalCpf = params => {
 	params.language = localStorage.getItem("lang");
     return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/SetWithdrawalCpf',
         method: 'POST',
         data:params
     })
}

api.UpBankOrder = params => {
 	params.language = localStorage.getItem("lang");
     return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/UpBankOrder',
         method: 'POST',
         data:params
     })
}
api.SetWithdrawalWaveWallet = params => {
 	params.language = localStorage.getItem("lang");
     return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/SetWithdrawalWaveWallet',
         method: 'POST',
         data:params
     })
}
api.NewPromotion = params => {
 	params.language = localStorage.getItem("lang");
     return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/NewPromotion',
         method: 'POST',
         data:params
     })
}
api.PromotionReceiveList = params => {
 	params.language = localStorage.getItem("lang");
     return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/PromotionReceiveList',
         method: 'POST',
         data:params
     })
}
api.PromotionMytem = params => {
 	params.language = localStorage.getItem("lang");
     return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/PromotionMytem',
         method: 'POST',
         data:params
     })
}
api.PromotionTutorial = params => {
 	params.language = localStorage.getItem("lang");
     return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/PromotionTutorial',
         method: 'POST',
         data:params
    })
}
api.GetRechangeRemark = params => {
 	params.language = localStorage.getItem("lang");
     return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetRechangeRemark',
         method: 'POST',
         data:params
    })
}

api.GetGoogleVerify = params => {
 	params.language = localStorage.getItem("lang");
     return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetGoogleVerify',
         method: 'POST',
         data:params
    })
}
api.SetGoogleVerify = params => {
 	params.language = localStorage.getItem("lang");
     return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/SetGoogleVerify',
         method: 'POST',
         data:params
    })
}

api.VerifyGoogleLogin = params => {
 	params.language = localStorage.getItem("lang");
     return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/VerifyGoogleLogin',
         method: 'POST',
         data:params
    })
}

api.GetlongDragon = params => {
 	params.language = localStorage.getItem("lang");
     return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
        url: '/api/webapi/GetlongDragon',
        method: 'POST',
        data:params
    })
}

// 2022-4-17 winTrx

// 获取游戏
 api.GetTRXtypeList = params => {
 	 params.language =localStorage.getItem("lang");
 	return axios({
         baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetTRXtypeList',
         //   url: '/api/goods/goods_list',
         method: 'POST',
         data: params
     })
 }
 // 获取游戏期号
 api.GetTRXGameIssue = params => {
 	 params.language =localStorage.getItem("lang");
     return axios({
         baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetTRXGameIssue',
         //   url: '/api/goods/goods_list',
         method: 'POST',
         data: params
     })
 }
 // 开奖结果接口  没有计算平均值
 api.GetTRXNoaverageEmerdList = params => {
 	 params.language =localStorage.getItem("lang");
     return axios({
         baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetTRXNoaverageEmerdList',
         //   url: '/api/goods/goods_list',
         method: 'POST',
         data: params
     })
 }
 
 api.GetTRXEmerdList = params => {
 	 params.language =localStorage.getItem("lang");
     return axios({
         baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetTRXEmerdList',
         //   url: '/api/goods/goods_list',
         method: 'POST',
         data: params
     })
 }
 // 我的投注记录
 api.GetTRXMyEmerdList = params => {
 	 params.language =localStorage.getItem("lang");
     return axios({
         baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GetTRXMyEmerdList',
         //   url: '/api/goods/goods_list',
         method: 'POST',
         data: params
     })
 }
 // 下注
 api.GameTRXBetting = params => {
 	 params.language =localStorage.getItem("lang");
     return axios({
         baseURL: globalConfig.clientCfg.ApiUrl,
         url: '/api/webapi/GameTRXBetting',
         //   url: '/api/goods/goods_list',
         method: 'POST',
         data: params
     })
 }
api.GetMyTRXHistoryEmerdList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetMyTRXHistoryEmerdList',
 		method: 'POST',
 		data: params
 	})
} 

api.GetSitemessageList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetSitemessageList',
 		method: 'POST',
 		data: params
 	})
}
api.GetContinuousSignInRecharges = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetContinuousSignInRecharges',
 		method: 'POST',
 		data: params
 	})
}
api.SetContinuousSinIn = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/SetContinuousSinIn',
 		method: 'POST',
 		data: params
 	})
}

api.GetContinuousSinInList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetContinuousSinInList',
 		method: 'POST',
 		data: params
 	})
}
// 获取轮播图和类型图
api.GetBannerTypeList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetBannerTypeList',
 		method: 'POST',
 		data: params
 	})
}
// 获取商品列表
api.GetProductList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetProductList',
 		method: 'POST',
 		data: params
 	})
}
// 获取积分规则
api.GetProductRules = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetProductRules',
 		method: 'POST',
 		data: params
 	})
}
// 获取兑换订单
api.GetProductOrderList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetProductOrderList',
 		method: 'POST',
 		data: params
 	})
}
// 获取兑换订单
api.GetIntegralLogList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetIntegralLogList',
 		method: 'POST',
 		data: params
 	})
}
// 获取订单详情
api.GetProductOrderDetails = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetProductOrderDetails',
 		method: 'POST',
 		data: params
 	})
}
// 积分兑换接口
api.SetProductOrder = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/SetProductOrder',
 		method: 'POST',
 		data: params
 	})
}

// 获取GetTouChnGo充值二维码
api.GetTouChnGo = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetTouChnGo',
 		method: 'POST',
 		data: params
 	})
}

// TouChnGo下单
api.SetRechargesTouChnOrder = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/SetRechargesTouChnOrder',
 		method: 'POST',
 		data: params
 	})
}

// 获取新加坡官彩4D
api.Get4dgcSingaporeList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/Get4dgcSingaporeList',
 		method: 'POST',
 		data: params
 	})
}
// 获取新加坡官彩4D投注
api.SWZGameBetting = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/SWZGameBetting',
 		method: 'POST',
 		data: params
 	})
}
// 获取新加坡官彩4D历史开奖
api.GetSWZGEmerdList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetSWZGEmerdList',
 		method: 'POST',
 		data: params
 	})
}

// 获取4D投注记录
api.GetSWZGMyEmerdList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetSWZGMyEmerdList',
 		method: 'POST',
 		data: params
 	})
}

// 获取4D历史投注结果
api.GetSWZGMyHistoryEmerdList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetSWZGMyHistoryEmerdList',
 		method: 'POST',
 		data: params
 	})
}
// 获取4D历史投注结果
api.GetSWZGOddsList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetSWZGOddsList',
		method: 'POST',
		data: params
	})
}
// 获取越南彩票类型
api.GetVietnamList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetVietnamList',
		method: 'POST',
		data: params
	})
}
// 获取期号越南期号
api.GetVietnamIssue = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetVietnamIssue',
		method: 'POST',
		data: params
	})
}
// 获取日期/周
api.GetDayList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetDayList',
		method: 'POST',
		data: params
	})
}
// 获取开奖结果
api.GetVietnamEmerdList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetVietnamEmerdList',
		method: 'POST',
		data: params
	})
}
// 越南北部投注接口
api.VietnamNorthBetting = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/VietnamNorthBetting',
		method: 'POST',
		data: params
	})
}
// 越南中部投注接口
api.VietnamCenterBetting = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/VietnamCenterBetting',
		method: 'POST',
		data: params
	})
}

// 越南中部投注接口
api.GetMyCenterEmerdList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetMyCenterEmerdList',
		method: 'POST',
		data: params
	})
}


// 获取越南我的中部投注订单
api.GetMyNorthEmerdList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetMyNorthEmerdList',
		method: 'POST',
		data: params
	})
}

// 越南南部投注接口
api.VietnamSouthBetting = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/VietnamSouthBetting',
		method: 'POST',
		data: params
	})
}


// 获取越南我的南部投注订单
api.GetMySouthEmerdList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetMySouthEmerdList',
		method: 'POST',
		data: params
	})
}

// 获取北部赔率列表
api.GetNorthOddsList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetNorthOddsList',
		method: 'POST',
		data: params
	})
}

// 获取中部赔率列表
api.GetCenterOddsList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetCenterOddsList',
		method: 'POST',
		data: params
	})
}

// 获取南部赔率列表
api.GetSouthOddsList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetSouthOddsList',
		method: 'POST',
		data: params
	})
}



// 获取16选号类型
api.Get16typeList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/Get16typeList',
		method: 'POST',
		data: params
	})
}

// 获取16选号期号
api.Get16GameIssue = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/Get16GameIssue',
		method: 'POST',
		data: params
	})
}

//获取开奖结果
api.GetNoaverage16EmerdList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetNoaverage16EmerdList',
		method: 'POST',
		data: params
	})
}

// 获取开奖结果
api.SetGame16Betting = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/SetGame16Betting',
		method: 'POST',
		data: params
	})
}

// 获取我的投注记录接口
api.GetMy16EmerdList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetMy16EmerdList',
		method: 'POST',
		data: params
	})
}

// 获取我的历史投注接口
api.GetMy16HistoryEmerdList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetMy16HistoryEmerdList',
		method: 'POST',
		data: params
	})
}

// 获取赔率
api.Get16OddsList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/Get16OddsList',
		method: 'POST',
		data: params
	})
}

// 获取16选国家类型
api.Get16CountryTypeList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/Get16CountryTypeList',
		method: 'POST',
		data: params
	})
}

// 获取16国家期号
api.Get16CountryGameIssue = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/Get16CountryGameIssue',
		method: 'POST',
		data: params
	})
}

// 获取16选国家开奖结果
api.GetNoaverage16CountryEmerdList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetNoaverage16CountryEmerdList',
		method: 'POST',
		data: params
	})
}

// 获取16选国家开奖结果
api.Get16CountryOddsList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/Get16CountryOddsList',
		method: 'POST',
		data: params
	})
}
// 获取16选国家开奖结果
api.Get16CountryCodeList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/Get16CountryCodeList',
		method: 'POST',
		data: params
	})
}

// 16选国家投注
api.SetGame16CountryBetting = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/SetGame16CountryBetting',
		method: 'POST',
		data: params
	})
}

// 获取16选国家我的投注结果
api.GetMy16CountryEmerdList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetMy16CountryEmerdList',
		method: 'POST',
		data: params
	})
}

// 获取16选国家我的投注历史结果
api.GetMy16CountryHistoryEmerdList = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetMy16CountryHistoryEmerdList',
		method: 'POST',
		data: params
	})
}

// 
api.GetTransactionsTypes = params => {
	params.language =localStorage.getItem("lang");
	return axios({
		baseURL: globalConfig.clientCfg.ApiUrl,
		url: '/api/webapi/GetTransactionsTypes',
		method: 'POST',
		data: params
	})
}

api.GetVietnDayList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetVietnDayList',
 		method: 'POST',
 		data: params
 	})
}

api.GetVietnList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetVietnList',
 		method: 'POST',
 		data: params
 	})
}
// liveWin
// 类型数据
api.GetLivetypeList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetLivetypeList',
 		method: 'POST',
 		data: params
 	})
}
// 获取期号
api.GetLiveGameIssue = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetLiveGameIssue',
 		method: 'POST',
 		data: params
 	})
}
// 获取开奖结果
api.GetLiveNoaverageEmerdList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetLiveNoaverageEmerdList',
 		method: 'POST',
 		data: params
 	})
}
// 获取开奖记录
api.GetLiveEmerdList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetLiveEmerdList',
 		method: 'POST',
 		data: params
 	})
}
// 我的投注记录
api.GetLiveMyEmerdList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetLiveMyEmerdList',
 		method: 'POST',
 		data: params
 	})
}
// 游戏投注
api.GameLiveBetting = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GameLiveBetting',
 		method: 'POST',
 		data: params
 	})
}

// 是否开放找回密码
api.GetForPwdState = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetForPwdState',
 		method: 'POST',
 		data: params
 	})
}

// 获取4D期号和开奖结果
api.Get4DList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/Get4DList',
 		method: 'POST',
 		data: params
 	})
}

// 获取4D开奖结果
api.Get4DEmerdList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/Get4DEmerdList',
 		method: 'POST',
 		data: params
 	})
}

// 4D投注
api.Game4DBetting = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/Game4DBetting',
 		method: 'POST',
 		data: params
 	})
}
// 获取4D我的投注记录
api.Get4DMyEmerdList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/Get4DMyEmerdList',
 		method: 'POST',
 		data: params
 	})
}

// 获取推广短链
api.GetUrlAddress = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetUrlAddress',
 		method: 'POST',
 		data: params
 	})
}

// 获取极速万字类型接口
api.GetJsWztypeList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetJsWztypeList',
 		method: 'POST',
 		data: params
 	})
}
// 获取极速万字期号
api.GetJsWzGameIssue = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetJsWzGameIssue',
 		method: 'POST',
 		data: params
 	})
}

// 获取极速万字开奖结果
api.GetJsWz4DEmerdList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetJsWz4DEmerdList',
 		method: 'POST',
 		data: params
 	})
}

// 极速万字投注
api.GameJsWz4DBetting = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GameJsWz4DBetting',
 		method: 'POST',
 		data: params
 	})
}


// 获取极速万字投注结果
api.GetJsWz4DMyEmerdList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetJsWz4DMyEmerdList',
 		method: 'POST',
 		data: params
 	})
}

// 获取极速万字历史投注结果
api.GetJsWz4DMyHistoryEmerdList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetJsWz4DMyHistoryEmerdList',
 		method: 'POST',
 		data: params
 	})
}

// 获取官彩万字赔率
api.GetWZ4DGOddsList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetWZ4DGOddsList',
 		method: 'POST',
 		data: params
 	})
}


// 获取极速万字赔率
api.GetJsWZGOddsList = params => {
 	params.language =localStorage.getItem("lang");
 	return axios({
 		baseURL: globalConfig.clientCfg.ApiUrl,
 		url: '/api/webapi/GetJsWZGOddsList',
 		method: 'POST',
 		data: params
 	})
}






 // 图片上传
 // api.SourceUpload = params => {
	//  console.log(params)
 //     return axios({
 //         baseURL: globalConfig.clientCfg.ApiUrl,
 //         url: '/api/webapi/SourceUpload',
 //         //   url: '/api/goods/goods_list',
	// 	 headers:{'Content-Type':'multipart/form-data'},
 //         method: 'POST',
 //         data: params
 //     })
 // }
 

export default api