<script lang="ts">
import { Vue } from "vue-property-decorator";
export default {
  mpType: "app",
  onLaunch() {
    console.log("App Launch，11111");
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("onLaunch");
        resolve();
      }, 3000);
    });
  },
  onShow() {
    console.log("App Show，22222");
  },
  onHide() {
    console.log("App Hide，333333");
  },
};
</script>

<style>
/*每个页面公共css */
</style>
