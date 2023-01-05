<template>
  <div class="BaoCao">
    <div class="title">
      <TitleItem title="Báo cáo" />
    </div>
    <!-- ... -->
    <form></form>
  </div>
</template>

<script>
import LayoutDefault from "../components/layouts/LayoutDefault.vue";
import TitleItem from "../components/utils/TitleItem.vue";

console.log("Báo cáo");

export default {
  name: "BaoCao",
  components: { TitleItem },
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
};
</script>

<style>
.title {
  width: 100%;
}
</style>
