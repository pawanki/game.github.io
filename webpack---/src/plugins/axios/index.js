import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import interceptors from "./interceptors";
import api from './api'
import baseConfig from '../../../public/baseConfig.js'

Vue.use(VueAxios, axios)
interceptors(axios)

Vue.prototype.$api = api
Vue.prototype.$baseConfig = baseConfig
