<template>
  <view class="virus_result">
    <!-- info -->
    <view class="virus">
      <MarkHead title="病毒信息"></MarkHead>

      <view class="virus-info">
        <u-image
          width="200rpx"
          height="200rpx"
          border-radius="10rpx"
          :src="imageUrl"
          mode="aspectFill"
          @click="previewImage(imageUrl)"
        ></u-image>

        <view class="virus-info-rg">
          <view class="name">
            <view class="name-key">病毒名称：</view>
            <view class="name-value">{{ lesions[0].name }} </view>
          </view>
        </view>
      </view>
    </view>

    <!-- control -->
    <view class="control">
      <MarkHead title="防治"></MarkHead>

      <view class="control-content">{{ lesions[0].method }} </view>
    </view>
  </view>
</template>

<script setup>
import { ref, reactive } from "vue"
import { onLoad } from "@dcloudio/uni-app"

let imageUrl = ref("https://cdn.uviewui.com/uview/album/1.jpg")
let lesions = ref([{}])

// 预览图片
const previewImage = imageUrl => {
  uni.previewImage({ urls: [imageUrl] })
}

// 获取数据
function getResultData(res) {
  imageUrl.value = res.result_Url
  lesions.value = res.lesions
  console.log(imageUrl.value, lesions.value)
}

onLoad(options => {
  // imageUrl.value = options.imageUrl
  getResultData(JSON.parse(options.result))
})
</script>

<style lang="scss" scoped>
view {
  box-sizing: border-box;
}

.virus_result {
  padding: 20rpx;

  .virus {
    background-color: #fff;
    padding: 20rpx;
    padding-top: 0;
    border-radius: 20rpx;

    &-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-rg {
        width: 60%;

        .name {
          display: flex;
          flex-direction: column;
          // align-items: center;
          &-key {
            font-size: 32rpx;
            // font-weight: bold;
            color: $uni-color-paragraph;
            margin-bottom: 20rpx;
          }
          &-value {
            font-size: 36rpx;
            font-weight: bold;
            color: $uni-color-title;
          }
        }
      }
    }
  }

  .control {
    background-color: #fff;
    padding: 20rpx;
    padding-top: 0;
    border-radius: 20rpx;
    margin-top: 40rpx;

    &-content {
      color: $uni-text-color-disable;
      font-size: 32rpx;
    }
  }
}
</style>
