<template>
    <div class="game-list">
        <div class="con-box p-b-20">
        	<!-- <div class="c-row c-flew-end p-r-20" @click="goPage('/bettingrecordland')">
        		<div class="bettingMore c-tc c-row c-row-middle-center">{{$t('homepage.more')}}<van-icon name="arrow" color="#545E68" size="15" /></div>
        	</div> -->
        	<div class="list m-t-10">
        		<div v-if="list.length>0">
        			<div class="hb">
        				<div v-for="(item,index) in list" :key="index" :IssueNumber="item.IssueNumber" :AddTime="item.AddTime" :Colour="item.Colour" :Number="item.Number" :rowId="item.rowId">
        					<div class="item c-row" @click="Emerd(index)">
        						<div class="c-row c-row-between c-row-middle info">
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
        						<div class="detailLi c-row c-row-between c-row-middle" v-if="item.OrderNumber">
        							<div>{{$t('homepage.index.orderNumber')}}</div>
        							<div class="tag-read c-row c-row-between c-row-middle" @click="copy()" :data-clipboard-text="item.OrderNumber">{{item.OrderNumber}}<img class="m-l-5" width="18px" height="15px" :src="require('@/assets/images/icon/copy.png')" /></div>
        						</div>
        						<div class="detailLi c-row c-row-between c-row-middle">
        							<div>{{$t('homepage.index.period')}}</div>
        							<div>{{item.IssueNumber}}</div>
        						</div>
        						<div class="detailLi c-row c-row-between c-row-middle">
        							<div>{{$t('homepage.index.contractMoney')}}</div>
        							<div>{{utils.numFilter(item.Amount)}}</div>
        						</div>
        						<div class="detailLi c-row c-row-between c-row-middle">
        							<div>{{$t('homepage.index.contractCount')}}</div>
        							<div>{{item.BetCount}}</div>
        						</div>
        						<div class="detailLi c-row c-row-between c-row-middle">
        							<div>{{$t('homepage.index.delivery')}}</div>
        							<div class="red">{{utils.numFilter(item.RealAmount)}}</div>
        						</div>
        						<div class="detailLi c-row c-row-between c-row-middle">
        							<div>{{$t('homepage.index.fee')}}</div>
        							<div>{{utils.numFilter(item.Fee)}}</div>
        						</div>
        						<!-- <div class="detailLi c-row c-row-between c-row-middle" v-if="item.Premium">
        							<div>{{$t('homepage.index.openPrice')}}</div>
        							<div class="goItem c-row c-row-between c-row-middle">
        								<div v-for="(li,index) in item.Premium" :key="index+'1'" :class="'li img'+li"></div>
        							</div>
        						</div> -->
        						<div class="detailLi c-row c-row-between c-row-middle" v-if="item.Premium">
        							<div>{{$t('homepage.index.result')}}</div>
        							<div class="goItem c-row c-row-between c-row-middle">
        								<div v-for="(li,index) in item.Premium" :key="index+'1'" :class="'li img'+li"></div>
        							</div>
        						</div>
        						<div class="detailLi">
        							<!--  {{item.SelectType}} -->
        							<div>{{$t('homepage.index.Select')}}</div>
        							<!-- 总赌注 -->
        							<div class="Bet-box pb" v-if="item.gameType==1">
        								<ul class="c-row c-flex-warp" v-if="item.oneList.length>0">
        									<span>{{$t('homepage.colorLand.tab1')}}：</span>
        									<li v-for="(li,index) in item.oneList" :key="index+'1'">
        										<span v-if="li=='H'">{{$t('homepage.index.big')}}</span>
        										<span v-else-if="li=='L'">{{$t('homepage.index.small')}}</span>
        										<span v-else-if="li=='O'">{{$t('homepage.index.odd')}}</span>
        										<span v-else-if="li=='E'">{{$t('homepage.index.even')}}</span>
        										<span v-else>{{li}}</span>
        									</li>
        								</ul>
        							</div>
        							<!-- 2个相同的数字 -->
        							<div class="Bet-box pb" v-if="item.gameType==2">
        								<ul class="c-row c-flex-warp" v-if="item.oneList.length>0">
        									<span class="">{{$t('homepage.colorLand.selectCon1')}}</span>
        									<li class="actionViolet" v-for="(li,index) in item.oneList" :key="index+'1'">{{li}}</li>
        								</ul>
        								<ul class="c-row c-flex-warp" v-if="item.towList.length>0">
        									<span class="">{{$t('homepage.colorLand.selectCon2')}}</span>
        									<li class="actionRedGreen" v-for="(li,index) in item.towList" :key="index+'1'">{{li}}</li>
        								</ul>
        							</div>
        							<div class="Bet-box pb" v-if="item.gameType==3">
        								<ul class="c-row c-flex-warp" v-if="item.oneList.length>0">
        									<span class="">{{$t('homepage.colorLand.selectCon3')}}</span>
        									<li class="actionViolet" v-for="(li,index) in item.oneList" :key="index+'1'">{{li}}</li>
        								</ul>
        								<div class="actionBtn" v-if="item.towList">{{$t('homepage.colorLand.title4')}}</div>
        							</div>
        							<!-- 不同的号码 -->
        							<div class="Bet-box pb" v-if="item.gameType==4">
        								<ul class="c-row c-flex-warp" v-if="item.oneList.length>0">
        									<span class="">{{$t('homepage.colorLand.selectCon4')}}</span>
        									<li class="actionViolet" v-for="(li,index) in item.oneList" :key="index+'1'">{{li}}</li>
        								</ul>
        								<div class="actionBtn" v-if="item.towList">{{$t('homepage.colorLand.title6')}}</div>
        								
        								<ul class="c-row c-flex-warp" v-if="item.threeList.length>0">
        									<span class="">{{$t('homepage.colorLand.selectCon5')}}</span>
        									<li class="actionViolet" v-for="(li,index) in item.threeList" :key="index+'1'">{{li}}</li>
        								</ul>
        							</div>
        						</div>
        						<div class="detailLi c-row c-row-between c-row-middle">
        							<div>{{$t('homepage.index.status')}}</div>
        							<div class="green" v-if="item.State == 1 ">{{$t('homepage.success')}}</div>
        							<div class="red" v-if="item.State == 0">{{$t('homepage.fail')}}</div>
        						</div>
        						<div class="detailLi c-row c-row-between c-row-middle">
        							<div>{{$t('homepage.index.amount')}}</div>
        							<div class="green" v-if="item.State == 1 ">
        								+	{{utils.numFilter(item.ProfitAmount)}}
        							</div>
        							<div class="red" v-if="item.State == 0">
        								-	{{utils.numFilter(item.ProfitAmount)}}
        							</div>
        						</div>
        						<div class="detailLi c-row c-row-between c-row-middle">
        							<div>{{$t('homepage.rechargeChack.orderNumber')}}</div>
        							<div class="c-row c-row-middle-center">{{item.OrderNumber}}<van-image class="m-l-5 tag-read" @click="copy()" :data-clipboard-text="item.OrderNumber" width="18px" height="15px" :src="require('@/assets/images/icon/copy.png')" /></div>
        						</div>
        						<div class="detailLi c-row c-row-between c-row-middle">
        							<div>{{$t('homepage.index.createTime')}}</div>
        							<div>{{item.AddTime}}</div>
        						</div>
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
            onLeft(e){
            	let that = this;
            	that.$emit("onLeft",e);
            },
            onRight(e){
            	let that = this;
            	that.$emit("onRight",e);
            },
            // 点击查看详情
            Emerd(index){
            	let that = this;
            	if (that.showIndexRe == index) {
            		that.showIndexRe = -1;
            	} else {
            		that.showIndexRe = index;
            	}
            },
    	},
    };
</script>

<style lang="scss" scoped="scoped">
    @import '@/plugins/css/k3list';
</style>
