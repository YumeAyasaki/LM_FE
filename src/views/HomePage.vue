<template>
  <div class="HomePage">
    <h1>Home</h1>
    <!-- ... -->
  </div>
</template>

<script>
import LayoutDefault from "../components/layouts/LayoutDefault.vue";

console.log("Home");

export default {
  name: "HomePage",
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
};
</script>
