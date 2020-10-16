<template>
  <view class="launch">
    <view class="launch-title">你的第一个数字智能钱包</view>
    <view class="launch-create">创建钱包</view>
    <view class="launch-add">导入钱包</view>
  </view>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
@Component({})
export default class Index extends Vue {
  //data
  title: string = "title1";
  subTitle: number = 666;
  //watch
  @Watch("subTitle")
  onTitleIs(val: number) {
    console.log(val);
  }
  @Watch("title")
  onTitleChange(val: string) {
    console.log(val);
  }
  //hooks
  onLoad() {}
  //methods
  handleAdd(): void {
    this.subTitle++;
    this.title = `${this.title}${this.subTitle}`;
  }
}
</script>

<style>
.launch {
  width: 100%;
  height: 100vh;
  background: linear-gradient(225deg, #2d80c2 0%, #203975 100%);
}
</style>
