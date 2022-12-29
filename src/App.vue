<template>
  <MenuItem />
  <router-view></router-view>
</template>

<script>
import MenuItem from "./components/MenuItem.vue";
export default {
  name: "App",
  components: {
    MenuItem,
  },
};
</script>

<style></style>
