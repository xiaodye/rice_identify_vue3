<template>
  <view class="virus_result">
    <!-- info -->
    <view class="virus">
      <MarkHead title="病害信息"></MarkHead>

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
          <view class="desc">
            <text user-select>
              病害共有
              <text class="desc_weight">{{ lesions.length }}</text>
              种，分别为：
              <text class="desc_weight" v-for="(item, index) in lesions" :key="index">
                {{ item.name }}
                {{ index === lesions.length - 1 ? "。" : "、" }}
              </text>
            </text>
          </view>
        </view>
      </view>
    </view>

    <!-- control -->
    <view class="control">
      <MarkHead title="防治"></MarkHead>

      <u-tabs :list="lesions" is-scroll v-model="currentTabIndex" :gutter="20"></u-tabs>
      <swiper class="swiper" :current="currentTabIndex" @change="tabsChange">
        <swiper-item v-for="(item, index) in lesions" :key="index">
          <scroll-view class="control-content">{{ item.method }}</scroll-view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script setup>
import { ref, reactive } from "vue"
import { onLoad } from "@dcloudio/uni-app"

let imageUrl = ref("")
let lesions = ref([{}])
let currentTabIndex = ref(0)

// 预览图片
const previewImage = (imageUrl) => {
  uni.previewImage({ urls: [imageUrl] })
}

// tab切换
function tabsChange(e) {
  currentTabIndex.value = e.detail.current
}

// 获取数据
function getResultData(res) {
  imageUrl.value = res.result_Url
  lesions.value = res.lesions
}

onLoad((options) => {
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
      // align-items: center;
      &-rg {
        width: 60%;
        padding-right: 20rpx;
        height: 100%;

        .desc {
          font-size: 32rpx;
          color: $uni-color-paragraph;
        }
        .desc_weight {
          font-weight: bold;
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

    .swiper {
      height: 300rpx;
    }

    &-content {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      color: $uni-text-color-disable;
      font-size: 32rpx;
      padding: 20rpx;
      // padding-top: 20rpx;
    }
  }
}
</style>
