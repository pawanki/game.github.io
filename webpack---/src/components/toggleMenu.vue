var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{ref:"menuHome",staticClass:"menu_container",on:{"click":_vm.toggleMenu}},[_c('img',{attrs:{"src":_vm.menuSrc}})]),_vm._l((_vm.menuItems),function(item,index){return _c('div',{staticClass:"menu_item",attrs:{"id":item.name},on:{"click":function($event){return _vm.clickMenu(item,index)}}},[_c('img',{staticClass:"item",attrs:{"src":item.src}})])})],2)}
var staticRenderFns = []

export { render, staticRenderFns }