<template>
  <view class="index">
    <view class="chart-container">
      <view class="header">数据图表</view>
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
@mixin before() {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
}
.index {
  min-height: 100vh;
  background-color: $uni-bg-color-grey;
  padding: 20rpx;

  .chart-container {
    height: 400rpx;
    background-color: #fff;
    padding: 20rpx;
    border-radius: 20rpx;

    .header {
      height: 80rpx;
      display: flex;
      align-items: center;
      position: relative;

      &::before {
        @include before();
      }
    }
  }
}
</style>
