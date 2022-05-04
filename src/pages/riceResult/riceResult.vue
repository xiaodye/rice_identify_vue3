<template>
  <view class="rice_result">
    <!-- 数据图表 -->
    <view class="chart">
      <view class="header">
        <view class="header-title">数据图表</view>
      </view>

      <view class="chart-container">
        <!-- 柱状图 -->
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
  </view>
</template>

<script setup>
import { ref, reactive } from "vue"
import { onLoad } from "@dcloudio/uni-app"

// 图表id
let canvasColumId = ref("canvasColumId1")
let canvasLineId = ref("canvasLineId1")

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
  // setTimeout(() => {
  chartData.categories = ["08", "09", "611", "8"]
  chartData.series = [
    {
      name: "种子纯度",
      data: [0.722, 0.211, 0.341, 0.056],
    },
  ]
  // }, 2000)
}

onLoad(() => {
  uChartInit()
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

$chart_height: 400rpx;
.rice_result {
  padding: 20rpx;
  .chart {
    background-color: #fff;
    padding: 20rpx;
    padding-top: 0;
    border-radius: 20rpx;

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
  }

  .chart-container {
    height: $chart_height;
  }
}
</style>
