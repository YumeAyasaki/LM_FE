<template>
  <div class="ThanhLySach">
    <h1>ThanhLySach</h1>
    <!-- ... -->
  </div>
</template>

<script>
import LayoutDefault from "../components/layouts/LayoutDefault.vue";

console.log("ThanhLySach");

export default {
  name: "ThanhLySach",
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
};
</script>
