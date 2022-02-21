<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title pt-10">{{title}}</text>
			<u-button type="primary" text="红色" class="ml-10 btn" @click="handleSetTheme('red1')"></u-button>
			<u-button type="primary" text="蓝色" class="ml-10" @click="handleSetTheme('blue')"></u-button>
		</view>
		
		<view>
			<text class="title">这里面是vuex状态管理：{{stateTitle}}</text>
			<u-button class="mt-20" type="primary" text="mutation设置" @click="handleMutation"></u-button>
			<u-button class="mt-20" type="primary" text="action设置" @click="handleAction"></u-button>
		</view>

		<u-button class="mt-20" type="primary" text="跳转" @click="handleClick"></u-button>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	import common from '../../static/js/common/index.js'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		computed: {
			// 使用模块中的状态量时需要解构模块名，而不是状态量
			...mapState(['stateTitle'])
		},
		methods: {
			...mapMutations(['getMTitle']),
			...mapActions(['getATitle']),
			// 路由点击跳转
			handleClick() {
				uni.$u.route({
					url: 'pages/home/home',
					params: {
						name: 'lisa'
					}
				})
			},
			// 主题设置
			handleSetTheme(theme) {
				common.setTheme(theme)
			},
			// 状态管理Mutation设置
			handleMutation() {
				this.getMTitle()
			},
			// 状态管理Action设置
			handleAction() {
				this.getATitle()
			}
		}
	}
</script>

<style lang="scss" scoped>
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
		justify-content: center;
	}

	.btn {
		background-color: red;
		border-color: red;
	}

	.title {
		@include color-theme($color-primary); // 换肤的颜色
		font-size: 36rpx;
	}
</style>
