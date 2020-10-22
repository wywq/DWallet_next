<template>
  <view class="launch">
    launchlaunchlaunchlaunchlaunch
  </view>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
@Component({})
export default class Index extends Vue {
  //hooks
  onLoad() {}
  // methods
  public handleCreate(): void {
    console.log(11111);
    uni.navigateTo({
      url: "pages/wallet/createWallet/index",
    });
  }
}
</script>

<style lang="scss" scoped>
.launch {
  @include flex(flex-start, center);
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: linear-gradient(225deg, #2d80c2 0%, #203975 100%);
  .launch-title {
    margin-top: 450rpx;
    margin-bottom: 90rpx;
    width: 100%;
    text-align: center;
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
  }
  .launch-icon {
    margin-bottom: 50rpx;
    width: 400rpx;
    height: 90rpx;
  }
}
</style>
