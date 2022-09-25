<template>
	<input 
	    class="pw-input"
	    :placeholder="placeholder"
	    ref="input"
	    @input="onInput"
	    @compositionstart="onCompositionStart"
		οnkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
	    @compositionend="onCompositionEnd"/>
</template>

<!-- //自定义密码输入框(不支持ie)
//BUG Ctrl + z 无效，可以输入中文 -->
<script>
export default { 
    name: 'PwInput',
    props:{
        value:{
            type:String,
            default:"",
        },
        symbol:{  //需要转换的特殊符号
            type:String,
            default:'✘',
        },
        placeholder:{
            type:String,
            default:'',
        },
    },
    data(){
        return{
            password:"", //密码明文数据
            inputEl:undefined, //input元素
            isComposing:false, //输入框是否还在输入（记录输入框输入的是虚拟文本还是已确定文本）
        };
    },
    watch:{
        value:{
            handler(value){
                this.password = value;
            },
            immediate:true,
        },
        password:{
            handler(value){
                if(!this.inputEl){
                    this.$nextTick(()=>{
                        this.valueConver(value);
                    });
                }
                this.$emit("input",this.password);
            },
            immediate:true,
        },
    },
    mounted(){
        this.inputEl = this.$refs.input;
    },
    methods:{
        valueConver(value){ //输入框里的数据转换，将123转为特殊符号
            if (!value){
                this.inputEl.value = "";
                return;
            }
            let data = "";
            for(let i=0;i<value.length;i++){
                data+=this.symbol;
            }
            this.inputEl.value = data;
        },
        valueRecover(positionIndex,value){  //恢复数据
            let _password = value.split(this.symbol).join("");
            if(_password){
                let index = this.password.length - (value.length - positionIndex.end);
                this.password = this.password.slice(0,positionIndex.end-_password.length) + _password + this.password.slice(index);
            }else{
                this.password = this.password.slice(0,positionIndex.end) + this.password.slice(positionIndex.end+this.password.length - value.length);
            }
        },
        onInput(e){ //输入值变化后执行
            if (this.isComposing) return;  //撰写期间不应发出输入
            let positionIndex = this.getIndex();
            let value = e.target.value; //整个输入框的值
            this.valueRecover(positionIndex,value);
            this.valueConver(value);
            this.setIndex(positionIndex);
        },
        onCompositionStart() {
            this.isComposing = true;
        },
        onCompositionEnd(e) {
            if (!this.isComposing) return;
            this.isComposing = false;
            this.onInput(e);
        },
        getIndex(){  //获取光标位置
            if(!this.inputEl) return;
            var rangeData = { start: 0, end: 0 };
            rangeData.start = this.inputEl.selectionStart;
            rangeData.end = this.inputEl.selectionEnd;
            return rangeData;
        },
        setIndex(rangeData){
            if(!this.inputEl) return;
            this.inputEl.setSelectionRange(rangeData.start, rangeData.end);
        },
    },
}
</script>

<style scoped lang="scss">
.pw-input{
    width: 100%;
    height: 100%;
}
</style>