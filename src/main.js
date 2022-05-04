import { createSSRApp } from "vue"
import App from "./App.vue"
import vkUviewUi from "vk-uview-ui"

export function createApp() {
  const app = createSSRApp(App)
  app.use(vkUviewUi)
  return {
    app,
  }
}
