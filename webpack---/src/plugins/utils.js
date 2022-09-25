import Vue from "vue";
import '@/plugins/custom'
import { Toast } from "vant";
let timer, flag;
const utils = {
	toastLoading: function (message = '加载中...', duration = 10000) {
		Toast.loading({
			message,
			duration,
			forbidClick: true,
		});
	},
	getTime: function (timestamp) {
		var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		var Y = date.getFullYear() + '-';
		var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
		var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours())+ ':';
		var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())+ ':';
		var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
		return Y + M + D + h + m + s;
	},
    getData: function (timestamp) {
    	var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    	var Y = date.getFullYear() + '/';
    	var M = (date.getMonth() + 1) +'/';
    	var D = date.getDate() + '';
    	var h = date.getHours() + ':';
    	var m = date.getMinutes() + ':';
    	var s = date.getSeconds();
    	return Y + M + D;
    },
	mobile:function(mobile){
		let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
		if(!reg.test(mobile)){
			return false;
		}else{
			return true;
		}
	},
	cardID:function(cardID){
		let reg = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
		if(!reg.test(cardID)){
			return false;
		}else{
			return true;
		}
	},
	//格式化货币金额
	formatCurrency:function (value){
		if (!value){
			return 0;
		}
		
		let sign = '';
		if (value > 1000000){
			value /= 1000000;
			sign = 'M';
		}
		else if (value > 1000){
			value /= 1000;
			sign = 'K';
		}
		
		return value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + sign;
	},
	//获取货币符号
	getCurrencySymbol:function (){
		return Vue.prototype.globalConfig.clientCfg.DollarSign;
	},
	//越南个死变态，货币符号和别的国家都不一样，是放在数字后面的
	isYueNanCurrencySymbol:function (){
		return (Vue.prototype.globalConfig.clientCfg.DollarSign == '₫');
	},
	isYinDuCurrencySymbol:function (){
		return (Vue.prototype.globalConfig.clientCfg.DollarSign == '₹');
	},
	getUserAgent:function(){
		//-1:未知 0:PC  1:Android  2:IOS  3:ipad 
		let phonetype = -1;
		let ua = navigator.userAgent.toLowerCase();
		if (ua.indexOf('windows') != -1){
			phonetype = 0;
		}else if (ua.indexOf('android') != -1){
			phonetype = 1;
		}else if (ua.indexOf('iphone') != -1){
			phonetype = 2;
		}else if (ua.indexOf('ipad') != -1){
			phonetype = 3;
		}else {
			phonetype = -1;
		}
		//console.log("设备类型（0:PC  1:Android  2:IOS  3:ipad ）", phonetype);
		return phonetype;
	},
	// 数据格式化
	numFilter:function(value) {
		let realVal ='';
		if(Vue.prototype.globalConfig.clientCfg.DollarSign=='R$'){
			realVal = parseFloat(value).toLocaleString('pt-BR',{minimumFractionDigits: 2});
		}else{
			realVal = parseFloat(value).toFixed(2);
		}
		return realVal;
	},
    // 数据格式化
    numFilter3:function(value) {
        let realVal = parseFloat(value).toFixed(3);
    	return realVal;
    },
    accMul:function (arg1,arg2) { 
        var m=0,s1=arg1.toString(),s2=arg2.toString(); 
        try{m+=s1.split(".")[1].length}catch(e){} 
        try{m+=s2.split(".")[1].length}catch(e){} 
        return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m) 
    },
	// 随机数字
	random:function(min, max) {
		if (min >= 0 && max > 0 && max >= min) {
			let gab = max - min + 1;
			return Math.floor(Math.random() * gab + min);
		} else {
			return 0;
		}
	},
	//k3数据计算
	findFlagArrays:function (opt) {
	    let self = this
		let task = [];
	    let flag = {
			arr: opt.arr,
	        n: opt.n,
	        getFlagArray: function () {
				if(opt.arr.length < opt.n){
					return []
				}
				if(opt.n < 1){
					return []
				}
				let len = this.arr.length
				let temp = [],list
				let jixu = true
				// 先给我们的数组初始化，前边n位为1，后边为0
				for (let i = 0; i < len; i++) {
					if (i < this.n) {
						temp.push(1)
					} else {
					temp.push(0)
					}
				}
				this.printf(temp)
				while (jixu) {
					let x = 0
					let y = 0
					let z = 0
	            for (let i = 0; i < len - 1; i++) {
					if (temp[i] === 1 && temp[i + 1] === 0) {
						x = i
						temp[i] = 0
						temp[i + 1] = 1
						break
					}
	            }
	            for (let i = 0; i < x; i++) {
					if (temp[i] === 1) {
						y++
					}
	            }
	            for (let i = 0; i < x; i++) {
					if (i < y) {
						temp[i] = 1
					} else {
						temp[i] = 0
					}
	            }
	            list = this.printf(temp)
	            // console.log(temp.join(' '))
	            for (let i = 0; i < len; i++) {
					if (i < len - this.n && temp[i] === 0) {
						z++
					}
					if (i >= len - this.n && temp[i] === 1) {
						z++
					}
	            }
	            if (z === len) {
					jixu = false
	            }
	        }
				console.log(list)
				return list;
	        },
	        printf: function (temp) {
				let result = []
				for (let i = 0; i < this.arr.length; i++) {
					if (temp[i] === 1) {
						result.push(this.arr[i])
					}
				}
			  task.push(result);
				return task.length
	        },
		}
		return flag
	},
	getBetType:function(list){
		let betType =[];
		for(var i = 0;list.length>i;i++){
			if(list[i]=='3'||list[i]=='4'||list[i]=='5'||list[i]=='6'||list[i]=='7'||list[i]=='8'||list[i]=='9'||list[i]=='10'||list[i]=='11'||list[i]=='12'||list[i]=='13'||list[i]=='14'||list[i]=='15'||list[i]=='16'||list[i]=='17'||list[i]=='18'){
				betType.push(1);
				continue;
			}
			if(list[i]=='A'||list[i]=='B'){
				betType.push(2);
				continue;
			}
			if(list[i]=='C'||list[i]=='D'){
				betType.push(3);
				continue;
			}
		}
		betType = betType.sort(function(a, b){return a - b});
		return [...new Set(betType)].join(',');
	},
	throttle:function(func, wait = 500, immediate = true) {
		if (immediate) {
			if (!flag) {
				flag = true;
				// 如果是立即执行，则在wait毫秒内开始时执行
				typeof func === 'function' && func();
				timer = setTimeout(() => {
					flag = false;
				}, wait);
			}
		} else {
			if (!flag) {
				flag = true
				// 如果是非立即执行，则在wait毫秒内的结束处执行
				timer = setTimeout(() => {
					flag = false
					typeof func === 'function' && func();
				}, wait);
			}
			
		}
	},
	getSort(list){
		let arr = [];
		arr = list.sort(function(a, b){return a - b});
		return arr;
	},
	containsNumberfunction (str) {
		let num,arr,list;
		arr = str.split('');
		list = arr.reverse();
		for(let i = 0; list.length > i; i++){
			if(!isNaN(list[i])){
				num = (list.length - 1) - i;
				return num;
			}
		}
	},
	isNumber(str){
		let task,arr,list;
		arr = str.split('');
		list = arr.reverse();
		for(let i = 0; list.length > i; i++){
			if(!isNaN(list[i])){
				task = true;
				break;
			}else{
				task = false;
			}
		}
		return task;
	},
	
	
}
Vue.prototype.utils = utils;
export default utils