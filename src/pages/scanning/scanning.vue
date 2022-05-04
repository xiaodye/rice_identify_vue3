<template>
  <view class="scanning">
    <!-- 上传框 -->
    <view class="upload-container">
      <u-upload></u-upload>
    </view>
  </view>
</template>

<script setup>
// import {  } from "vk-uview-ui"
import { ref, reactive } from "vue"
import { onLoad } from "@dcloudio/uni-app"

onLoad(() => {
  console.log(1)
})
</script>

<style lang="scss" scoped>
view {
  box-sizing: border-box;
}
.scanning {
  display: flex;
}
</style>
