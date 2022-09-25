<template>
	<div :class="longShow?'home mian game action baseBackground':'home mian game baseBackground'">
		<Header :is-back="false">
			<div slot="left" class="c-row c-row-middle-center" v-if="globalConfig.clientCfg.LanguageList.length>1&&globalConfig.clientCfg.LanguageList.length>1">
				<img class="languageImg" height="30px" width="40px" :src="selectLanguageImg[languagIndex].nationalFlags" @click="SelectLang" />
			</div>
			<div class="c-row c-row-middle-center">
				<img class="logo" height="38px" width="100px" :src="globalConfig.clientCfg.HeadLogo" />
			</div>
			<div slot="right" class="c-row c-row-middle-center" @click="onSend" v-if="webSite.AndroidUrl||webSite.IOSUrl">
				<a :href="Url" class="c-row c-row-middle-center">
					<img class="down" height="25px" width="25px" :src="require('../assets/images/icon/down.png')"/>
					<!-- <van-icon name="down" color="#fff" size="25px" /> -->
				</a>
			</div>
		</Header>
		<!--轮播图-->
		<div class="banner">
			<van-swipe :autoplay="3000" indicator-color="#f2413b" >
				<van-swipe-item v-for="(image, index) in banner" :key="index" @click="send(image.Url)">
					<img class="img" :src="image.BannerUrl" />
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="notice" v-if="sitemsg">
            <div class="notice-box c-row c-row-between">
                <van-notice-bar left-icon="volume-o" :text="sitemsg" :style="{fontSize:'15px'}" />
                <div class="txt" @click="goPage('/noticeList')">
                    <span class="sp"><img class="img" :src="require('@/assets/images/pay/notice-right.svg')" />{{ $t('homepage.newes') }}</span>
                </div>
            </div>
		</div>
		<!-- 首页内容 -->
		<div class="home-com">
			<!-- <div class="btn-list m-b-20 c-row c-row-between">
				<div class="item c-row c-row-middle-center recharge" @click="goPage('/recharge')">
					<img class="img" :src="require('../assets/images/icon/icon_recharge.png')" />
					{{ $t('homepage.home.recharge') }}
				</div>
				<div class="item c-row c-row-middle-center service" @click="goPage('/keFuMenu')">
					<img class="img" :src="require('../assets/images/icon/icon_Customersevice.png')" />
					{{ $t('homepage.home.customerService') }}
				</div>
			</div> -->
			<van-tabs v-model="active" :class="gameList.length>1?'home-tab action':'home-tab' " >
				<van-tab class="c-row-between" v-for="(item,index) in gameList" :key="index">
					<template #title>
						 <div> 
							<img class="img" :src="item.img" />
							<!-- <div class="name c-tc van-ellipsis">{{item.name}}</div> -->
						 </div>
					</template>
					<!-- 游戏列表 -->
					<div class="gameList m-t-20">
						<div class="item m-b-20" @click="goPage('/win')" v-if="isopenlotter.IsWinGo&&item.type==1">
							<div class="info i3">
								<div class="name"> {{ $t('homepage.home.Game2') }} </div>
								<div class="des"> {{ $t('homepage.home.Game2Tip') }} </div>
								<img width="120px" height="85px" class="img m-r-5" :src="require('../assets/images/pic/logo-wingo.png')" />
							</div>
							<div class="userList" v-if="wlist.length>0">
								<GameList :list="wlist" :type="2" :vertical="true" :loop="true"></GameList>
							</div>
						</div>
						<div class="item m-b-20" @click="goPage('/liveWin')" v-if="isopenlotter.IsLiveWingo&&item.type==1">
							<div class="info i13">
								<div class="name"> Live {{ $t('homepage.home.Game2') }} </div>
								<div class="des"> {{ $t('homepage.home.Game2Tip') }} </div>
								<img width="120px" height="85px" class="img m-r-5" :src="require('../assets/images/pic/logo-wingo.png')" />
							</div>
							<div class="userList" v-if="livewlist.length>0">
								<GameList :list="livewlist" :type="2" :vertical="true" :loop="true"></GameList>
							</div>
						</div>
                       <div class="item m-b-20" @click="goPage('/winTrx')" v-if="isopenlotter.IsTrxWingo&&item.type==1">
                        	<div class="info i7">
                        		<div class="name"> Trx Hash </div>
                        		<div class="des"> {{ $t('homepage.home.Game2Tip') }} </div>
                        		<img width="120px" height="85px" class="img m-r-5" :src="require('../assets/images/pic/logo-wingo.png')" />
                        	</div>
                        	<div class="userList" v-if="trxwigolist.length>0">
                        		<GameList :list="trxwigolist" :type="2" :vertical="true" :loop="true"></GameList>
                        	</div>
                        </div>
						<div class="item m-b-20" @click="goPage('/game/lottery')" v-if="isopenlotter.IsS16Game&&item.type==1">
							<div class="info i10">
								<div class="name"> {{ $t('homepage.home.Game7') }} </div>
								<div class="des"> {{ $t('homepage.home.Game7Tip') }} </div>
								<img width="120px" height="85px" class="img m-r-5" :src="require('../assets/images/pic/logo-16lottery.png')" />
							</div>
							<div class="userList" v-if="s16list.length>0">
								<GameList :list="s16list" :type="2" :vertical="true" :loop="true"></GameList>
							</div>
						</div>
						<div class="item m-b-20" @click="goPage('/nation')" v-if="isopenlotter.IsC16Game&&item.type==1">
							<div class="info i11">
								<div class="name"> {{ $t('homepage.home.Game8') }} </div>
								<div class="des"> {{ $t('homepage.home.Game8Tip') }} </div>
								<img width="120px" height="85px" class="img m-r-5" :src="require('../assets/images/pic/logo-Nation.png')" />
							</div>
							<div class="userList" v-if="c16list.length>0">
								<GameList :list="c16list" :type="2" :vertical="true" :loop="true"></GameList>
							</div>
						</div>
						<div class="item m-b-20" @click="goPage('/vietnam')" v-if="isopenlotter.IsVietnam&&item.type==1">
							<div class="info i9">
								<div class="name"> Vietnam lottery </div>
								<div class="des"> {{ $t('homepage.home.Game10Tip') }} </div>
								<img width="120px" height="85px" class="img m-r-5" :src="require('../assets/images/pic/logo-Vlottery.png')" />
							</div>
							<div class="userList" v-if="vnmodellist.length>0">
								<GameList :list="vnmodellist" :type="2" :vertical="true" :loop="true"></GameList>
							</div>
						</div>
						<div class="item m-b-20" @click="goPage('/5D')" v-if="isopenlotter.Is5d&&item.type==1">
							<div class="info i2">
								<div class="name"> {{ $t('homepage.home.Game1') }} </div>
								<div class="des"> {{ $t('homepage.home.Game1Tip') }} </div>
								<img width="120px" height="85px" class="img m-r-5" :src="require('../assets/images/pic/logo-lottery.png')" />
							</div>
							<div class="userList" v-if="new5dwlist.length>0">
								<GameList :list="new5dwlist" :type="1" :vertical="true" :loop="true"></GameList>
							</div>
						</div>
						<div class="item m-b-20" @click="goPage('/colorLand')" v-if="isopenlotter.IsK3&&item.type==1">
							<div class="info i4">
								<div class="name">{{ $t('homepage.home.Game4') }}</div>
								<div class="des"> {{ $t('homepage.home.Game4Tip') }} </div>
								<img width="120px" height="85px" class="img m-r-5" :src="require('../assets/images/pic/logo-k333.png')" />
							</div>
							<div class="userList" v-if="k3list.length>0">
								<GameList :list="k3list" :type="4" :vertical="true" :loop="true"></GameList>
							</div>
						</div>
						<!-- <div class="item m-b-20" @click="goPage('/lottery/win')" v-if="isopenlotter.IsK3&&item.type==1">
							<div class="info i4">
								<div class="name"> 越南官方彩 </div>
								<div class="des"> {{ $t('homepage.home.Game4Tip') }} </div>
								<img width="120px" height="85px" class="img m-r-5" :src="require('../assets/images/pic/logo-k333.png')" />
							</div>
							<div class="userList" v-if="k3list.length>0">
								<GameList :list="k3list" :type="4" :vertical="true" :loop="true"></GameList>
							</div>
						</div> -->
						<div class="item yu m-b-20 p-b-20" @click="goPage('/slotsList',{type:11})" v-if="isopenlotter.IsagFish&&item.type==2">
							<div class="info">
								<div class="name"> {{ $t('homepage.home.GameName') }} </div>
								<img width="120px" height="85px" class="img m-r-5" :src="require('../assets/images/pic/logo-yu.png')" />
							</div>
						</div>
						
						<div class="item m-b-20" @click="goPage('/4D')" v-if="isopenlotter.IsSWZG4d&&item.type==3">
							<div class="info i8">
								<div class="name"> {{ $t('homepage.home.Game9') }} </div>
								<div class="des"> {{ $t('homepage.home.Game9Tip') }} </div>
								<img width="120px" height="85px" class="img m-r-5" :src="require('../assets/images/pic/logo-4Dlottery.png')" />
							</div>
							<div class="userList" v-if="swzlist.length>0">
								<GameList :list="swzlist" :type="2" :vertical="true" :loop="true"></GameList>
							</div>
						</div>
						<div class="item m-b-20" @click="goPage('/4DW')" v-if="isopenlotter.IsSWZG4d&&item.type==3">
							<div class="info i8">
								<div class="name"> 万能万字 </div>
								<div class="des"> {{ $t('homepage.home.Game9Tip') }} </div>
								<img width="120px" height="85px" class="img m-r-5" :src="require('../assets/images/pic/logo-w4Dlottery.png')" />
							</div>
							<div class="userList" v-if="swzlist.length>0">
								<GameList :list="swzlist" :type="2" :vertical="true" :loop="true"></GameList>
							</div>
						</div>
						<div class="item m-b-20" @click="goPage('/4DW2')" v-if="isopenlotter.IsSWZG4d&&item.type==3">
							<div class="info i8">
								<div class="name"> 大马万字 </div>
								<div class="des"> {{ $t('homepage.home.Game9Tip') }} </div>
								<img width="120px" height="85px" class="img m-r-5" :src="require('../assets/images/pic/logo-w4Dlottery.png')" />
							</div>
							<div class="userList" v-if="swzlist.length>0">
								<GameList :list="swzlist" :type="2" :vertical="true" :loop="true"></GameList>
							</div>
						</div>
						
						<div class="item m-b-20" @click="goPage('/4DW3')" v-if="isopenlotter.IsSWZG4d&&item.type==3">
							<div class="info i8">
								<div class="name"> 多多万字 </div>
								<div class="des"> {{ $t('homepage.home.Game9Tip') }} </div>
								<img width="120px" height="85px" class="img m-r-5" :src="require('../assets/images/pic/logo-w4Dlottery.png')" />
							</div>
							<div class="userList" v-if="swzlist.length>0">
								<GameList :list="swzlist" :type="2" :vertical="true" :loop="true"></GameList>
							</div>
						</div>
						
						<div class="item m-b-20" @click="goPage('/4Djs')" v-if="isopenlotter.IsSWZG4d&&item.type==3">
							<div class="info i8">
								<div class="name"> 极速万字 </div>
								<div class="des"> {{ $t('homepage.home.Game9Tip') }} </div>
								<img width="120px" height="85px" class="img m-r-5" :src="require('../assets/images/pic/logo-w4Dlottery.png')" />
							</div>
							<div class="userList" v-if="swzlist.length>0">
								<GameList :list="swzlist" :type="2" :vertical="true" :loop="true"></GameList>
							</div>
						</div>
						
						<!-- <div class="item m-b-20" @click="goPage('/slots')" v-if="isopenlotter.IsSlots&&item.type==2">
							<div class="info i14">
								<div class="name"> AG {{ $t('homepage.home.Game3') }} </div>
								<div class="des"> {{ $t('homepage.home.Game3Tip') }} </div>
								<img width="150px" height="85px" class="img imgslot m-r-5" :src="require('../assets/images/pic/logo-agslot.png')" />
							</div>
							<div class="userList" v-if="slotslist.length>0">
								<GameList :list="slotslist" :type="3" :vertical="true" :loop="true"></GameList>
							</div>
						</div> -->
						
						<div class="item m-b-20" @click="goPage('/slots')" v-if="isopenlotter.IsSlots&&item.type==4">
							<div class="info i1">
								<div class="name"> {{ $t('homepage.home.Game3') }} </div>
								<div class="des"> {{ $t('homepage.home.Game3Tip') }} </div>
								<img width="150px" height="85px" class="img imgslot m-r-5" :src="require('../assets/images/pic/logo-slot.png')" />
							</div>
							<div class="userList" v-if="slotslist.length>0">
								<GameList :list="slotslist" :type="3" :vertical="true" :loop="true"></GameList>
							</div>
						</div>
						
						<div class="item m-b-20" @click="goPage('/casino')" v-if="isopenlotter.IsRealperson&&item.type==5">
							<div class="info i5">
								<div class="name">DG {{ $t('homepage.home.Game5') }}</div>
								<div class="des"> {{ $t('homepage.home.Game5Tip') }} </div>
								<img width="150px" height="85px" class="img imglive m-r-5" :src="require('../assets/images/pic/logo-LiveCasino.svg')" />
							</div>
							<div class="userList" v-if="realpersonloglist.length>0">
								<GameList :list="realpersonloglist" :type="5" :vertical="true" :loop="true"></GameList>
							</div>
						</div>
						<div class="item m-b-20" @click="goPage('/casinoAg')" v-if="isopenlotter.IsAgRealperson&&item.type==5">
							<div class="info i12">
								<div class="name">AG {{ $t('homepage.home.Game5') }}</div>
								<div class="des"> {{ $t('homepage.home.Game5Tip') }} </div>
								<img width="150px" height="85px" class="img imglive m-r-5" :src="require('../assets/images/pic/logo-LiveagCasino.png')" />
							</div>
							<div class="userList" v-if="realpersonloglist.length>0">
								<GameList :list="realpersonloglist" :type="5" :vertical="true" :loop="true"></GameList>
							</div>
						</div>
						<div class="item m-b-20" @click="goPage('/sport')" v-if="isopenlotter.IsSport&&item.type==6">
							<div class="info i6">
								<div class="name">CMD {{ $t('homepage.home.Game6') }} </div>
								<div class="des"> {{ $t('homepage.home.Game6Tip') }} </div>
								<img width="120px" height="85px" class="img imgsport m-r-5" :src="require('../assets/images/pic/logo-sport.svg')" />
							</div>
							<div class="userList" v-if="sportloglist.length>0">
								<GameList :list="sportloglist" :type="6" :vertical="true" :loop="true"></GameList>
							</div>
						</div>
						<div class="item m-b-20" @click="goPage('/sportAg')" v-if="isopenlotter.IsAgSport&&item.type==6">
							<div class="info i15">
								<div class="name">AG {{ $t('homepage.home.Game6') }} </div>
								<div class="des"> {{ $t('homepage.home.Game6Tip') }} </div>
								<img width="120px" height="85px" class="img imgsport m-r-5" :src="require('../assets/images/pic/logo-sport1.png')" />
							</div>
							<div class="userList" v-if="sportloglist.length>0">
								<GameList :list="sportloglist" :type="6" :vertical="true" :loop="true"></GameList>
							</div>
						</div>
					</div>
				</van-tab>
			</van-tabs>
		</div>
		<!--  今天的排行榜  -->
		<div class="rank-box new-box" v-if="newlist.length>0">
			<div class="rank-tit">
				{{ $t('homepage.home.newTitle') }}
			</div>
			<div class="new-List">
				<div class="tit c-row c-flew-end" @click="goPage('/newList')">
					<span class="c-row c-row-middle">{{$t('homepage.more')}}<van-icon name="arrow" color="#545E68" size="15" /></span>
				</div>
				<div class="item c-row c-row-between" v-for="(item,index) in newlist" :key="index" @click="goPage('/newdes',{'newid':item.NewsID})">
					<div class="c-row c-row-between c-row-middle">
						<span class="li">{{index+1}}</span>
						<div class="name van-ellipsis">{{item.NewsTitle}}</div>
					</div>
					
					<span class="time">{{item.AddTime}}</span>
				</div>
			</div>
		</div>		
		<!--  -->
		<div class="bonus-box">
			<van-image class="img" width="100%" height="170px" :src="require('../assets/images/pic/coin-bonus.png')"/>
			<div class="bonus-bg">
				<div class="inner">
					<span v-if="!utils.isYueNanCurrencySymbol()">{{utils.getCurrencySymbol()}} {{utils.numFilter(webSite.TotalMoney||0)}}</span>
					<span v-if="utils.isYueNanCurrencySymbol()"> {{utils.numFilter(webSite.TotalMoney||0)}} {{utils.getCurrencySymbol()}}</span>
				</div>
			</div>
		</div>
		<!-- 网站运行时间 -->
		<div class="running-time">
			<!-- {{minutesTimes}} -->
			<p class="running-title c-tc"> {{$t('homepage.home.wrTime')}} </p>
			<div class="c-row c-row-between" style="padding: 0px 33px 30px;">
				<div class="flip-num">
					<div class="top" v-if="daysTime>0">{{daysTime}}</div>
					<div class="top" v-else>00</div>
					<div class="bottom">{{$t('homepage.home.days')}} </div>
					<div :class="timeChck&&hoursTime==24?'bottom-card flipX':'bottom-card'">
						<div class="back">
							<p>{{daysTime}}</p>
						</div>
						<div class="front c-tc"> {{$t('homepage.home.days')}} </div>
					</div>
				</div>
				<div class="flip-num">
					<div class="top" v-if="hoursTime<24">{{hoursTime<10?'0'+hoursTime:hoursTime}}</div>
					<div class="top" v-else>00</div>
					<div class="bottom">{{$t('homepage.home.hours')}}</div>
					<div :class="timeChck&&minutesTimes==59&&secondsTimes==59?'bottom-card flipX':'bottom-card'">
						<div class="back">
							<p class="c-tc" v-if="hoursTime<23">{{hoursTime<9?'0'+(hoursTime+1):hoursTime+1}}</p>
							<p class="c-tc" v-else>00</p>
						</div>
						<div class="front c-tc"> {{$t('homepage.home.hours')}} </div>
					</div>
				</div>
				<div class="flip-num">
					<div class="top">{{minutesTime<10?'0'+minutesTime:minutesTime}}</div>
					<div class="bottom c-tc"> {{$t('homepage.home.minutes')}} </div>
					<div :class="timeChck&&secondsTimes==59?'bottom-card flipX':'bottom-card'">
						<div class="back">
							<p class="c-tc" v-if="minutesTime<59">{{minutesTime<9?'0'+(minutesTime+1):minutesTime+1}}</p>
							<p class="c-tc" v-else>00</p>
						</div>
						<div class="front c-tc"> {{$t('homepage.home.minutes')}} </div>
					</div>
				</div>
				<div class="flip-num">
					<div class="top">{{secondsTimes<10?'0'+secondsTimes:secondsTimes}}</div>
					<div class="bottom c-tc"> {{$t('homepage.home.seconds')}}</div>
					<div :class="timeChck?'bottom-card flipX':'bottom-card'">
						<div class="back c-tc">
							<p class="c-tc" v-if="secondsTimes<59">{{secondsTimes<9?'0'+(secondsTimes+1):secondsTimes+1}}</p>
							<p class="c-tc" v-else>00</p>
						</div>
						<div class="front c-tc">{{ $t('homepage.home.seconds') }}</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 数据 -->
		<div class="web-info c-row c-row-between">
			<div class="item c-tc">
				<div class="c-row c-row-cetner">
					<van-image class="img" height="40px" width="40px" :src="require('../assets/images/icon/icon_user.png')" />
				</div>
				<div class="num">{{webSite.TotalPeople||0}}</div>
				<div class="txt"> {{ $t('homepage.home.pengguna') }} </div>
			</div>
			<div class="item c-tc">
				<div class="c-row c-row-cetner">
					<van-image class="img" height="40px" width="40px" :src="require('../assets/images/icon/icon_BetAmount.png')" />
				</div>
				<div class="num">{{webSite.TotalMoney||0}}</div>
				<div class="txt"> {{ $t('homepage.home.jumlahTaruhan') }} </div>
			</div>
			<div class="item c-tc">
				<div class="c-row c-row-cetner">
					<van-image class="img" height="40px" width="40px" :src="require('../assets/images/icon/icon_online.png')" />
				</div>
				<div class="num">{{webSite.OnlinePeople||0}}</div>
				<div class="txt"> {{ $t('homepage.home.Online') }} </div>
			</div>
		</div>
		<!--  今天的排行榜  -->
		<div class="rank-box" v-if="rankList.length>0">
			<div class="rank-tit">
				{{ $t('homepage.home.penarikanHari') }}
			</div>
			<!-- <div class="tit c-row c-flew-end m-b-5" @click="goPage('/rankList')">
				<span class="c-row c-row-middle">{{$t('homepage.more')}}<van-icon name="arrow" color="#545E68" size="15" /></span>
			</div> -->
			<RankList :list="rankList" :vertical="true" :loop="true"></RankList>
			<!-- <div class="btn" @click="goPage('/rankList')">查看更多</div> -->
		</div>
		
		<!--  怎样购买？  -->
		<div class="home-how">
			<div class="info">
				<div class="tit"> {{ $t('homepage.home.howWorks') }} </div>
				<div class="tab c-row c-flex-warp c-row-between">
					<div :class="current==0?'item c-row c-row-between action c-row-middle':'item c-row c-row-between c-row-middle'" @click="How(0)">
						<div class="">
							<div class="step"> {{ $t('homepage.home.game_First') }} </div>
							<div class="name" :color="current==0?'#e45d61':'#000'"> {{ $t('homepage.home.game_title1') }} </div>
						</div>
						<div>
							<van-image width="35px" height="35px" v-if="current==0" :src="require('../assets/images/icon/work_first_hong.png')" />
							<van-image width="35px" height="35px" v-else :src="require('../assets/images/icon/work_first_hui.png')" />
						</div>
					</div>
					<div :class="current==1?'item c-row c-row-between action c-row-middle':'item c-row c-row-between c-row-middle'" @click="How(1)">
						<div class="">
							<div class="step"> {{ $t('homepage.home.game_Second') }} </div>
							<div class="name" :color="current==1?'#e45d61':'#000'"> {{ $t('homepage.home.game_title2') }} </div>
						</div>
						<div>
							<van-image width="35px" height="35px" v-if="current==1" :src="require('../assets/images/icon/work_second_hong.png')" />
							<van-image width="35px" height="35px" v-else :src="require('../assets/images/icon/work_second_hui.png')" />
						</div>
					</div>
					<div :class="current==2?'item c-row c-row-between action c-row-middle':'item c-row c-row-between c-row-middle'" @click="How(2)">
						<div class="">
							<div class="step"> {{ $t('homepage.home.game_Third') }} </div>
							<div class="name" :color="current==2?'#e45d61':'#000'"> {{ $t('homepage.home.game_title3') }} </div>
						</div>
						<div>
							<van-image width="35px" height="35px" v-if="current==2" :src="require('../assets/images/icon/work_third_hong.png')" />
							<van-image width="35px" height="35px" v-else :src="require('../assets/images/icon/work_third_hui.png')" />
						</div>
					</div>
					<div :class="current==3?'item c-row c-row-between action c-row-middle':'item c-row c-row-between c-row-middle'" @click="How(3)">
						<div class="">
							<div class="step"> {{ $t('homepage.home.game_Fourth') }} </div>
							<div class="name" :color="current==3?'#e45d61':'#000'"> {{ $t('homepage.home.game_title4') }} </div>
						</div>
						<div>
							<van-image width="35px" height="35px" v-if="current==3" :src="require('../assets/images/icon/work_fourth_hong.png')" />
							<van-image width="35px" height="35px" v-else :src="require('../assets/images/icon/work_fourth_hui.png')" />
						</div>
					</div>
				</div>
			</div>
			<div class="how-list m-t-20">
				<van-swipe class="swipe" @change="onChange" :initial-swipe="current" :touchable="false" :show-indicators="false">
					<van-swipe-item v-for="(item,index) in $t('homepage.home.list')" :key="index">
						<div class="c-tc m-b-15 van-ellipsis">{{item.title}}</div>
						<div class="van-multi-ellipsis--l2">{{item.txt}}</div>
					</van-swipe-item>
				</van-swipe>
				<div class="arrow">
					<div class="item left" @click="arrowLeft">
						<div class="arr c-row c-row-middle-center action">
							<van-icon name="arrow-left" color="#fb4e4e" size="20" />
						</div>
					</div>
					<div class="item right" @click="arrowRight">
						<div class="arr c-row c-row-middle-center action">
							<van-icon name="arrow" color="#fb4e4e" size="20" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 多语言 -->
		<van-popup v-model="show" position="bottom" :style="{ borderRadius: '15px 15px 0 0',padding:'5px 0 0', maxWidth:'10rem',left:'auto'}">
			<div class="language-box" v-for="(item,index) in selectLanguageImg" :key="index" v-if="item.used" @click="language(item.languageType,index)">
				<div class="item c-row c-row-between c-row-middle">
					<div class="left c-row c-row-middle">
						<van-image class="img" width="50px" height="35px" :src="item.nationalFlags"></van-image>
						<div class="size">{{item.languageText}}</div>
						<!-- <van-image class="img p-l-10" width="150px" height="20px" :src="item.languageName"></van-image> -->
					</div>
					<div class="right">
						<div :class="index==languagIndex?'action chek':'chek'"><van-icon name="success" color="#fff" size="16" /></div>
					</div>
				</div>
			</div>
		</van-popup>
		
		<!-- 长龙 -->
		<transition>
		    <div :class="full?'moveBox action':'moveBox' " id="moveBox" v-show="longShow">
				<div class="moveHead c-row c-row-between c-row-middle" @mousedown="mousedown" @touchstart="mousedown" @mousemove="mousemove" @touchmove="mousemove" @mouseup="mouseup" @touchend="mouseup">
				  <div class="close" @click="closeLong"> {{ $t('homepage.close') }} </div>
				  <div @click="fullLong">
					  <span v-if="full">{{ $t('homepage.zoomOut') }}</span>
					  <span v-else>{{ $t('homepage.full') }}</span>
				  </div>
				</div>
				<div :class="full?'long action':'long'">
		<!-- <van-popup v-model="longShow" position="center" :style="{ borderRadius: '15px 15px 0 0',padding:'5px 0 0',width:'90%',  minHeight:'300px', maxHeight:'300px',}" > -->
					<van-tabs v-model="longActive" line-width="50%" @click="onClick">
						<van-tab :title="$t('homepage.long.newTitle')">
							<div class="longlist">
								<!-- {{currentInfo}} -->
								<div class="item c-row c-row-between c-row-middle" v-for="(item,index) in longList">
									<div>
										<div class="c-row c-row-middle">
											<div class="logo c-row c-row-middle" v-if="item.Type==1||item.Type==2||item.Type==3||item.Type==4">
												<img class="img" :src="require('@/assets/images/pic/logo-wingo.png')" />
											</div>
											<div class="logo c-row c-row-middle" v-if="item.Type==5||item.Type==6||item.Type==7||item.Type==8">
												<img class="img" :src="require('@/assets/images/pic/logo-lottery.png')" />
											</div>
											<div class="logo c-row c-row-middle" v-if="item.Type==9||item.Type==10||item.Type==11||item.Type==12">
												<img class="img" :src="require('@/assets/images/pic/logo-k333.png')" />
											</div>
											<div class="p-l-10">{{item.lotteryName}}</div>
										</div>
										<div class="c-row">{{item.IssueNumber}} 
										<span class="time p-l-10"><span v-if="currentInfo[index]">{{ currentInfo[index].time1||0 }}</span><span v-if="currentInfo[index]">{{ currentInfo[index].time2 }}</span>:<span v-if="currentInfo[index]">{{ currentInfo[index].time3 }}</span><span v-if="currentInfo[index]">{{ currentInfo[index].time4 }}</span>
										</span>
										</div>
										<div class="bottom m-t-5 c-row">
											<span class="tag num">{{item.Remark}}</span>
											<span :class="'tag odd bg-'+item.GameResult">{{item.GameResult}}</span>
										</div>
										<div class="bottom m-t-5 c-row"><span class="tag issue">{{item.Issue}} {{$t('homepage.long.expect')}}</span></div>
									</div>
									<div class="c-row" v-if="item.GameType==0&&currentInfo[index]">
										<button :class="actionItem.action==1&&item.Type==actionItem.Type&&item.Remark==actionItem.Remark&&currentInfo[index].passTime > ProhibitBuyTime?'btn action van-ellipsis':'btn van-ellipsis'" @click="bet(item,index,1,$t('homepage.index.big'),'big')" :disabled="currentInfo[index].passTime < ProhibitBuyTime?true:false"> {{$t('homepage.index.big')}} </button>
										<button :class="actionItem.action==2&&item.Type==actionItem.Type&&item.Remark==actionItem.Remark&&currentInfo[index].passTime > ProhibitBuyTime?'btn action van-ellipsis':'btn van-ellipsis'" @click="bet(item,index,2,$t('homepage.index.small'),'small')" :disabled="currentInfo[index].passTime < ProhibitBuyTime?true:false"> {{$t('homepage.index.small')}} </button>
									</div>
									<div class="" v-if="item.GameType==1&&currentInfo[index]">
										<div class="c-row">
											<button :class="actionItem.action==1&&item.Type==actionItem.Type&&item.Remark==actionItem.Remark&&currentInfo[index].passTime > ProhibitBuyTime?'btn action van-ellipsis':'btn van-ellipsis '" @click="bet(item,index,1,$t('homepage.index.red'),'red')" :disabled="currentInfo[index].passTime < ProhibitBuyTime?true:false"> {{$t('homepage.index.red')}} </button>
											<button :class="actionItem.action==2&&item.Type==actionItem.Type&&item.Remark==actionItem.Remark&&currentInfo[index].passTime > ProhibitBuyTime?'btn action van-ellipsis':'btn van-ellipsis'" @click="bet(item,index,2,$t('homepage.index.green'),'green')" :disabled="currentInfo[index].passTime < ProhibitBuyTime?true:false"> {{$t('homepage.index.green')}} </button>
										</div>
										<div class="c-row c-row-middle-center m-t-5">
											<button :class="actionItem.action==3&&item.Type==actionItem.Type&&item.Remark==actionItem.Remark&&currentInfo[index].passTime > ProhibitBuyTime?'btn action van-ellipsis':'btn van-ellipsis'" @click="bet(item,index,3,$t('homepage.index.violet'),'violet')" :disabled="currentInfo[index].passTime < ProhibitBuyTime?true:false"> {{$t('homepage.index.violet')}} </button>
										</div>
									</div>
									<div class="c-row" v-if="item.GameType==2&&currentInfo[index]">
										<button :class="actionItem.action==1&&item.Type==actionItem.Type&&item.Remark==actionItem.Remark&&currentInfo[index].passTime > ProhibitBuyTime?'btn action van-ellipsis':'btn van-ellipsis'" @click="bet(item,index,1,$t('homepage.index.odd'),'O')" :disabled="currentInfo[index].passTime < ProhibitBuyTime?true:false"> {{$t('homepage.index.odd')}} </button>
										<button :class="actionItem.action==2&&item.Type==actionItem.Type&&item.Remark==actionItem.Remark&&currentInfo[index].passTime > ProhibitBuyTime?'btn action van-ellipsis':'btn van-ellipsis'" @click="bet(item,index,2,$t('homepage.index.even'),'E')" :disabled="currentInfo[index].passTime < ProhibitBuyTime?true:false"> {{$t('homepage.index.even')}} </button>
									</div>
									<div class="c-row" v-if="item.GameType==3&&currentInfo[index]">
										<button :class="actionItem.action==1&&item.Type==actionItem.Type&&item.Remark==actionItem.Remark&&currentInfo[index].passTime > ProhibitBuyTime?'btn action van-ellipsis':'btn van-ellipsis'" @click="bet(item,index,1,$t('homepage.long.andodd'),'O')" :disabled="currentInfo[index].passTime < ProhibitBuyTime?true:false"> {{$t('homepage.long.andodd')}} </button>
										<button :class="actionItem.action==2&&item.Type==actionItem.Type&&item.Remark==actionItem.Remark&&currentInfo[index].passTime > ProhibitBuyTime?'btn action van-ellipsis':'btn van-ellipsis'" @click="bet(item,index,2,$t('homepage.long.andeven'),'E')" :disabled="currentInfo[index].passTime < ProhibitBuyTime?true:false"> {{$t('homepage.long.andeven')}} </button>
									</div>
									<div class="c-row" v-if="item.GameType==4&&currentInfo[index]">
										<button :class="actionItem.action==1&&item.Type==actionItem.Type&&item.Remark==actionItem.Remark&&currentInfo[index].passTime > ProhibitBuyTime?'btn action van-ellipsis':'btn van-ellipsis'" @click="bet(item,index,1,$t('homepage.long.andDig'),'H')" :disabled="currentInfo[index].passTime < ProhibitBuyTime?true:false"> {{$t('homepage.long.andDig')}} </button>
										<button :class="actionItem.action==2&&item.Type==actionItem.Type&&item.Remark==actionItem.Remark&&currentInfo[index].passTime > ProhibitBuyTime?'btn action van-ellipsis':'btn van-ellipsis'" @click="bet(item,index,2,$t('homepage.long.andSmall'),'L')" :disabled="currentInfo[index].passTime < ProhibitBuyTime?true:false"> {{$t('homepage.long.andSmall')}} </button>
									</div>
									<!-- <div class="c-row" v-if="item.GameType==5&&currentInfo[index]">
										<button :class="item.action==1?'btn action':'btn'" @click="bet(item,index,1,'奇','O')" :disabled="currentInfo[index].passTime < ProhibitBuyTime?true:false">奇</button>
										<button :class="item.action==2?'btn action':'btn'" @click="bet(item,index,2,'偶','E')" :disabled="currentInfo[index].passTime < ProhibitBuyTime?true:false">偶</button>
									</div>
									<div class="c-row" v-if="item.GameType==6&&currentInfo[index]">
										<button :class="item.action==1?'btn action':'btn'" @click="bet(item,index,1,'和奇','O')" :disabled="currentInfo[index].passTime < ProhibitBuyTime?true:false">和奇</button>
										<button :class="item.action==2?'btn action':'btn'" @click="bet(item,index,2,'和偶','E')" :disabled="currentInfo[index].passTime < ProhibitBuyTime?true:false">和偶</button>
									</div> -->
								</div>
							</div>
						</van-tab>
						<van-tab :title="$t('homepage.long.betTitle')">
							<van-tabs v-model="gameType" @click="gameClick">
							  <van-tab :title="item.name" v-for="(item,index) in gemeTypeList" :key="index"></van-tab>
							</van-tabs>
							<van-tabs v-model="timeType" @click="timeClick">
							  <van-tab title="1min">
								  <winList v-if="gameType==0" :list="myEmerdList" :total="myEmerdTotal" :page="myEmerdPage" @onLeft="onLeft" @onRight="onRight"></winList>
								  <d5List v-if="gameType==1" :list="myEmerdList" :total="myEmerdTotal" :page="myEmerdPage" @onLeft="onLeft" @onRight="onRight"></d5List>
								  <k3List v-if="gameType==2" :list="myEmerdList" :total="myEmerdTotal" :page="myEmerdPage" @onLeft="onLeft" @onRight="onRight"></k3List>
							  </van-tab>
							  <van-tab title="3min">
								  <winList v-if="gameType==0" :list="myEmerdList" :total="myEmerdTotal" :page="myEmerdPage" @onLeft="onLeft" @onRight="onRight"></winList>
								  <d5List v-if="gameType==1" :list="myEmerdList" :total="myEmerdTotal" :page="myEmerdPage" @onLeft="onLeft" @onRight="onRight"></d5List>
								  <k3List v-if="gameType==2" :list="myEmerdList" :total="myEmerdTotal" :page="myEmerdPage" @onLeft="onLeft" @onRight="onRight"></k3List>
							  </van-tab>
							  <van-tab title="5min">
								  <winList v-if="gameType==0" :list="myEmerdList" :total="myEmerdTotal" :page="myEmerdPage" @onLeft="onLeft" @onRight="onRight"></winList>
								  <d5List v-if="gameType==1" :list="myEmerdList" :total="myEmerdTotal" :page="myEmerdPage" @onLeft="onLeft" @onRight="onRight"></d5List>
								  <k3List v-if="gameType==2" :list="myEmerdList" :total="myEmerdTotal" :page="myEmerdPage" @onLeft="onLeft" @onRight="onRight"></k3List>
							  </van-tab>
							  <van-tab title="10min">
								  <winList v-if="gameType==0" :list="myEmerdList" :total="myEmerdTotal" :page="myEmerdPage" @onLeft="onLeft" @onRight="onRight" ></winList>
								  <d5List v-if="gameType==1" :list="myEmerdList" :total="myEmerdTotal" :page="myEmerdPage" @onLeft="onLeft" @onRight="onRight"></d5List>
								  <k3List v-if="gameType==2" :list="myEmerdList" :total="myEmerdTotal" :page="myEmerdPage" @onLeft="onLeft" @onRight="onRight"></k3List>
							  </van-tab>
							</van-tabs>
						</van-tab>
					</van-tabs>
				</div>
			</div>
		</transition>
		<!-- 投注内容 begin -->
		<van-popup v-model="longShow2" position="bottom" :round="true" :overlay-style="{zIndex:'99991'}" :style="{maxWidth:'10rem',left:'auto','zIndex':'99992'}" :close-on-click-overlay="false">
			<div class="betting-mark color2">
				<div class="head">
					<div class="box">
						<div class="con">{{ actionItem.lotteryName }}</div>
						<div class="color" :style="{color:popupColor,}">{{$t('homepage.index.Select')}}
							<!-- <span v-if="selectCon=='green'" class="p-l-10">{{$t('homepage.index.green')}}</span>
							<span v-else-if="selectCon=='violet'" class="p-l-10">{{$t('homepage.index.violet')}}</span>
							<span v-else-if="selectCon=='red'" class="p-l-10">{{$t('homepage.index.red')}}</span>
							<span v-else-if="selectCon=='big'" class="p-l-10">{{$t('homepage.index.big')}} </span>
							<span v-else-if="selectCon=='small'" class="p-l-10">{{$t('homepage.index.small')}}</span> -->
							<span class="p-l-10">{{ selectCon }}</span>
						</div>
					</div>
				</div>
				<div class="info">
					<div class="item c-row c-row-between">
						<div class="tit">{{$t('homepage.index.money')}}</div>
						<div class="c-row amount-box">
							<div v-for="(item,index) in actionItem.Scope" :key="index" :class="selectInfo.coin == item?'li action':'li'"  @click="changeCount(item);">{{ item }}</div>
						</div>
					</div>
					<div class="item c-row c-row-between">
						<div class="tit">{{$t('homepage.index.multiply')}}</div>
						<div class="c-row c-row-between stepper-box">
							<div :class="selectInfo.count > 1?' li minus action':'li minus'" @click="Stepper(1)">-</div>
							<van-field class="digit-box" v-model="selectInfo.count" type="digit" :maxlength="4"  @input="changeStep" />
							<div :class="selectInfo.count > 0?'li plus c-row c-row-middle-center action':'li plus c-row c-row-middle-center'" @click="Stepper(2)" :style="{backgroundColor:selectInfo.count > 0?popupColor:'rgb(240, 240, 240)',color:selectInfo.count > 0?'#fff':'#c8c9cc'}">+</div>
						</div>
					</div>
					<!-- <div class="item c-row c-flew-end">
						<div class="c-row multiple-box">
							<div class="li" :style="{backgroundColor:selectInfo.count == 1?popupColor:'#F0F0F0',color:selectInfo.count == 1?'#fff':'#000'}" @click="TaskCount(1)">X1</div>
							<div class="li" :style="{backgroundColor:selectInfo.count == 5?popupColor:'#F0F0F0',color:selectInfo.count == 5?'#fff':'#000'}" @click="TaskCount(5)">X5</div>
							<div class="li" :style="{backgroundColor:selectInfo.count == 10?popupColor:'#F0F0F0',color:selectInfo.count == 10?'#fff':'#000'}" @click="TaskCount(10)"> X10 </div>
							<div class="li" :style="{backgroundColor:selectInfo.count == 20?popupColor:'#F0F0F0',color:selectInfo.count == 20?'#fff':'#000'}" @click="TaskCount(20)"> X20 </div>
							<div class="li" :style="{backgroundColor:selectInfo.count == 50?popupColor:'#F0F0F0',color:selectInfo.count == 50?'#fff':'#000'}" @click="TaskCount(50)">X50</div>
							<div class="li" :style="{backgroundColor:selectInfo.count == 100?popupColor:'#F0F0F0',color:selectInfo.count == 100?'#fff':'#000'}" @click="TaskCount(100)">X100</div>
						</div>
					</div> -->
					<div class="item c-row c-row-middle">
						<van-checkbox v-model="checked" shape="square" checked-color="#F4453E" @change="checkboxChange"><div class="agree p-r-15">{{$t('homepage.agree')}}</div></van-checkbox>
						 <span class="txt" @click="presaleRule=true">{{$t('homepage.index.presaleRule')}}</span>
					</div>
				</div>
				<div class="foot c-row">
					<div class="left" @click="hideShow()">
						{{$t('homepage.cancel')}}
					</div>
					<div class="right" :style="{backgroundColor:popupColor}" @click="placeBet()">
						<span class="p-r-5">{{$t('homepage.lottery.totalPrice')}}</span>
						<span v-if="!utils.isYueNanCurrencySymbol()">{{utils.getCurrencySymbol()}} {{utils.numFilter(selectInfo.allCoin)}}</span>
						<span v-if="utils.isYueNanCurrencySymbol()">{{utils.numFilter(selectInfo.allCoin)}} {{utils.getCurrencySymbol()}} </span>
					</div>
				</div>
			</div>
		</van-popup>
		<Loading v-show="showLoading"></Loading>
		<!-- :activity="isopenlotter.IsNews" -->
		<Fooder :activity="false"  @onClick="clickLong" :serve="true" :long="true" :game="isopenlotter.IsMiniGame" />
	</div>
