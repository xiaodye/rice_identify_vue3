<template>
  <view class="mark">
    <view class="mark-title">{{ Props.title }} </view>
  </view>
</template>

<script setup>
import { defineProps } from "vue"

const Props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
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

.mark {
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
</style>
