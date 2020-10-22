<script lang="ts">
// import { Vue } from "vue-property-decorator";
import Vue from "vue";
export default Vue.extend({
  mpType: "app",
  onLaunch() {
    console.log("App Launch，11111");
  },
  onShow() {
    console.log("App Show，22222");
  },
  onHide() {
    console.log("App Hide，333333");
  },
});
</script>

<style>
/*每个页面公共css */
</style>
