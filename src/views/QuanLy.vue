<template>
  <div class="QuanLy">
    <h1>QuanLy</h1>
    <!-- ... -->
  </div>
</template>

<script>
import LayoutDefault from "../components/layouts/LayoutDefault.vue";

console.log("QuanLy");

export default {
  name: "QuanLy",
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
};
</script>
