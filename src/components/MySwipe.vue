<template>
	<div class="swipe_box" @touchstart='skipToDetail'>
		<van-swipe :autoplay="3000" indicator-color="black">
			<van-swipe-item>1</van-swipe-item>
			<van-swipe-item>2</van-swipe-item>
			<van-swipe-item>3</van-swipe-item>
			<van-swipe-item>4</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	export default {
		methods:{
			skipToDetail() {
				console.log(111)
				this.$router.push('/detail')
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swipe_box{
		height: 2rem;
		background: deepskyblue;
	}
</style>
