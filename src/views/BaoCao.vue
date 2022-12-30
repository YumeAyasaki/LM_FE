<template>
  <div class="BaoCao">
    <h1>BaoCao</h1>
    <!-- ... -->
  </div>
</template>

<script>
import LayoutDefault from "../components/layouts/LayoutDefault.vue";

console.log("Baocao");

export default {
  name: "BaoCao",
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
};
</script>
