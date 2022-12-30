<template>
  <div class="HomePage">
    <h1>Home</h1>
    <!-- ... -->
  </div>
</template>

<script>
import LayoutDefault from "../layouts/LayoutDefault.vue";

export default {
  name: "HomePage",
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
};
</script>
