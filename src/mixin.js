// 自定义导航栏用
export const systemInfo = {
  computed: {
    statusBarHeight() {
      return getApp().globalData.statusBarHeight
    },

    // #ifdef MP-WEIXIN
    navigationBarHeight() {
      return getApp().globalData.navigationBarHeight
    },

    headerHeight() {
      return getApp().globalData.headerHeight
    },
    // #endif

    // 获取可使用窗口高度
    windowHeight() {
      return uni.getSystemInfoSync().windowHeight
    },
  },
}
