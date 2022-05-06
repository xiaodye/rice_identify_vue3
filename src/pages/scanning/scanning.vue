<template>
  <view class="scanning">
    <!-- 上传框 -->
    <view class="upload-container">
      <u-subsection :list="typeList" @change="switchType" active-color="#18b566"></u-subsection>
      <u-gap height="40"></u-gap>
      <u-upload
        :max-count="1"
        width="400"
        height="400"
        :file-list="imageList"
        :auto-upload="false"
        :show-tips="false"
        custom-btn
        @on-choose-complete="chooseImage"
        @on-remove="removeImage"
      >
        <view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
          <u-icon name="camera-fill" size="60" :color="$u.color['lightColor']"></u-icon>
        </view>
      </u-upload>
    </view>

    <!-- 提交 -->
    <view class="submit">
      <u-button
        type="success"
        :loading="submitBtn.loading"
        :disabled="submitBtn.disabled"
        shape="circle"
        @click="uploadImage"
        >{{ submitBtn.text }}
      </u-button>
    </view>

    <!-- 反馈组件 -->
    <u-toast ref="uToast" />
  </view>
</template>

<script setup>
import { ref, reactive } from "vue"
import { onLoad } from "@dcloudio/uni-app"

let imageUrl = ref("")
let typeList = ref([{ name: "种子识别" }, { name: "病害识别" }])
let currentType = ref("种子识别")
let submitBtn = ref({ text: "提交", loading: false, disabled: false })
// const uToast = ref(null)

// 切换类型
const switchType = (index) => {
  currentType.value = typeList.value[index].name
}

// 选择图片
const chooseImage = (imageList) => {
  imageUrl.value = imageList[0].url
}
// 移除图片
const removeImage = () => {
  imageUrl.value = ""
}

// 上传图片
const uploadImage = async () => {
  if (!imageUrl.value.length) return uni.showToast({ title: "请先选择图片", icon: "none" })
  submitBtn.value = { text: "提交中", loading: true, disabled: true }

  // 上传图片
  if (currentType.value === "种子识别") {
    riceIdentify(imageUrl.value)
  } else if (currentType.value === "病害识别") {
    virusIdentify(imageUrl.value)
  }

  // mock()
}

// 稻苗识别
const riceIdentify = async (imageUrl) => {
  try {
    const { data: res, statusCode } = await uni.uploadFile({
      url: "/file/upload/seed",
      filePath: imageUrl,
      name: "file",
    })
    // console.log(res, statusCode)
    if (statusCode !== 200) return uni.$u.toast("上传失败")

    const { data } = JSON.parse(res)
    uni.navigateTo({ url: "/pages/riceResult/riceResult?result=" + JSON.stringify(data[0]) })
  } catch (err) {
    console.error(err)
    uni.$u.toast("服务器异常")
  } finally {
    submitBtn.value = { text: "提交", loading: false, disabled: false }
  }
}

// 病毒识别
const virusIdentify = async (imageUrl) => {
  try {
    const { data: res, statusCode } = await uni.uploadFile({
      url: "/file/upload/lesions",
      filePath: imageUrl,
      name: "file",
    })
    if (statusCode !== 200) return uni.$u.toast("上传失败")
    const { data } = JSON.parse(res)
    uni.navigateTo({ url: "/pages/virusResult/virusResult?result=" + JSON.stringify(data) })
  } catch (err) {
    console.error(err)
    uni.$u.toast("服务器异常")
  } finally {
    submitBtn.value = { text: "提交", loading: false, disabled: false }
  }
}

// 模拟
const mock = () => {
  setTimeout(() => {
    submitBtn.value = { text: "提交", loading: false, disabled: false }
    let pageUrl = ""
    if (currentType.value === "稻谷识别") {
      pageUrl = "/pages/riceResult/riceResult"
    } else if (currentType.value === "病毒识别") {
      pageUrl = "/pages/virusResult/virusResult"
    }

    uni.navigateTo({ url: pageUrl + "?imageUrl=" + imageUrl.value })
    // imageUrl.value = ""
  }, 2000)
}

onLoad(() => {})
</script>

<style lang="scss" scoped>
view {
  box-sizing: border-box;
}
.scanning {
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  .upload-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 700rpx;
  }

  .submit {
    margin: auto 40rpx 200rpx;
  }
}

.slot-btn {
  width: 400rpx;
  height: 400rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(244, 245, 246);
  border-radius: 10rpx;
}

.slot-btn__hover {
  background-color: rgb(235, 236, 238);
}
</style>
