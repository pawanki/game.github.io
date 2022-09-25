import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./plugins/vant.js";
import 'vant/lib/index.css'; 
// import "./plugins/elementUI"
import './plugins/custom'
import './plugins/loadingMixin'
import "./plugins/axios";
import './plugins/utils';
import 'lib-flexible'
import  '../public/globalConfig.js'

import '@vant/touch-emulator';
import * as echarts from 'echarts'
Vue.prototype.$echart = echarts;
// import globalConfig from '../public/globalConfig.js'
// Vue.prototype.globalConfig = globalConfig;

import VueI18n from 'vue-i18n'
Vue.use(VueI18n) // 通过插件的形式挂载，通过全局方法 Vue.use() 使用插件

const i18n = new VueI18n({
	locale:localStorage.getItem("lang")||'en', // 语言标识 //this.$i18n.locale // 通过切换locale的值来实现语言切换
	messages: {
		'en': require('./plugins/VueI18n/en'), //英文语言包
		'zh-CN': require('./plugins/VueI18n/zh'), //中文语言包
		'vi': require('./plugins/VueI18n/ynan'), // 越南语言包
		'my': require('./plugins/VueI18n/maya'), // 马来语言包
		'id': require('./plugins/VueI18n/yni'), // 印尼语言包
		'tha': require('./plugins/VueI18n/ty'), // 泰语语言包
		'md': require('./plugins/VueI18n/md'), // 缅甸语言包
		'bra': require('./plugins/VueI18n/bc'), // 巴西语言包
		'hd': require('./plugins/VueI18n/india'), // 印度语言包
	},
	silentTranslationWarn: true,
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to,from,next)=>{
	const type = to.meta.type;
	if(type==='login'){
		if(localStorage.getItem('UserInfo')){
			next();
		}else{
			next('/login')
		}
	}else{
		next();
	}
})