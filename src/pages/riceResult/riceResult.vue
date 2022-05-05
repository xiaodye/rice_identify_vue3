<template>
  <view class="rice_result">
    <!-- 数据图表 -->
    <view class="chart">
      <MarkHead title="图表"></MarkHead>

      <!-- 柱状图 -->
      <view class="chart-container">
        <qiun-data-charts
          type="column"
          :canvasId="canvasColumId"
          :canvas2d="true"
          :opts="columnOpts"
          :loadingType="5"
          :chartData="chartData"
          background="none"
        />
      </view>
    </view>

    <!-- rice -->
    <view class="data">
      <MarkHead title="纯度最高种子"></MarkHead>

      <view class="data-seed">
        <u-image
          width="200rpx"
          height="200rpx"
          border-radius="10rpx"
          :src="imageUrl"
          mode="aspectFill"
          @click="previewImage(imageUrl)"
        ></u-image>

        <view class="data-seed-info">
          <view class="name">
            <view class="name-key">名称：</view>
            <view class="name-value">{{ "08" }} </view>
          </view>
          <view class="purity">
            <view class="purity-key">纯度：</view>
            <view class="purity-value color_green">{{ 23.4 + "%" }} </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, reactive } from "vue"
import { onLoad } from "@dcloudio/uni-app"

// 图表id
let canvasColumId = ref("canvasColumId1")
let canvasLineId = ref("canvasLineId1")
let imageUrl = ref("https://cdn.uviewui.com/uview/album/1.jpg")

// 图表配置
const columnOpts = reactive({
  extra: {
    column: {
      barBorderCircle: true,
      linearType: "custom",
      linearOpacity: 0.7,
    },
  },
})
// 图表数据
const chartData = reactive({
  categories: [],
  series: [],
})

// 图表初始化
function uChartInit() {
  setTimeout(() => {
    chartData.categories = ["08", "09", "611", "8"]
    chartData.series = [
      {
        name: "种子纯度",
        data: [0.722, 0.211, 0.341, 0.056],
      },
    ]
  }, 2000)
}

// 预览图片
const previewImage = imageUrl => {
  uni.previewImage({ urls: [imageUrl] })
}

onLoad(options => {
  imageUrl.value = options.imageUrl
  uChartInit()
})
</script>

<style lang="scss" scoped>
view {
  box-sizing: border-box;
}

$chart_height: 400rpx;
.rice_result {
  padding: 20rpx;

  .chart {
    background-color: #fff;
    padding: 20rpx;
    padding-top: 0;
    border-radius: 20rpx;

    .chart-container {
      height: $chart_height;
    }
  }

  .data {
    background-color: #fff;
    padding: 20rpx;
    padding-top: 0;
    border-radius: 20rpx;
    margin-top: 40rpx;

    &-seed {
      display: flex;
      // align-items: center;
      justify-content: space-between;
      padding: 20rpx;

      &-info {
        width: 50%;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
      }
      .name,
      .purity {
        display: flex;
        align-items: center;
        // margin-bottom: 30rpx;

        &-key {
          font-size: 32rpx;
          color: $uni-color-paragraph;
          font-weight: bold;
        }

        &-value {
          font-size: 36rpx;
          font-weight: bold;
        }
        .color_green {
          color: #19be6b;
        }
      }
    }
  }
}
</style>
