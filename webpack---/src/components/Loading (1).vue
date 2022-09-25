<template>
	<div class="Loading c-row c-row-middle-center">
		<van-loading color="#f2413b" />
	</div>
</template>

<script>
	export default {
		name: 'Header',
		props: {
      	
		},
		data () {
			return {
				
			}
		},mounted() {
			
		},methods:{
	  	
		},
	}
</script>

<style lang="scss" scoped>
.Loading {
   position: fixed;
   // border-radius: 10px;
   height: 100vh;
   width: 100vw;
   // max-width:400px;
   top: 0;
   left: 0;
   background: rgba(0,0,0,0.6);
   // transform: translate(-50%,-50%);
   z-index: 99999;
   
}
</style>
