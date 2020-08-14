<template>
	<view class="pages">
		<view>
			<u-tabs-swiper ref="tabs" name="cate_name" bar-width="60" active-color="#2979ff"
			 :list="list" :is-scroll="false"></u-tabs-swiper>
		</view>
		<view class="mian">
			<view class="main-av"><text class="b1 f15">申请时间：</text>2020-6-20 12:00
			<u-button class="btn-commit">待提交</u-button>
			</view>
			<view class="main-av"><text class="b1 f15">报修类型：</text>水电煤气，家电家具</view>
			<view class="main-av"><text class="b1 f15">具体内容：</text>这是一段备注摘要，这是一段备注摘要，
			这是一段备注摘要...</view>
			<view class="btn f12">
				<u-button>提交申请</u-button>
				<u-button>取消</u-button>
				<u-button>查看详情</u-button>
			</view>
		</view>
		
		<view class="tool">
				<u-button @tap="gotoLunBo">发起新申请</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				list:[{
					cate_name:'待提交'
				},
				{
					cate_name:'处理中'
				},
				{
					cate_name:'待评价'
				},
				{
					cate_name:'已取消'
				},
				{
					cate_name:'全部'
				}],
				
			};
		},
		mounted() {
			document.querySelector('body').setAttribute('style','background-color: #F7F7F7;')
		},
		beforeDestroy() {
			document.querySelector('body').removeAttribute('style')
		},
		
		methods:{
			gotoLunBo(){
				uni.navigateTo({
					url:"/pages/index/propertyList/serviceApply"
				})
			}
			
					}
				};
</script>

<style>
	
	.pages{
		background-color: white ;
		border-top: 1px solid #F7F7F7;
		
	}
 .mian{
		border: 1px solid #f7f7f7;
		margin: 20rpx;
		padding:10rpx 10rpx;
		margin-top: 10px;
		overflow: hidden;
	}
	.mian .b1{
		font-weight: 800;
	}
	 .main-av{
		padding-top:12rpx ;
	}
	.btn{
		margin-top: 10px;
		margin-bottom: 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		}
		.btn u-button{
			margin-bottom: 20rpx;
			font-size:55rpx;
		}
		.btn-commit{
			display: inline;
			font-size: 16rpx;
			float: right;
			
			
			}
		.tool{
			display: flex;
			flex-flow: row wrap;
			border-top: 1px solid #b5b5b5;
			bottom: 0rpx;
				
				
			}
		.tool button{
			margin-top: 20px;
			background: #f7f7f7;
			align-self: flex-end;
			}
			
		
</style>
