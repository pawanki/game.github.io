<template>
    <div class="game-list">
        <div class="con-box p-b-20">
            <!-- <div class="c-row c-flew-end p-r-20" @click="goPage('/bettingrecordwin')">
                <div class="bettingMore c-tc c-row c-row-middle-center">{{$t('homepage.more')}}<van-icon name="arrow" color="#545E68" size="15" /></div>
            </div> -->
            <div class="list m-t-10">
                <div v-if="list.length>0">
                    <div class="hb" v-for="(item,index) in list" :key="index" :IssueNumber="item.IssueNumber" :AddTime="item.AddTime" :Colour="item.Colour" :Number="item.Number" :rowId="item.rowId">
                        <div class="item c-row" @click="Emerd(index)">
                            <div class="result">
                                <div class="select select-red" v-if="item.SelectType == 'red'"></div>
                                <div class="select select-red" v-if="item.SelectType == '2' 
                                     || item.SelectType == '4'
                                     || item.SelectType == '6'
                                     || item.SelectType == '8'">
                                     <span>{{item.SelectType}}</span>
                                </div>
                                <div class="select select-green" v-if="item.SelectType == 'green'"> 
                                </div>
                                <div class="select select-green" v-if="item.SelectType == '1' 
                                    || item.SelectType == '3' 
                                    || item.SelectType == '7' 
                                    || item.SelectType == '9' 
                                    "> 
                                     <span>{{item.SelectType}}</span>
                                </div>
                                <div class="select select-violet" v-if="item.SelectType == 'violet'">
                                </div>
                                <div class="select select-red-violet" v-if="item.SelectType == '0'">
                                     <span>{{item.SelectType}}</span>
                                </div>
                                <div class="select select-green-violet" v-if="item.SelectType == '5'">
                                     <span>{{item.SelectType}}</span>
                                </div>
                                <div class="select select-big" v-if="item.SelectType == 'big'">
                                    <van-image width="30px" height="30px" :src="require('@/assets/images/pic/big.png')"></van-image>
                                </div>
                                <div class="select select-small" v-if="item.SelectType == 'small'">
                                    <van-image width="30px" height="30px" :src="require('@/assets/images/pic/small.png')"></van-image>
                                </div>
                            </div>
                            <div class="c-row c-row-between info">
                                <div class="">
                                    <div class="issueName">
                                        {{item.IssueNumber}}
                                        <span class="state green" v-if="item.State == 1 ">{{$t('homepage.success')}}</span>
                                        <span class="state red" v-if="item.State == 0">{{$t('homepage.fail')}}</span>
                                    </div>
                                    <div class="tiem">{{item.AddTime}}</div>
                                </div>
                                <div class="money">
                                    <span class="success" v-if="item.State == 1 ">
                                        +	{{utils.numFilter(item.ProfitAmount)}}
                                    </span>
                                    <span class="fail" v-if="item.State == 0">
                                        -	{{utils.numFilter(item.ProfitAmount)}}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <!-- 详情 -->
                        <div class="details" v-if="index==showIndexRe">
                            <div class="tit">{{$t('homepage.index.periodDetail')}}</div>
                            <div class="li c-row c-row-between c-row-middle" v-if="item.OrderNumber">
                                <div>{{$t('homepage.index.orderNumber')}}</div>
                                <div class="tag-read c-row c-row-between c-row-middle" @click="copy()" :data-clipboard-text="item.OrderNumber">{{item.OrderNumber}}<img class="m-l-5" width="18px" height="15px" :src="require('@/assets/images/icon/copy.png')" /></div>
                            </div>
                            <div class="li c-row c-row-between c-row-middle">
                                <div>{{$t('homepage.index.period')}}</div>
                                <div>{{item.IssueNumber}}</div>
                            </div>
                            <div class="li c-row c-row-between c-row-middle">
                                <div>{{$t('homepage.index.contractMoney')}}</div>
                                <div>{{utils.numFilter(item.Amount)}}</div>
                            </div>
                            <div class="li c-row c-row-between c-row-middle">
                                <div>{{$t('homepage.index.contractCount')}}</div>
                                <div>{{item.BetCount}}</div>
                            </div>
                            <div class="li c-row c-row-between c-row-middle">
                                <div>{{$t('homepage.index.delivery')}}</div>
                                <div class="red">{{utils.numFilter(item.RealAmount)}}</div>
                            </div>
                            <div class="li c-row c-row-between c-row-middle">
                                <div>{{$t('homepage.index.fee')}}</div>
                                <div>{{utils.numFilter(item.Fee)}}</div>
                            </div>
                            <div class="li c-row c-row-between c-row-middle">
                                <div>{{$t('homepage.index.openPrice')}}</div>
                                <div>{{item.Premium}}</div>
                            </div>
                            <div class="li c-row c-row-between c-row-middle" v-if="item.Number">
                                <div>{{$t('homepage.index.result')}}</div>
                                <div>
                                    <div style="display:inline-block; margin-left:8px;">{{item.Number}}</div>
                                    <div style="display:inline-block; margin-left:8px;" v-if=" item.Number%2 == 0 ">{{$t('homepage.index.red')}}</div>
                                    <div style="display:inline-block; margin-left:8px;" v-if=" item.Number%2 == 1 ">{{$t('homepage.index.green')}}</div>
                                    <div style="display:inline-block; margin-left:8px;" v-if=" item.Number == 0 || item.Number == 5 ">{{$t('homepage.index.violet')}}</div>
                                    <div style="display:inline-block; margin-left:8px;" v-if="item.Number > 4">{{$t('homepage.index.big')}}</div>
                                    <div style="display:inline-block; margin-left:8px;" v-if="item.Number < 5">{{$t('homepage.index.small')}}</div>
                                </div>
                            </div>
                            <div class="li c-row c-row-between c-row-middle ">
                                <div>{{$t('homepage.index.Select')}}</div>
                                <div>
                                    <div v-if="item.SelectType == 'red'">{{item.SelectType}}</div>
                                    <div v-if="item.SelectType == 'green'">{{item.SelectType}}</div>
                                    <div v-if="item.SelectType == 'violet'"> {{item.SelectType}}</div>
                                    <div v-if="item.SelectType == 'small'"> {{$t('homepage.index.small')}}</div>
                                    <div v-if="item.SelectType == 'big'"> {{$t('homepage.index.big')}}</div>
                                    <div v-if="item.SelectType != 'big' &&item.SelectType != 'small' &&item.SelectType != 'violet' && item.SelectType != 'red' && item.SelectType != 'green'"> {{item.SelectType}}</div>
                                </div>
                            </div>
                            <div class="li c-row c-row-between c-row-middle">
                                <div>{{$t('homepage.index.status')}}</div>
                                <div class="green" v-if="item.State == 1 ">{{$t('homepage.success')}}</div>
                                <div class="red" v-if="item.State == 0">{{$t('homepage.fail')}}</div>
                            </div>
                            <div class="li c-row c-row-between c-row-middle">
                                <div>{{$t('homepage.index.amount')}}</div>
                                <div class="green" v-if="item.State == 1 ">
                                    +	{{utils.numFilter(item.ProfitAmount)}}
                                </div>
                                <div class="red" v-if="item.State == 0">
                                    -	{{utils.numFilter(item.ProfitAmount)}}
                                </div>
                            </div>
                            <div class="li c-row c-row-between c-row-middle">
                                <div>{{$t('homepage.index.createTime')}}</div>
                                <div>{{item.AddTime}}</div>
                            </div>
                        </div>
                    </div>
                    <!-- <u-loadmore :status="status" :loadText="i18n.loadText" :margin-top="40" :margin-bottom="40" font-size="32" /> -->
                </div>
                <div class="p-t-5 p-b-5" v-else>
                    <van-empty :description="$t('homepage.noData')"></van-empty>
                </div>
                <div class="list-fooder"></div>
            </div>
            <div class="page-nav c-row c-row-center c-tc" v-if="list.length>0">
                <div :class="page>1?'arr c-row c-row-middle-center action':'arr c-row c-row-middle-center'" @click="onLeft(page)">
                    <van-icon name="arrow-left" :class="page>1?'icon action':'icon'" size="20" />
                </div>
                <div class="number">{{page}}/{{total}}</div>
                <div :class="page<total?'arr c-row c-row-middle-center action':'arr c-row c-row-middle-center'" @click="onRight(page)">
                    <van-icon name="arrow" :class="page<total?'icon action':'icon'" size="20" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import loading from "../../plugins/loadingMixin"
    export default {
    	name: 'RankList',
        mixins: [loading],
    	data() {
    		return {
                showIndexRe: -1,//是否显示详情
            };
    	},
    	props: {
    		/* 列表 */
    		list: {
    			type: [Array, Object],
    			default: () => {
    				return [];
    			}
    		},
    		total:{
    			type: [String, Number],
    			default: 0
    		},
    		/* 宽度 */
    		page: {
    			type: [String, Number],
    			default: 1
    		},
    	},
    	methods: {
            // 点击查看详情
            Emerd(index){
            	let that = this;
            	if (that.showIndexRe == index) {
            		that.showIndexRe = -1;
            	} else {
            		that.showIndexRe = index;
            	}
            },
            onLeft(e){
            	let that = this;
            	that.$emit("onLeft",e);
            },
            onRight(e){
            	let that = this;
                
            	that.$emit("onRight",e);
            },
    		stopTouchMove(){
    			return true;
    		},
    		/* 添加点击事件 */
    		clickFn(e){
    			this.$emit('click',e);
    		},
    		/* 轮播切换改变 */
    		changeBanner(e){
    			let current = e.detail.current;
    			this.$emit('change',{
    				current,
    			})
    		}
    	},
    };
</script>

<style lang="scss" scoped="scoped">
    @import '@/plugins/css/winlist';
</style>
