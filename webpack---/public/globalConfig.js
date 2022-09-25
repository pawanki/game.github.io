import Vue from 'vue'
import router from '../src/router'
import globalConfig from './globalConfig.js'
export default {
	clientCfg : {
		/*
       ProjectName: "TATA",
       ProjectLogo: "http://47.56.7.183:5001/img/tatalogo.jpg",
       AndroidUrl: "http://47.56.7.183:5001/apk/FiBo-v1.0.1.apk",
       IOSUrl: "",
       Languages: "en",
       ApiUrl: "http://47.56.7.183:777",
       PayUrl: "http://47.56.7.183:777",
       WebIco: "http://47.56.7.183:5001/img/tatalogo.jpg",
       IsShops: 0,
       HeadLogo: "http://47.56.7.183:5001/img/tatalogo.jpg",
       AreaCode: "91",
       DollarSign: "₹",
	   */
    },
}


let cfg  = JSON.parse(localStorage.getItem('clientCfg'));
if (cfg) {
	globalConfig.clientCfg = cfg;
}else{//缓存中没有客户配置信息，可能是用户清除了缓存，必须强制跳转到首页，重新获取配置信息
	console.log('没有获取到client cfg');
	// router.push('/');
}
Vue.prototype.globalConfig = globalConfig;
