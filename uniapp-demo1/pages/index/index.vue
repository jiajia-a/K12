<template>
	<view class="content">
		<skeleton selector="skeleton" bgcolor="#FFF" v-if="showSkeleton"></skeleton>
		<view class="skeleton">
			<image class="logo skeleton-rect" src="/static/logo.png"></image>
			<view class="text-area ">
				<view class="title skeleton-rect">123</view>
				<!-- <u-button text="月落" @click="onClick"></u-button> -->
				<navigator  url="../home/home" open-type="navigate">点击跳转</navigator>
				<view class="skeleton-rect" >{{dataItem.userId}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {postData} from'@/api/index.js'
import { nextTick } from "vue"
	import skeleton from '../../component/skeleton.vue'
	export default {
		data() {
			return {
				showSkeleton:true,
				title: 'Hello',
				dataItem:''
			}
		},
		components:{
			'skeleton':skeleton
		},
		created(){
			// this.fetch()
			
		},
		mounted(){
			this.fetch()
		},
		// onLoad() {
		// 	this.fetch()
		// },
		// onShow() {
		// 	console.log('Show')
		// },
		methods: {
			reloadData() {
			     setTimeout(() => {
			        this.showSkeleton = false
			    }, 1000)
			},             
			fetch() {
				const data={
					userId:1,
					title:"leihou",
					boby:"雷猴"
				}
				postData(data).then((res)=>{
					console.log(res.data)
					if(res.data){
						this.dataItem =res.data
						this.$nextTick(_=>{
							this.reloadData()
						})
					}
					console.log(this.dataItem)
					
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		flex-direction: column;
		justify-content: center; 
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
