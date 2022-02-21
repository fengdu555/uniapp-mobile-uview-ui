<template>
	<view class="content">
		<view class="text-area">
			<text class="title pt-10">{{title}}</text>
		</view>
		<u-button type="primary" text="跳回首页" @click="handleClick"></u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '我是Home页面'
			}
		},
		onLoad() {

		},
		methods: {
			handleClick() {
				uni.$u.route({
					url: 'pages/index/index',

				})
			}
		}
	}
</script>

<style lang="scss">
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

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
