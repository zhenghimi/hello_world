<template>
	<view class="service-ages">
		<view class="text f13">填写申请人信息</view>
		<view class="message-item">
			<u-field icon="map-fill" v-model="areaName" label="小区名称" label-width="200" placeholder="辛巴小区"></u-field>
			<u-field icon="phone" v-model="mobile" label="联系电话" label-width="200" placeholder="15912345678"></u-field>
			<u-field icon="man-add" v-model="name" label="申请人姓名" label-width="200" placeholder="张三"></u-field>
			<u-field icon="map" v-model="address" label="具体地址" label-width="200" placeholder="D栋710"></u-field>
			<u-field icon="calendar" v-model="yTime" label="预约时间" label-width="200" placeholder="2020-6-22 10:00"></u-field>
		</view>
		<view class="applyInfo f13">
			<text class="text">选择服务类型</text>
				<navigator class="right" url="./propertyExplain" open-type="navigate">报修服务说明</navigator>
		</view>
		<view class="grid">
			<u-grid :col="5" :border="false">
				<u-grid-item>
					<view class="grid-text g1">水电煤气</view>
				</u-grid-item>
				<u-grid-item>
					<view class="grid-text g1">家电家具</view>
				</u-grid-item>
				<u-grid-item>
					<view class="grid-text">电梯</view>
				</u-grid-item>
				<u-grid-item>
					<view class="grid-text">门禁</view>
				</u-grid-item>
				<u-grid-item>
					<view class="grid-text">公共设施</view>
				</u-grid-item>
				<u-grid-item>
					<view class="grid-text">物业设备</view>
				</u-grid-item>
				<u-grid-item>
					<view class="grid-text">其他报修</view>
				</u-grid-item>
			</u-grid>
		</view>
		<text class="text">填写具体内容</text>
		<u-input v-model="value" :type="type" :border="border" :height="height" class="u-form"
		 :auto-height="autoHeight" placeholder="请填写您的具体内容,最多200字" ></u-input>
		<text class="text-1">请注意：若需要购买新用具，请备注说明。维修人员会提前给您联系。</text>
		<u-upload ref="uUpload" max-count="9" :max-size="2*1024*1024" :action="action" :file-list="fileList"></u-upload>
		<text class="text">最多添加9张图片，长按删除</text>
		<view class="btn">
			<u-button size="default">保存</u-button>
			<u-button style="background-color: #8e9193;color:#FFFFFF">提交申请</u-button>
		</view>
	</view>
</template>
<script>
	export default {
		data(){
			return{
				// 申请人信息
				areaName:'',
				mobile:'',
				name:'',
				address:'',
				yTime:'',
				// 输入框
				value:'',
				type:"textarea",
				border:true,
				height:100,
				autoHeight:true,
				// 图片上传
				action:'',
				fileList:[{
					url:''
				}]
			}
		},
		mounted() {
			document.querySelector('body').setAttribute('style','background-color: #F7F7F7;')
		},
		beforeDestroy() {
			document.querySelector('body').removeAttribute('style')
		},
		methods:{
			
		},
	}
</script>

<style scoped lang="scss">
	.text{
		margin:8px;
	}
	.message-item{
		background-color: #ffffff;
	}
	.applyInfo{
		margin-top: 10px;
	}
	.right{
		position: relative;
		float: right;
		color: #00aaff;
		margin-right: 15px;
	}
	.grid{
		background-color: #ffffff;
		margin-top:10px;
		}
		.grid-text{
			border: 1px solid #aaaaaa;
			line-height: 30px;
			width: 65px;
			text-align: center;
		}
		.g1{
			border: 1px solid #00aaff;
			color: #00aaff;
		}
		.u-form{
			background-color: #FFFFFF;
		}
		.text-1{
			color: #ffaa00;
			margin: 10px;
		}
		.btn{
			display: flex;
		}
		.btn button{
			width: 200px;
			margin: 10px;
			background-color:#F7F7F7 ;
		}
</style>
