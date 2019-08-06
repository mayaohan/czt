<script>
	export default {
		onLaunch: function() {
			let res = wx.getLaunchOptionsSync();
			console.log(res)
		},
		onShow: function() {
			// let res = wx.getLaunchOptionsSync();
			// console.log(res)
			// console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		created(){
			const value = wx.getStorageSync('memberInfo')
			if(value){
				this.$store.commit('UP_memberInfo', value)
			}
		}
	}
</script>

<style lang="scss">
	@import '@/styles/sass/iconfont.scss';
	page{
		background:#221E29;
		min-height: 100vh;
	}
</style>


