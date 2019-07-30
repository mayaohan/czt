<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		created(){
			const value = wx.getStorageSync('loginKey')
			if(value){
				this.$store.commit('SET_PERSONAL', value)
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