</template>

<script>
	import GameList from "@/components/GameList.vue"
	import RankList from "@/components/RankList.vue"
	import loading from "../plugins/loadingMixin"
	import winList from "@/components/game/WinList.vue"
	import d5List from "@/components/game/5DList.vue"
	import k3List from "@/components/game/K3List.vue"
	export default {
		name: 'Home',
		components: {GameList,RankList,winList,d5List,k3List},
		mixins: [loading],
		data() {
			return {
				active: 0,
				show:false,
				gameList:[],
				banner: [], //轮播数据
				k3list:[], //k3数据
				new5dwlist:[], //5D数据
				slotslist:[], //电子数据
				realpersonloglist:[],//真人数据
				sportloglist:[],//体育数据
				wlist:[], //Win go数据
				trxwigolist:[],
				swzlist:[],
				vnmodellist:[],
				newlist:[], //k3数据
				s16list:[], //16选数据
				c16list:[], //16选数据
				livewlist:[], //16选数据
				sitemsg:'',//滚动数据
				isopenlotter:{}, //判断游戏是否显示
				showLoading:false,
				daysTime:'',
				hoursTime:'',
				minutesTime:'',
				secondsTime:'',
				daysTimes:'',
				hoursTimes:'',
				minutesTimes:'',
				secondsTimes:'',
				Time:'',
				timeChck:false,
				webSite:{},
				rankList:[],
				Url:'',
				current:0,
				list:[],
				// 语言：中文简体，中文繁体，英语，印尼语，越南语，印度语，日语，韩语，马来语，巴西，泰国
				languagIndex: -1,
				selectLanguageImg:[
					{nationalFlags:require('@/assets/images/language/usa.png'),  languageText:'English',languageName:require('@/assets/images/language/lang/usa.png'), languageType:'en', used: false},
					{nationalFlags:require('@/assets/images/language/china.png'), languageText:'中文(简体)', languageName:require('@/assets/images/language/lang/china.png'), languageType:'zh-CN', used: false},
					{nationalFlags:require('@/assets/images/language/tanwan.png'), languageText:'中文(繁体)', languageName:require('@/assets/images/language/lang/tanwan.png'), languageType:'zh-TW', used: false},
					{nationalFlags:require('@/assets/images/language/indonesia.png'), languageText:'Indonesia', languageName:require('@/assets/images/language/lang/indonesia.png'), languageType:'id', used: false},
					{nationalFlags:require('@/assets/images/language/vietnam.png'),languageText:'Tiếng Việt', languageName:require('@/assets/images/language/lang/vietnam.png'), languageType:'vi', used: false},
					{nationalFlags:require('@/assets/images/language/india.png'), languageText:'india', languageName:require('@/assets/images/language/lang/india.png'), languageType:'hd', used: false},
					{nationalFlags:require('@/assets/images/language/japan.png'), languageText:'Japanese', languageName:require('@/assets/images/language/lang/japan.png'), languageType:'ja', used: false},
					{nationalFlags:require('@/assets/images/language/korea.png'), languageText:'한국어', languageName:require('@/assets/images/language/lang/korea.png'), languageType:'ko', used: false},
					{nationalFlags:require('@/assets/images/language/malaysia.png'), languageText:'Malaysia', languageName:require('@/assets/images/language/lang/malaysia.png'), languageType:'my', used: false},
					{nationalFlags:require('@/assets/images/language/Thailand.png'), languageText:'ประเทศไทย', languageName:require('@/assets/images/language/lang/Thailand.png'), languageType:'tha', used: false},
					{nationalFlags:require('@/assets/images/language/myanmar.png'), languageText:'ဘာသာစကား', languageName:require('@/assets/images/language/lang/myanmar.png'), languageType:'md', used: false},
					{nationalFlags:require('@/assets/images/language/brazil.png'), languageText:'Português', languageName:require('@/assets/images/language/lang/myanmar.png'), languageType:'bra', used: false},
				],
				longShow:false,
				longActive: 0,
				longShow2:false,
				longList:[],
				ServiceTime:'',
				ProhibitBuyTime:5, //停止下注时间
				Selected:0, //选中下注列表
				timeHandle: [[],[],[],[]],
				currentInfo: [],
				selectInfo: {
					coin: 0, //下注金额
					count: 1, //下注倍数
					allCoin: 0, //下注总额
					gametype: 0, //类型 0 颜色 1数字 2大小 
					typeid: 1, //台号1Min 3Min 5Min 10Min
					issuenumber: '2020', //期号
					selecttype: 1, //下注内容
				},
				popupColor: [], //弹层的颜色
				actionItem:{},
				selectCon:'',
				checked:true,
				// 我的投注
				gemeTypeList:[{
				    name:"WinGo",
				},{
				    name:"5D Lotre",
				},{
				    name:"K3 Lotre",
				}],
				gameType:0,//筛选游戏
				timeType:0,//筛选时间
				gameTypeid:1,//记录游戏id
				timeTypeid:0,//记录游戏id
				myEmerdTotal: 0,
				myEmerdPage: 1,
				myEmerdList: [],
				isType:0, //0首页   1wingo   2 K3   3 5D
				loadTime:'',
				Update:true,
				position: { x: 0, y: 0 },
				nx: '', ny: '', dx: '', dy: '', xPum: '', yPum: '',
				isMove: false,//是否移动标识
				full:false,
			}
		},
		mounted() {
			if(!this.globalConfig.clientCfg.AreaCode){
				this.showLoadingFun();
			}
		},
		created() {
			let that = this;
			setTimeout(()=>{
				that.GetHomeWebSite();
				// that.getWinalotterys();
				// that.getWebSite();
				// that.getWithdrawalLeaderboard();
				// that.getSitemessage(2);
			},500)
			that.getLanguageIndex(localStorage.getItem("lang"));//浏览器缓存语言
			if(localStorage.getItem('open')==1){
				that.getSitemessage(2);
			}
		},
		methods: {
			send(e){
				let that = this;
				if(!e) return;
				that.getGameUrl(e);
			},
			getGameUrl(e) {
				var that = this;
				if(!that.UserInfo.UserId){
					return that.goPage('/login');
				}
				that.showLoading = true;
				that.$api.GetGameUrl({
					uid: that.UserInfo.UserId,
					sign:that.UserInfo.Sign,
			        asymbol:that.globalConfig.clientCfg.DollarSign,
					typeid:e,
					gameid:119,
					channel:'xb',
					phonetype:that.utils.getUserAgent()==0?'pc':'m',
				}).then(res => {
					that.showLoading = false;
					//成功操作
					if (res.success) {
						that.goPage('/gameGo',{url:res.data.url,type:e})
					} else {
						that.$msg(res.msg);
					}
				}).catch(res => {
					that.showLoading = true;
					setTimeout(function(){
					    that.showLoading = false;
					},10000);
					that.$msg(that.$t('homepage.network'));
				})
			},
			// 语言
			language(e,index){
				this.languagIndex =index;
				this.$i18n.locale = e;
				localStorage.setItem("lang",e);
				this.show = false;
			},
			SelectLang(){
				let that = this;
				that.getUsedLanguage();
				that.show = true;
			},
			getUsedLanguage(){
				for (let i = 0; i< this.selectLanguageImg.length; ++i){
					for (let j = 0; j< this.globalConfig.clientCfg.LanguageList.length; ++j){
						if (this.globalConfig.clientCfg.LanguageList[j] == this.selectLanguageImg[i].languageType)
						{
							this.selectLanguageImg[i].used = true;
						}
					}
				}
			},
			getLanguageIndex(e){
				let type = e;
				for (let i = 0; i< this.selectLanguageImg.length; ++i){
					if (type == this.selectLanguageImg[i].languageType){
						this.languagIndex = i;
						break;
					}
				}
			},
			onSend(){
				let that = this;
				// 0:PC  1:Android  2:IOS  3:ipad 
				that.download(this.utils.getUserAgent());
			},
			download(e){
				let that = this;
				switch(e) {
					case 0:
						that.Url = that.webSite.AndroidUrl;
					    break;
					case 1:
						that.Url = that.webSite.AndroidUrl;
					    break;
				    case 2:
						that.Url = that.webSite.IOSUrl;
				        break;
					case 3:
						that.Url = that.webSite.IOSUrl;
						break;
				    default:
				} 
			},
			
			// banner接口
            GetHomeWebSite() {
            	let that = this;
            	that.showLoading = true;
            	that.$api.GetHomeWebSite({type:1,asymbol:that.globalConfig.clientCfg.DollarSign}).then(res => {
            		that.showLoading = false;
            		if (res.success) {
            			that.showLoading = false;
            			// banner数据
            			that.banner = res.data.bannerlist;
            			// 今日排行
            			let list = [];
            			let size = 4;
            			for(let i=0;res.data.penarikanlist.length>i;i += size){
            				list.push(res.data.penarikanlist.slice(i, i + size));
            			}
            			that.rankList = list;
            			// 网站运行时间
            			that.webSite = res.data.website;
            			that.dataTime(res.data.website.WebTime);
            			
            			that.k3list = res.data.k3list; //k3数据
            			that.new5dwlist = res.data.new5dwlist; //5D数据
            			that.slotslist = res.data.slotslist; //电子数据
            			that.realpersonloglist =  res.data.realpersonloglist; //真人数据
            			that.sportloglist = res.data.sportloglist;//体育数据
            			that.wlist = res.data.wlist; //Win go数据
						that.trxwigolist = res.data.trxwigolist; //TRX Win go数据
						that.swzlist = res.data.swzlist; //新加坡4D
						that.vnmodellist = res.data.vnmodellist; //新加坡4D
            			that.newlist = res.data.newlist; //k3数据
						that.c16list =  res.data.c16list;
						that.s16list =  res.data.s16list;
            			that.sitemsg = res.data.sitemsg.SiteMessage;//滚动数据
            			that.isopenlotter = res.data.isopenlotter;
            			// localStorage.setItem("IsURatio", JSON.stringify(res.data.isopenlotter.IsURatio)); //判断是否开启USDT 3-17去掉了
            			let arr = [];
            			if(res.data.isopenlotter.IsLiveWingo==true||res.data.isopenlotter.IsVietnam==true||res.data.isopenlotter.IsS16Game==true||res.data.isopenlotter.IsC16Game==true||res.data.isopenlotter.IsTrxWingo==true||res.data.isopenlotter.IsS16Game==true||res.data.isopenlotter.Is5d==true||res.data.isopenlotter.IsK3==true||res.data.isopenlotter.IsWinGo==true){
            				arr.push({img:require('../assets/images/home/CP.png'), name:that.$t('homepage.home.lottety'),type:1})
            			}
						if(res.data.isopenlotter.IsagFish==true){
							arr.push({img:require('../assets/images/home/BY.png'), name:that.$t('homepage.home.Game3'),type:2})
						}
						if(res.data.isopenlotter.IsSWZG4d==true){
							arr.push({img:require('../assets/images/home/WZ.png'), name:that.$t('homepage.home.Game3'),type:3})
						}
            			if(res.data.isopenlotter.IsSlots==true){
            				arr.push({img:require('../assets/images/home/DZ.png'), name:that.$t('homepage.home.Game3'),type:4})
            			}
            			if(res.data.isopenlotter.IsRealperson==true){
            				arr.push({img:require('../assets/images/home/DC.png'), name:that.$t('homepage.home.Game5'),type:5})
            			}
            			if(res.data.isopenlotter.IsSport==true){
            				arr.push({img:require('../assets/images/home/TY.png'), name:that.$t('homepage.home.Game6'),type:6})
            			}
            			that.gameList = arr;
            		}
            	}).catch(res => {
            		that.showLoading = true;
            		setTimeout(function(){
            		    that.showLoading = false;
            		},10000);
            		that.$msg(that.$t('homepage.network'));
            	})
            },
			dataTime(time){
				let that  = this;
				if(time){
					var emdata = time.replace(/-/g, '/');
				}
				clearInterval(that.Time);
				that.Time = setInterval(function(){
					that.dataTime(emdata);
				},1000)
				//毕业时间
				let BirthDay = new Date(emdata);
				//获取当前时间
				let today = new Date();
				let timeold = (today.getTime() - BirthDay.getTime()); //总豪秒数
				let  secondsold = Math.floor(timeold / 1000);          //总秒数
				let  e_daysold = timeold / (24 * 60 * 60 * 1000);
				let  daysold = Math.floor(e_daysold);                 //相差天数
				let  e_hrsold = (e_daysold - daysold) * 24;
				let  hrsold = Math.floor(e_hrsold);                   //相差小时数
				let  e_minsold = (e_hrsold - hrsold) * 60;
				let  minsold= Math.floor(e_minsold)                   //相差分钟数
				let  seconds =  (Math.floor((e_minsold - minsold) * 60));  //相差秒数
				that.daysTime =daysold;
				that.hoursTime =hrsold;
				that.minutesTime =minsold;
				that.secondsTime =seconds;
			},
			setNumberTransform(id){
				let that = this;
				that.timeChck = true;
				if(that.timeChck){
					that.numberTime = setTimeout(function(){
						that.timeChck = false;
						if(id==1){
							that.secondsTimes = that.secondsTime;
						}
					},900)
				}else{
					clearTimeout(that.numberTime);
				}
			},
			How(e){
				let that = this;
				that.current = e;
			},
			onChange(e){
				console.log(e);
			},
			arrowLeft(){
				let that = this;
				if (that.current == 0) {
					that.current = 3
				} else {
					that.current--
				}
			},
			arrowRight(){
				let that = this;
				if (that.current >= 3) {
					that.current = 0
				} else {
					that.current++
				}
			},
			//关闭长龙及清除定时
			clearLong(){
				let that = this;
				clearInterval(that.loadTime);
				const list = that.longList;
				for(var i=0;list.length>i;i++){
				    clearInterval(that.timeHandle[i]);
				}
				that.longShow = false;
			},
			clickLong(e){
				let that = this;
				if(that.UserInfo.UserId){
					that.longShow = !that.longShow;
					if(!that.longShow){
						that.clearLong();
					}else{
						that.GetlongDragon();
					}
				}else{
					that.goPage('/login')
				}
				
			},
			closeLong(){
				let that = this;
				moveBox.style.left = 50+"%";
				moveBox.style.transform = "translate(-50%,0)";
				moveBox.style.top = "100px";
				that.clearLong();
			},
			fullLong(){
				let that = this;
				that.full =! that.full;
			},
			// 分页
			onLeft(num){
				let that = this;
				let {myEmerdTotal,myEmerdPage} = this;
			    let type =that.gameTypeid + that.timeType; //计算游戏ID
			    if(myEmerdPage>1){
			        that.myEmerdPage -= 1;
			    }else{
			        return that.$msg(that.$t('homepage.index.firstPage'));
			    }
			    if(type==1||type==2||type==3||type==4){
			        that.loadMyWinEmerdList(type,that.myEmerdPage)
			    }
			    if(type==5||type==6||type==7||type==8){
			        that.loadMy5DEmerdList(type,that.myEmerdPage)
			    }
			    if(type==9||type==10||type==11||type==12){
			        that.loadMyK3EmerdList(type,that.myEmerdPage)
			    }
			},
			onRight(e){
			    let that = this;
			    let type =that.gameTypeid + that.timeType; //计算游戏ID
			    let {myEmerdTotal,myEmerdPage} = this;
			    if(myEmerdPage<myEmerdTotal){
			        that.myEmerdPage += 1;
			    }else{
			        return that.$msg(that.$t('homepage.index.firstPage'));
			    }
			    if(type==1||type==2||type==3||type==4){
			        that.loadMyWinEmerdList(type,that.myEmerdPage)
			    }
			    if(type==5||type==6||type==7||type==8){
			        that.loadMy5DEmerdList(type,that.myEmerdPage)
			    }
			    if(type==9||type==10||type==11||type==12){
			        that.loadMyK3EmerdList(type,that.myEmerdPage)
			    }
			},
			// 我的投注
			gameClick(e){
			    let that = this;
			    that.gameType = e;
			   if(e==0){
			       that.gameTypeid = 1;
			       that.timeTypeid =that.gameTypeid+ that.timeType;
			       that.loadMyWinEmerdList(that.timeTypeid,1)
			   }else if(e==1){
			       that.gameTypeid = 5;
			       that.timeTypeid =that.gameTypeid+ that.timeType;
			       that.loadMy5DEmerdList(that.timeTypeid,1)
			   }else{
			       that.gameTypeid = 9;
			       that.timeTypeid =that.gameTypeid+ that.timeType;
			       that.loadMyK3EmerdList(that.timeTypeid,1)
			   }
			},
			timeClick(e){
			    let that = this;
			    that.timeType= e;
			    that.timeTypeid =that.gameTypeid+e;
			    if(that.timeTypeid==1||that.timeTypeid==2||that.timeTypeid==3||that.timeTypeid==4){
			        that.loadMyWinEmerdList(that.timeTypeid,1)
			    }
			    if(that.timeTypeid==5||that.timeTypeid==6||that.timeTypeid==7||that.timeTypeid==8){
			        that.loadMy5DEmerdList(that.timeTypeid,1)
			    }
			    if(that.timeTypeid==9||that.timeTypeid==10||that.timeTypeid==11||that.timeTypeid==12){
			        that.loadMyK3EmerdList(that.timeTypeid,1)
			    }
			},
			// 我的WinGo投注记录
			loadMyWinEmerdList(type, page) {
				let that = this;
				that.showLoading = true;
				that.$api.GetMyEmerdList({
					typeid: type,
					pageno: page,
					uid:that.UserInfo.UserId,
					sign:that.UserInfo.Sign,
				}).then(res => {
					that.showLoading = false;
					//成功操作
					if (res.success) {
						that.myEmerdTotal = res.data.totalpage;
						that.myEmerdPage = res.data.pageno;
						that.myEmerdList = res.data.myorderlist;
					} else {
						that.$msg(res.msg);
					}
				}).catch(res => {
					that.showLoading = true;
					setTimeout(function(){
					    that.showLoading = false;
					},10000);
					that.$msg(that.$t('homepage.network'));
				})
			},
			// 我的投注记录
			loadMy5DEmerdList(type, page) {
				let that = this;
				that.showLoading = true;
				that.$api.GetMy5DEmerdList({
					typeid: type,
					pageno: page,
					uid:that.UserInfo.UserId,
					sign:that.UserInfo.Sign,
				}).then(res => {
					that.showLoading = false;
					//成功操作
					if (res.success) {
						for(var i=0;res.data.myorderlist.length>i;i++){
							let item = res.data.myorderlist[i].SelectType.split('|');
							res.data.myorderlist[i].SelectType =item;
						}
						that.myEmerdTotal = res.data.totalpage;
						that.myEmerdPage = res.data.pageno;
						that.myEmerdList = res.data.myorderlist;
					} else {
						that.$msg(res.msg);
					}
				}).catch(res => {
					that.showLoading = true;
					setTimeout(function(){
					    that.showLoading = false;
					},10000);
					that.$msg(that.$t('homepage.network'));
				})
			},
			
			// 我的投注记录
			loadMyK3EmerdList(type, page) {
				let that = this;
				that.showLoading = true;
				that.$api.GetMyK3EmerdList({
					typeid: type,
					pageno: page,
					uid:that.UserInfo.UserId,
					sign:that.UserInfo.Sign,
				}).then(res => {
					that.showLoading = false;
					//成功操作
					if (res.success) {
						for(var i=0;res.data.myorderlist.length>i;i++){
							let list = [];
							let gameType = res.data.myorderlist[i].GameType.split(',');
							let item = res.data.myorderlist[i].SelectType.split(',');
							list.push(gameType,item)
							for(var j=0;gameType.length>j;j++){
								if(gameType[j]=="1"||gameType[j]=="2"||gameType[j]=="3"){
									res.data.myorderlist[i].gameType =1;
									res.data.myorderlist[i].oneList = item;
								}else if(gameType[j]=="5"||gameType[j]=="6"){
									let oneList= [];
									let towList= [];
									let threeList= [];
									for(var t=0;item.length>t;t++){
										// console.log(item[t])
										if(item[t]=="|11|"||item[t]=="|22|"||item[t]=="|33|"||item[t]=="|44|"||item[t]=="|55|"||item[t]=="|66|"){
											let oneItme = item[t].split('|')
											oneItme.pop();
											oneItme.shift();
											oneList.push(oneItme.join())
										}
										if(item[t]==":11:"||item[t]==":22:"||item[t]==":33:"||item[t]==":44:"||item[t]==":55:"||item[t]==":66:"){
											let towItme = item[t].split(':')
											towItme.pop();
											towItme.shift();
											towList.push(towItme.join())
										}
										if(item[t]==":1:"||item[t]==":2:"||item[t]==":3:"||item[t]==":4:"||item[t]==":5:"||item[t]==":6:"){
											let threeItme = item[t].split(':')
											threeItme.pop();
											threeItme.shift();
											threeList.push(threeItme.join())
										}
									}
									that.selectNum(towList,threeList);
									res.data.myorderlist[i].gameType =2;
									res.data.myorderlist[i].oneList = oneList;
									res.data.myorderlist[i].towList = that.numTowList;
									
								}else if(gameType[j]=="7"||gameType[j]=="8"){
									let oneList= [];
									let towList= false;
									for(var t=0;item.length>t;t++){
										// console.log(item[t])
										if(item[t]=="|111|"||item[t]=="|222|"||item[t]=="|333|"||item[t]=="|444|"||item[t]=="|555|"||item[t]=="|666|"){
											let oneItme = item[t].split('|')
											oneItme.pop();
											oneItme.shift();
											oneList.push(oneItme.join())
										}
										if(item[t]=="|AAA|"){
											towList = true;
										}
										res.data.myorderlist[i].oneList = oneList;
										res.data.myorderlist[i].towList = towList;
										res.data.myorderlist[i].gameType =3;
									}
								}else if(gameType[j]=="9"||gameType[j]=="10"||gameType[j]=="4"){
									let oneList= [];
									let towList= false;
									let threeList= [];
									for(var t=0;item.length>t;t++){
										if(item[t]=="|1|"||item[t]=="|2|"||item[t]=="|3|"||item[t]=="|4|"||item[t]=="|5|"||item[t]=="|6|"){
											let oneItme = item[t].split('|')
											oneItme.pop();
											oneItme.shift();
											oneList.push(oneItme.join())
										}
										if(item[t]=="|ABC|"){
											towList = true;
										}
										if(item[t]==".1."||item[t]==".2."||item[t]==".3."||item[t]==".4."||item[t]==".5."||item[t]==".6."){
											let threeItme = item[t].split('.')
											threeItme.pop();
											threeItme.shift();
											threeList.push(threeItme.join())
										}
									}
									res.data.myorderlist[i].oneList = oneList;
									res.data.myorderlist[i].towList = towList;
									res.data.myorderlist[i].threeList = threeList;
									res.data.myorderlist[i].gameType =4;
								}
							}
						}
						// console.log(res.data.myorderlist);
						that.myEmerdTotal = res.data.totalpage;
						that.myEmerdPage = res.data.pageno;
						that.myEmerdList = res.data.myorderlist;
						
					} else {
						that.$msg(res.msg);
					}
				}).catch(res => {
					console.log(res)
					that.showLoading = true;
					setTimeout(function(){
					    that.showLoading = false;
					},10000);
					that.$msg(that.$t('homepage.network'));
				})
			},
			selectNum(numTow,numOne){
				let that = this;
				let list = [];
				for (var i =0; numTow.length>i;i++) {
					let item = numTow[i];
					let arr = [];
					for (var j =0; numOne.length>j;j++) {
						arr.push(numOne[j]);
					}
					if(arr.length>0){
						let con = arr.sort().join(',');
						list.push(item+'|'+con);
					}
					
				}
				that.numTowList= list.sort();
			},
			onClick(e){
				let that = this;
			    if(e==1){
			        that.loadMyWinEmerdList(1,that.myEmerdPage)
			    }else{
			        clearInterval(that.timeHandle);
			        that.Update = true;
			        that.utils.throttle(that.GetlongDragon, 1000)
			    }
			    console.log(e)
			},
			bet(e,index,action,con,type){
			    let that = this;
			    that.Selected = index; //list下标
			    that.longList[index].action = action; //选中游戏
			    that.actionItem = e; //游戏种item
			    that.selectCon = con; //游戏内容
			    that.selectInfo.coin = e.Scope[0]; //选中第一个金额
			    that.selectInfo.typeid = e.Type; //游戏id
			    that.selectInfo.gametype = e.BettingGameType;
			    console.log(type)
			    if(e.Type==5||e.Type==6||e.Type==7||e.Type==8||e.Type==9||e.Type==10||e.Type==11||e.Type==12){
			        if(type=='big'){
			            that.selectInfo.selecttype = 'H';  
			        }else if(type=='small'){
			            that.selectInfo.selecttype = 'L';  
			        }else{
			            that.selectInfo.selecttype = type;  
			        }
			    }else{
			        that.selectInfo.selecttype = type;  
			    }
			    console.log(that.selectInfo.selecttype)
			    that.selectInfo.issuenumber = e.IssueNumber;
			    that.longShow2 = true;
			},
			// 取消下注
			hideShow() {
				let that = this;
				that.longShow2 = false;
			    that.longList[that.Selected].action = 0;
				that.selectInfo.coin = that.actionItem.Scope[0];
				that.selectInfo.allCoin = that.actionItem.Scope[0];
				that.selectInfo.count = 1;
			    that.actionItem = {};
			},
			// 份数加减
			Stepper(e){
				let that = this;
				switch(e) {
				    case 1:
						if(that.selectInfo.count>1){
							that.selectInfo.count--;
							that.jisuanCoin();
						}
				        break;
					case 2:
						that.selectInfo.count++;
						that.jisuanCoin();
					    break;
				    default:
				} 
			},
			//购买金额切换
			changeCount(item) {
				let that = this;
				that.selectInfo.coin = item;
				that.jisuanCoin();
			},
			// 购买份数切换
			TaskCount(item) {
				let that = this;
				that.selectInfo.count = item;
				that.jisuanCoin();
			},
			changeStep(e){
				let that = this;
				if(e>0){
					that.selectInfo.count=parseInt(e);
					that.jisuanCoin();
				}
			},
			// 总金额计算
			jisuanCoin() {
				let that = this;
				that.selectInfo.allCoin = that.selectInfo.coin * that.selectInfo.count;
			},
			// 是否同意预售规则
			checkboxChange(e) {
				console.log(e);
			},
			// 投注 - 防抖
			placeBet(){
				let that = this;
			    if (that.checked == false) {
			    	return that.$msg(that.$t('homepage.index.presaleRuleTit'));
			    }
			    if(that.selectInfo.typeid==1||that.selectInfo.typeid==2||that.selectInfo.typeid==3||that.selectInfo.typeid==4){
			        that.utils.throttle(that.WingetChack, 2000)
			    }
			    if(that.selectInfo.typeid==5||that.selectInfo.typeid==6||that.selectInfo.typeid==7||that.selectInfo.typeid==8){
			        that.utils.throttle(that.DgetChack, 2000)
			    }
			    if(that.selectInfo.typeid==9||that.selectInfo.typeid==10||that.selectInfo.typeid==11||that.selectInfo.typeid==12){
			        that.utils.throttle(that.K3getChack, 2000)
			    }
				
			},
			// WinGo投注
			WingetChack(){
				let that = this;
			    that.showLoading = true;
				let {coin,count,allCoin,gametype,selecttype,typeid,issuenumber} = this.selectInfo;
				that.$api.GameBetting({
					uid:that.UserInfo.UserId, //id
					sign:that.UserInfo.Sign,
					amount:coin,//下注金额
					betcount:count,//投注份数
					gametype:gametype, //投注类型 0颜色 1数字 2大小
					selecttype:selecttype, //投注类型 red ,0 ,big
					typeid:typeid, //游戏ID
					issuenumber:issuenumber,//游戏期号
				}).then(res => {
					if(res.success){
						that.$msg(res.msg);
						that.showLoading = false;
						that.longShow2 = false;
						that.selectInfo.count = 1;
						that.selectInfo.coin = that.actionItem.Scope[0];
						that.selectInfo.allCoin = that.actionItem.Scope[0];
			            that.longList[that.Selected].action = -1; //选中游戏
			            that.actionItem = {};
						// if(that.recordType==3){
						// 	that.loadMyEmerdList(that.type,that.page=1);
						// }
						// that.getWinsUserAmount();
					}else{
						that.$msg(res.msg);
						that.longShow2 = false;
						that.selectInfo.coin = that.actionItem.Scope[0];
						that.selectInfo.allCoin = that.actionItem.Scope[0];
						that.selectInfo.count = 1;
			            that.longList[that.Selected].action = -1; //选中游戏
			            that.actionItem = {};
						that.showLoading = false;
					}
				}).catch(res => {
			        that.showLoading = true;
			        setTimeout(function(){
			            that.showLoading = false;
			        },10000);
					that.$msg(that.$t('homepage.network'));
				})
			},
			// 5D投注
			DgetChack(){
				let that = this;
			    that.showLoading = true;
				let {coin,count,allCoin,gametype,selecttype,typeid,issuenumber} = this.selectInfo;
				// console.log(this.selectInfo);
				that.$api.SetGame5DBetting({
					uid:that.UserInfo.UserId, //id
					sign:that.UserInfo.Sign,
					amount:coin,//下注金额
					betcount:count,//投注份数
					gametype:gametype,
					selecttype:selecttype,
					typeid:typeid,
					issuenumber:issuenumber,
				}).then(res => {
					if(res.success){
						that.$msg(res.msg);
			            that.showLoading = false;
						that.longShow2 = false;
						that.selectInfo.count = 1;
						that.selectInfo.coin = that.actionItem.Scope[0];
						that.selectInfo.allCoin = that.actionItem.Scope[0];
			            that.longList[that.Selected].action = -1; //选中游戏
			            that.actionItem = {};
					}else{
						that.$msg(res.msg);
			            that.showLoading = false;
						that.longShow2 = false;
						that.selectInfo.count = 1;
						that.selectInfo.coin = that.actionItem.Scope[0];
						that.selectInfo.allCoin = that.actionItem.Scope[0];
			            that.longList[that.Selected].action = -1; //选中游戏
			            that.actionItem = {};
					}
				}).catch(res => {
					// console.log(res)
			        that.showLoading = true;
			        setTimeout(function(){
			            that.showLoading = false;
			        },10000);
					that.$msg(that.$t('homepage.network'));
				})
			},
			// K3投注
			K3getChack(){
				let that = this;
			    that.showLoading = true;
				let {coin,count,allCoin,gametype,selecttype,typeid,issuenumber} = this.selectInfo;
				that.$api.SetGameK3Betting({
					uid:that.UserInfo.UserId, //id
					sign:that.UserInfo.Sign,
					amount:coin,//下注金额
					betcount:count,//投注份数
					afew:1,
					gametype:gametype,
					selecttype:selecttype,
					typeid:typeid,
					issuenumber:issuenumber,
				}).then(res => {
					if(res.success){
						that.$msg(res.msg);
			            that.showLoading = false;
						that.longShow2 = false;
						that.selectInfo.count = 1;
						that.selectInfo.coin = that.actionItem.Scope[0];
						that.selectInfo.allCoin = that.actionItem.Scope[0];
			            that.longList[that.Selected].action = -1; //选中游戏
			            that.actionItem = {};
						// if(that.recordType==3){
						// 	that.loadMyEmerdList(that.type,that.page=1);
						// }
						// that.getWinsUserAmount();
						// that.numberNoChack();
					}else{
						that.$msg(res.msg);
			            that.showLoading = false;
						that.longShow2 = false;
						that.selectInfo.count = 1;
						that.selectInfo.coin = that.actionItem.Scope[0];
						that.selectInfo.allCoin = that.actionItem.Scope[0];
			            that.longList[that.Selected].action = -1; //选中游戏
			            that.actionItem = {};
						// that.numberNoChack();
					}
				}).catch(res => {
					console.log(res)
			        that.showLoading = true;
			        setTimeout(function(){
			            that.showLoading = false;
			        },10000);
					that.$msg(that.$t('homepage.network'));
				})
			},
			
			// 获取游戏列表
			GetlongDragon() {
				var that = this;
				that.$api.GetlongDragon({
			        typeid:that.isType,
			    }).then(res => {
					//成功操作
					if (res.success) {
			            that.ServiceTime = res.data.date.ServiceTime;
			            const list = res.data.list;
			            const currentInfo = [];
			            list.forEach((item, index) => { 
			                let currentTime = new Date(that.ServiceTime).getTime();
			                let beginTime = new Date(item.StartTime).getTime();
			                let gameTime = (currentTime - beginTime) / 1000; //游戏时间 = 服务器时间 -游戏开始时间 如果大于
			                // console.log(gameTime)
			                // console.log(gameTime > item.IntervalM * 60)
			                if (gameTime > item.IntervalM * 60) {
			                	gameTime = item.IntervalM * 60;
			                }
			                let passTime = Math.floor(item.IntervalM * 60 - gameTime); //游戏剩余的时间，秒
			                // let passTime = item.IntervalM * 60 - (currentTime - beginTime) / 1000; //游戏剩余的时间，秒
			                item.Scope = item.Scope.split("|");
			                // if(that.Update){
			                currentInfo.push({'passTime':passTime,'time1':0,'time2':parseInt(passTime / 60),'time3':parseInt((passTime % 60) / 10),'time4':parseInt(passTime % 10),})
			                // that.$set(currentInfo,index,{'passTime':passTime,'time1':0,'time2':parseInt(passTime / 60),'time3':parseInt((passTime % 60) / 10),'time4':parseInt(passTime % 10),});
			                if(that.timeHandle[index]){
			                    clearInterval(that.timeHandle[index]);
			                }
			                that.timeHandle[index] = setInterval(function () {
			                    that.subSubTime(index);
			                }, 1000); 
			                // }else{
			                //     currentInfo.push({'passTime':passTime,'time1':0,'time2':parseInt(passTime / 60),'time3':parseInt((passTime % 60) / 10),'time4':parseInt(passTime % 10),})
			                //     that.$set(currentInfo,index,{'passTime':passTime,'time1':0,'time2':parseInt(passTime / 60),'time3':parseInt((passTime % 60) / 10),'time4':parseInt(passTime % 10),});
			                // }
			                
			            })
			            that.longList = list;
			            that.currentInfo = currentInfo;
			            that.load();
					} else {
						that.$msg(res.msg);
					}
				}).catch(res => {
			        console.log(res);
			        that.showLoading = true;
			        setTimeout(function(){
			            that.showLoading = false;
			        },10000);
					that.$msg(that.$t('homepage.network'));
				})
			},
			load(){
			    let that = this;
			    clearInterval(that.loadTime);
			    // console.log(that.currentInfo)
			    that.loadTime = setInterval(function () {
			        that.utils.throttle(that.GetlongDragon,2000);
			        that.Update = false;
			    }, 10000);
			},
			subSubTime(index) {
				var that = this;
			    if(that.currentInfo[that.Selected]){
			        if(that.currentInfo[that.Selected].passTime<that.ProhibitBuyTime){
			            that.showLong2 = false;
			            that.actionItem = [];
			        }
			    }
			    if(that.currentInfo[index]){
			        // console.log(that.currentInfo[index].passTime,index);
			        if (that.currentInfo[index].passTime > 0 ) {
			        	var subTime = that.currentInfo[index].passTime;
			            that.currentInfo[index].time1 = 0;
			            that.currentInfo[index].time2 = parseInt(subTime / 60);
			            that.currentInfo[index].time3 = parseInt((subTime % 60) / 10);
			            that.currentInfo[index].time4 = parseInt(subTime % 10);
			            that.currentInfo[index].passTime--;
			            that.$set(that.currentInfo,index,{'passTime':that.currentInfo[index].passTime,'time1':0,'time2':parseInt(that.currentInfo[index].passTime / 60),'time3':parseInt((that.currentInfo[index].passTime % 60) / 10),'time4':parseInt(that.currentInfo[index].passTime % 10),});
			        } else {
			        	clearInterval(that.timeHandle[index]);
			            that.list.splice(index, 1);
			            that.currentInfo.splice(index, 1);
			            that.Update = true;
			            that.utils.throttle(that.GetlongDragon,2000);
			        }
			    }
			},
			 mousedown(event) {
			  //鼠标按下事件
			  var touch;
			  if(event.touches){
			  	touch = event.touches[0];
			  }else {
			  	touch = event;
			  }
			  this.position.x = touch.clientX;
			  this.position.y = touch.clientY;
			  this.dx = moveBox.offsetLeft;
			  this.dy = moveBox.offsetTop;
			  this.isMove = true;
			},
			//鼠标移动
			mousemove(event) {
			  if (!this.isMove) {
				return;
			  }
			  var touch ;
			  if(event.touches){
			  	touch = event.touches[0];
			  }else {
			  	touch = event;
			  }
			  this.nx = touch.clientX - this.position.x;
			  this.ny = touch.clientY - this.position.y;
			  this.xPum = this.dx+this.nx;
			  this.yPum = this.dy+this.ny;
			  moveBox.style.left = this.xPum+"px";
			  moveBox.style.top = this.yPum +"px";
			  //阻止页面的滑动默认事件
			  document.addEventListener("touchmove",function(){ // 1.2 如果碰到滑动问题，请注意是否获取到 touchmove
			  	event.preventDefault();//jq 阻止冒泡事件
			  	// event.stopPropagation(); // 如果没有引入jq 就用 stopPropagation()
			  },false);
			},
			//鼠标抬起
			mouseup() {
			  this.isMove = false;
			},
			
		},
		destroyed() {
		    let that = this;
		    clearInterval(that.loadTime);
		    const list = that.longList;
		    for(var i=0;list.length>i;i++){
		        clearInterval(this.timeHandle[i]);
		    }
		},
		watch: {
			secondsTime:function(newVal, oldVal) {
				let that = this;
				that.setNumberTransform(1);
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	@import '@/plugins/css/long';
	@import '@/plugins/css/base';
	.home {
		padding-bottom: 80px;
		background-color: $base-home-bg;
		.logo{
			height:38px;
			width:100px;
		}
		.notice{
			border-radius: 8px;
			overflow: hidden;
            &-box{
                position: relative;
                width: 100%;
                ::v-deep .van-notice-bar{
                    width: 100%;
                }
                .txt{
                    position: absolute;
                    right: 0;
                    height: 100%;
                    color: #ed6a0c;
                    background-color: #fffbe8;
                    padding: 5px 10px;
                    font-size: 12px;
                    .sp{
                        .img{
                            width: 10px;
                            margin-right: 2px;
                        }
                        padding: 0 10px;
                        display: inline-block;
                        height: 30px;
                        line-height: 30px;
                        background-image: linear-gradient(to right, $base-head-left, $base-head-right);
                        border-radius: 30px;
                        color: #fff;
                    }
                }
            }
		}
		.banner {
			// height: 180px;
			.img{
				display: block;
				height: 180px;
				width: 100%;
			}
		}
		&-tab{
			&.action{
				::v-deep .van-tabs__wrap{
					display: block;
				}
				::v-deep .van-tabs__content{
					margin-top: 0;
				}
			}
			::v-deep .van-tabs__content{
				margin-top: -20px;
			}
			::v-deep .van-tabs__wrap{
				height: 80px;
				overflow: inherit;
				display: none;
				.van-tab{
					flex: 0 1  25%;
					&:nth-child(2n){
						-webkit-animation: stepHome 3s infinite alternate;
						animation: stepHome 3s infinite alternate;
						animation-fill-mode: forwards;
					}
					&:nth-child(2n+1){
						-webkit-animation: stepHome1 3s infinite alternate;
						animation: stepHome1 3s infinite alternate;
						animation-fill-mode: forwards;
					}
					// &:nth-child(3){
					// 	-webkit-animation: stepHome 3s infinite alternate;
					// 	animation: stepHome 3s infinite alternate;
					// 	animation-fill-mode: forwards;
					// }
					// &:nth-child(4){
					// 	-webkit-animation: stepHome1 3s infinite alternate;
					// 	animation: stepHome1 3s infinite alternate;
					// 	animation-fill-mode: forwards;
					// }
					&.van-tab--active{
						position: relative;
						&::after{
							content: '';
							display: block;
							width: 0;
							height: 0;
							border-right: 6px solid transparent;
							border-left: 6px solid transparent;
							border-bottom: 8px solid #f2413b;
							position: absolute;
							left: 50%;
							bottom: -2px;
							transform: translate(-50%,0);
						}
					}
				}
				@-webkit-keyframes stepHome {
					25% {
					-webkit-transform:translateY(10%);
					transform:translateY(10%)
					}
					50% {
						-webkit-transform:translateY(0);
						transform:translateY(0)
					}
					75% {
						-webkit-transform:translateY(10%);
						transform:translateY(10%)
					}
					100% {
						-webkit-transform:translateY(0);
						transform:translateY(0)
					}
				}
				@keyframes stepHome {
					25% {
					-webkit-transform:translateY(10%);
					transform:translateY(10%)
					}
					50% {
						-webkit-transform:translateY(0);
						transform:translateY(0)
					}
					75% {
						-webkit-transform:translateY(10%);
						transform:translateY(10%)
					}
					100% {
						-webkit-transform:translateY(0);
						transform:translateY(0)
					}
				}
				@-webkit-keyframes stepHome1 {
					25% {
					-webkit-transform:translateY(-10%);
					transform:translateY(-10%)
					}
					50% {
						-webkit-transform:translateY(0);
						transform:translateY(0)
					}
					75% {
						-webkit-transform:translateY(-10%);
						transform:translateY(-10%)
					}
					100% {
						-webkit-transform:translateY(0);
						transform:translateY(0)
					}
				}
				@keyframes stepHome1 {
					25% {
					-webkit-transform:translateY(-10%);
					transform:translateY(-10%)
					}
					50% {
						-webkit-transform:translateY(0);
						transform:translateY(0)
					}
					75% {
						-webkit-transform:translateY(-10%);
						transform:translateY(-10%)
					}
					100% {
						-webkit-transform:translateY(0);
						transform:translateY(0)
					}
				}
				
				&::after{
					border:none;
				}
				.img{ width: 80px; margin: 0 auto; }
				.name{
					margin-top: -5px;
				}
				.van-tab__text--ellipsis{
					display: -webkit-box; 
					-webkit-line-clamp:2; 
					-webkit-box-orient: vertical; 
					overflow: inherit;
				}
				.van-tabs__line{
					display: none;
				}
			}
			
		}
		&-com {
			padding: 15px 15px 0;
			.btn-list {
				padding: 10px;
				background: #FFFFFF;
				box-shadow: 0 1px 18px 0 rgba(203, 202, 220, 0.56);
				.item {
					width: 48%;
					height: 45px;
					font-size: 14px;
					color: #fff;
					&.recharge {
						background-image: linear-gradient(94deg, #FFAC6B 0%, #FF5F75 100%);
						box-shadow: 0 9px 15px 0 rgba(206, 1, 4, 0.30);
						border-radius: 10px;
					}
					&.service {
						background-image: linear-gradient(90deg, #50A3FF 0%, #8E79FF 100%);
						box-shadow: 0 9px 15px 0 rgba(96, 152, 255, 0.53);
						border-radius: 10px;
					}
					.img{
						width: 40px;
						height: 40px;
					}
				}
			}
		}
		.gameList{
			width: 100%;
			.item{
				width: 100%;
				color: #fff;
				box-shadow: 0 1px 18px 0 rgba(203,202,220,0.56);
				border-radius: 15px;
				&.yu{
					background-color: #fff;
					background:url(../assets/images/pic/yu.png)no-repeat center center;
					background-size: 100% 100%;
					.name{
						text-shadow: 2px 2px #1b4e9e;
					}
				}
				&.maskShow{
					position: relative;
					z-index: 99999;
				}
				.info{
					width: 100%;
					padding: 25px 15px;
					border-radius: 15px 15px 0 0;
					position:relative;
					.img{
						position: absolute;
						top: -15px;
						right: -15px;
						width:120px;
						height:85px;
						&.imgslot{
							width:150px;
							height:85px;
						}
						&.imglive{
							top: 0;
							right: -20px;
							width:150px;
							height:107px;
						}
						&.imgsport{
							top: 0;
							right: -20px;
							width:150px;
							height:126px;
						}
					}
					.name{
						font-size: 25px;
						margin-bottom: 15px;
						font-weight: 600;
					}
					.des{
						font-size: 13px;
					}
					&.i1{
						background:url(../assets/images/pic/game-card-bg.png)no-repeat center center,linear-gradient(135deg,#d700ff,#fa3e5f);
						// background:linear-gradient(135deg,#d700ff,#fa3e5f);
						background-size: 100% 100%;
					}
					&.i2{
						background:url(../assets/images/pic/game-card-bg.png)no-repeat center center,linear-gradient(135deg,#a373ff,#7850f9);
						background-size: 100% 100%;
					}
					&.i3{
						background:url(../assets/images/pic/game-card-bg.png)no-repeat center center,linear-gradient(135deg,#64bfff,#2b5dfe);
						// background:linear-gradient(135deg,#64bfff,#2b5dfe);
						background-size: 100% 100%;
					}
					&.i4{
						background:url(../assets/images/pic/game-card-bg.png)no-repeat center center,linear-gradient(135deg,#fc3a3a,#ffff00);
						background-size: 100% 100%;
					}
					&.i5{
						background:url(../assets/images/pic/game-card-bg.png)no-repeat center center,linear-gradient(135deg,#3d3b72,#1b30a6);
						background-size: 100% 100%;
					}
					&.i6{
						background:url(../assets/images/pic/game-card-bg.png)no-repeat center center,linear-gradient(135deg,#508871,#435b3f);
						background-size: 100% 100%;
					}
                    &.i7{
                    	background:url(../assets/images/pic/game-card-bg.png)no-repeat center center,linear-gradient(135deg,#64BE57, #27704d);
                    	background-size: 100% 100%;
                    }
					&.i8{
						background:url(../assets/images/pic/game-card-bg.png)no-repeat center center,linear-gradient(135deg,#46dcdc, #6b2be7);
						background-size: 100% 100%;
					}
					&.i9{
						background:url(../assets/images/pic/game-card-bg.png)no-repeat center center,linear-gradient(135deg,#33bdff, #6fce4b);
						background-size: 100% 100%;
					}
					&.i10{
						background:url(../assets/images/pic/game-card-bg.png)no-repeat center center,linear-gradient(135deg,#209cff, #68e0cf);
						background-size: 100% 100%;
					}
					&.i11{
						background:url(../assets/images/pic/game-card-bg.png)no-repeat center center,linear-gradient(135deg,#6c8f47 , #64b3f4);
						background-size: 100% 100%;
					}
					&.i12{
						background:url(../assets/images/pic/game-card-bg.png)no-repeat center center,linear-gradient(135deg,#37cedf , #417ef6);
						background-size: 100% 100%;
					}
					&.i13{
						background:url(../assets/images/pic/game-card-bg.png)no-repeat center center,linear-gradient(135deg,#37CCFB , #417C86);
						background-size: 100% 100%;
					}
					&.i14{
						background:url(../assets/images/pic/game-card-bg.png)no-repeat center center,linear-gradient(135deg,#3ea4f9 , #64ced1);
						background-size: 100% 100%;
					}
					&.i15{
						background:url(../assets/images/pic/game-card-bg.png)no-repeat center center,linear-gradient(135deg,#034aab , #435b3f);
						background-size: 100% 100%;
					}
				}
				.userList{
					background-color: #fff;
					border-radius: 0 0 15px 15px;
					color: #000;
				}
			}
		}
		.bonus-box{
			width: 100%;
			height: 215px;
			padding: 20px 16px 0;
			position: relative;
			z-index: 1;
			.img{
				position: absolute;
				left: 0;
				top: 0;
				z-index: 9;
			}
			.bonus-bg{
				position: absolute;
				top: 0;
				left: 4%;
				z-index: 1;
				width: 92%;
				height: 80%;
				background: url(../assets/images/pic/adv-bonus.png) no-repeat center center;
				background-size: cover;
				.inner{
					font-family: MulticoloreFont;
					color: #ffefd8;
					font-size: 20px;
					line-height: 20px;
					position: absolute;
					width: 100%;
					text-align: center;
					bottom: 48px;
					left: 50%;
					-webkit-transform: translateX(-50%);
					transform: translateX(-50%);
				}
			}
		}
		.running-time{
			.running-title{
				height: 40px;
				font-size: 20px;
				line-height: 40px;
				margin-bottom: 10px;
			}
			.flip-num {
				width:70px;
				height:70px;
				-webkit-box-shadow:0 3px 8px 0 rgba(172,182,192,.5);
				box-shadow:0 3px 8px 0 rgba(172,182,192,.5);
				border-radius:10px;
				background:#fff;
				-webkit-perspective:1000px;
				perspective:1000px
			}
			.flip-num .top {
				text-align: center;
				font-size:18px;
				color:#000;
				width:100%;
				font-weight:700;
				height:35px;
				line-height:35px;
				border-radius:10px 10px 0 0;
				background:-webkit-gradient(linear,left top,left bottom,from(#fff),to(#eeeff2));
				background:linear-gradient(180deg,#fff,#eeeff2)
			}
			.flip-num .bottom {
				position:absolute;
				line-height:35px;
				font-size:12px;
				font-weight:700;
				color:#9da7b3
			}
			.flip-num .bottom-card {
				width:100%;
				height:35px;
				position:relative;
				-webkit-transform:rotateX(0deg);
				transform:rotateX(0deg);
				-webkit-transform-origin:0 0;
				transform-origin:0 0;
				-webkit-transform-style:preserve-3d;
				transform-style:preserve-3d;
				-webkit-perspective:1000px;
				perspective:1000px;
				border-radius:0 0 10px 10px
			}
			.flip-num .bottom-card.flipX {
				-webkit-animation:flipX 1s;
				animation:flipX 1s
			}
			.flip-num .bottom-card .front {
				font-size:12px;
				font-weight:700;
				color:#9da7b3;
				background:#fff;
				-webkit-backface-visibility:hidden;
				backface-visibility:hidden
			}
			.flip-num .bottom-card .back,.flip-num .bottom-card .front {
				width:100%;
				height:35px;
				line-height:35px;
				position:absolute;
				border-radius:0 0 10px 10px
			}
			.flip-num .bottom-card .back {
				background:#fff;
				background:-webkit-gradient(linear,left top,left bottom,from(#eeeff2),to(#fff));
				background:linear-gradient(180deg,#eeeff2,#fff)
			}
			.flip-num .bottom-card .back p {
				height:35px;
				line-height:35px;
				font-size:18px;
				color:#000;
				width:100%;
				font-weight:700;
				-webkit-transform:scaleY(-1);
				transform:scaleY(-1)
			}
			.flip-num .bottom {
				width:100%;
				height:35px;
				border-radius:0 0 10px 10px
			}
			@-webkit-keyframes flipX {
				0% {
					-webkit-transform:rotateX(0deg);
					transform:rotateX(0deg)
				}
				to {
					-webkit-transform:rotateX(180deg);
					transform:rotateX(180deg)
				}
			}
			@keyframes flipX {
				0% {
					-webkit-transform:rotateX(0deg);
					transform:rotateX(0deg)
				}
				to {
					-webkit-transform:rotateX(180deg);
					transform:rotateX(180deg)
				}
			}
		}
		.web-info{
			background: url(../assets/images/pic/info-bg.png) no-repeat center center;
			background-size: cover;
			padding: 15px;
			.item{
				flex: 1;
				font-size: 16px;
				color: #fff;
				.img{
					margin: 0 auto;
				}
				.num{
					margin: 5px 0;
					font-weight: 600;
				}
				.txt{
					font-size: 13px;
					color: hsla(0,0%,100%,.5);
				}
			}
		}
		.rank-box{
			padding: 15px;
			.btn{
				margin: 0 auto;
				background-image: linear-gradient(94deg, #FFAC6B 0%, #FF5F75 100%);
				box-shadow: 0 9px 15px 0 rgba(206, 1, 4, 0.30);
				border-radius: 0 0 40px 40px;
				width: 60%;
				text-align: center;
				font-size: 15px;
				height: 30px;
				line-height: 30px;
				color: #fff;
			}
			&.new-box{
				padding:0 15px 15px;
			}
			.rank-tit{
				line-height: 65px;
				font-size: 19px;
				color: #fff;
				text-align: center;
				height: 70px;
				background: $base-home-rink;
				background-size:contain;
				margin-bottom: 10px;
			}
			.new-List{
				padding: 5px 10px;
				background-color: #fff;
				box-shadow: 0 1px 18px 0 rgba(203,202,220,0.56);
				.tit{
					height: 35px;
					line-height: 35px;
					color: #333;
				}
				.item{
					line-height: 50px;
					border-top: 1px solid #eee;
					// &:last-child{
					// 	border-bottom:none;
					// }
					.li{
						width: 20px;
						height: 20px;
						text-align: center;
						line-height: 20px;
						border-radius: 20px;
						background-color: #9195A3;
						color: #fff;
						margin-right: 5px;
						background: url(../assets/images/icon/icon_Serial.png) no-repeat center center;
						background-size: 100% 100%;
					}
					.name{
						max-width: 180px;
						font-size: 14px;
					}
					.time{
						font-size: 12px;
					}
				}
			}
		}
		
		&-how{
			padding: 15px;
			.info{
				box-shadow: 0 1px 16px 0 rgba(203,202,220,0.56);
				padding: 0 15px;
				.tit{
					font-size: 22px;
					color: #000;
					height: 50px;
					line-height: 50px;
					text-align: center;
					margin-bottom: 10px;
				}
				.tab{
					padding-bottom: 10px;
					.item{
						width: 49%;
						padding: 10px;
						background: #FEFFFF;
						border: 1px solid #DFDFDF;
						box-shadow: 0 4px 9px 2px rgba(125,125,125,0.13);
						border-radius: 5px;
						margin-bottom: 10px;
						.step{
							display: inline-block;
							font-size: 10px;
							padding: 5px;
							background: #DFDFDF;
							border-radius: 15px;
						}
						.name{
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 1;
							-webkit-box-orient: vertical;
							font-size: 13px;
							margin-top: 4px;
						}
						&.action{
							background: #FFFFFF;
							border: 1px solid $base-head-left;
							box-shadow: 0 -1px 10px 5px rgba(238,211,215,0.30);
							border-radius: 5px;
							.step{
								background: #fff7f7;
								color: $base-color;
								
							}
							.name{
								color: $base-color;
							}
							
						}
					}
				}
			}
			.how-list{
				box-shadow: 0 1px 18px 0 rgba(203,202,220,0.56);
				padding: 15px 42px;
				position: relative;
				z-index: 1;
				.item{
					position: absolute;
					top: 50%;
					transform: translate(0,-50%);
					height: 35px;
					width: 35px;
					z-index: 1;
					&.right{
						right: 0;
					}
					&.left{
						left: 0;
					}
					.arr{
						height: 35px;
						width: 35px;
						background: $base-message-btn;
						border-radius: 10px;
						
					}
				}
			}
		}
		.language-box{
			padding: 10px 15px;
			border-bottom:1px solid #eee;
			.item{
				.img{display: block;}
				.size{ padding-left:14px; font-size: 16px; font-weight: 600; }
				.right{
					.chek{
						height:20px;
						width: 20px;
						line-height: 20px;
						text-align: center;
						border-radius: 20px;
						border: 2px solid #eee;
						&.action{
							background-color: $base-head-left;
							border: 2px solid $base-color;
						}
					}
				}
			}
			
		}

	}
</style>
