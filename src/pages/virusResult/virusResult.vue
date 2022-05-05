<template>
  <view class="virus_result">
    <!-- info -->
    <view class="virus">
      <view class="header">
        <view class="header-title">病毒信息</view>
      </view>

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
            <view class="name-value">{{ "水稻齿叶矮缩病毒" }} </view>
          </view>
        </view>
      </view>
    </view>

    <!-- control -->
    <view class="control">
      <view class="header">
        <view class="header-title">防治</view>
      </view>

      <view class="control-content">{{ "暂无相关防治" }} </view>
    </view>
  </view>
</template>

<script setup>
import { ref, reactive } from "vue"
import { onLoad } from "@dcloudio/uni-app"

let imageUrl = ref("https://cdn.uviewui.com/uview/album/1.jpg")

// 预览图片
const previewImage = imageUrl => {
  uni.previewImage({ urls: [imageUrl] })
}

onLoad(options => {
  imageUrl.value = options.imageUrl
})
</script>

<style lang="scss" scoped>
view {
  box-sizing: border-box;
}
@mixin before($bgColor: #2979ff) {
  content: "";
  position: absolute;
  height: 80%;
  width: 10rpx;
  border-radius: 6rpx;
  background-color: $bgColor;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
}

.virus_result {
  padding: 20rpx;

  .header {
    height: 80rpx;
    display: flex;
    align-items: center;

    &-title {
      position: relative;
      padding-left: 30rpx;
      font-size: 32rpx;
      color: $uni-color-paragraph;
      font-weight: bold;
      &::before {
        @include before();
      }
    }
  }

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
