/*
 * @Author: your name
 * @Date: 2020-03-09 11:21:37
 * @LastEditTime: 2020-03-14 15:14:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \src\plugins\custom\index.js
 */
"use strict";
import Vue from 'vue'
import Msg from './components/msg'

const componets = [
  Msg,
]

function install(Vue) {
  componets.forEach(function (component) {
    Vue.use(component)
  })
}

const Plugin = {};

Plugin.install = install

Vue.use(Plugin)
