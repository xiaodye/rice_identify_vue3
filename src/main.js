import { createSSRApp } from "vue"
import App from "./App.vue"
import vkUviewUi from "vk-uview-ui"

// 拦截器
const BASE_URL = "http://192.168.196.237:8080"
uni.addInterceptor("request", {
  invoke(args) {
    args.url = BASE_URL + args.url
  },
})
uni.addInterceptor("uploadFile", {
  invoke(args) {
    args.url = BASE_URL + args.url
  },
})

export function createApp() {
  const app = createSSRApp(App)
  app.use(vkUviewUi)
  return {
    app,
  }
}
