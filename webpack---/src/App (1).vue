<template>
  <div id="app">  
    <router-view />
  </div>
</template>


<script>
export default {
	name: 'App',
  	data() {
	    return {
	    };
  	}
};
</script>


<style lang="scss">
@import '@/plugins/css/layout';
*{
    margin: 0; 
    padding: 0; 
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: none;
 }
*:not(input,textarea) {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	width: 100%;
	position: relative;
	font-size: 14px;
	min-height: 100vh;
	// overflow-y: auto;
}
.mian{
	padding-top: 49px;
	height: 100%;
	width: 100%;
    max-width: 400px;
    margin: 0 auto;
	min-height: 100vh;
	&.action {
	  touch-action: none;
	  touch-action: pan-x;
	}
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
    -webkit-appearance: none !important;
}
input[type="number"]{
    -moz-appearance:textfield;
}
.van-dialog{
	top: 50% !important;
	width: 300px !important;
	border-radius: 10px !important;
}
.van-dialog__message{
    img{
        width: 100% !important;
    }
}
@media screen and (min-width:800px) {
	html {
		font-size:2.4rem!important;
		width:10rem;
		margin:0 auto;
		background-color:#dadada;
		overflow:hidden;
		width:100%;
	}
	body,html {
		position:relative
	}
	body {
		overflow-y:scroll;
		width:100%
	}
	body::-webkit-scrollbar {
		display:none
	}
	.navbar,.mian,.van-tabbar,.nav{
		width:10rem!important
	}
}
</style>
