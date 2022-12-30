<template>
  <div class="ThuTienPhat">
    <h1>ThuTienPhat</h1>
    <!-- ... -->
  </div>
</template>

<script>
import LayoutDefault from "../components/layouts/LayoutDefault.vue";

console.log("ThuTienPhat");

export default {
  name: "ThuTienPhat",
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
};
</script>
