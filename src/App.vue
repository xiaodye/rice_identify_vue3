<script>
export default {
  globalData: {
    statusBarHeight: 0, // 状态导航栏高度
    navigationBarHeight: 0, // 导航栏高度(标题栏高度)
    headerHeight: 0, // 头部高度
  },
  onLaunch: function() {
    // 状态栏高度
    this.globalData.statusBarHeight = uni.getSystemInfoSync().statusBarHeight

    // #ifdef MP-WEIXIN
    // 获取微信胶囊的位置信息 width,height,top,right,left,bottom
    const custom = wx.getMenuButtonBoundingClientRect()
    // 导航栏高度(标题栏高度) = 胶囊高度 + (顶部距离 - 状态栏高度) * 2
    this.globalData.navigationBarHeight = custom.height + (custom.top - this.globalData.statusBarHeight) * 2
    // 总体高度 = 状态栏高度 + 导航栏高度
    this.globalData.headerHeight = this.globalData.navigationBarHeight + this.globalData.statusBarHeight
    // #endif
  },
  onShow: function() {
    console.log("App Show")
  },
  onHide: function() {
    console.log("App Hide")
  },
}
</script>

<style lang="scss">
/*每个页面公共css */
@import "vk-uview-ui/index.scss";

::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
  background-color: transparent;
}

page {
  min-height: 100vh;
  background-color: $uni-bg-color-grey;
}
</style>
