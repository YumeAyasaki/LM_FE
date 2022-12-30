<template>
  <div class="LayoutDefault">
    <div>
      Header
      <!-- Header -->
    </div>
    <main class="LayoutDefault__main">
      <MenuItem class="LayoutDefault__menu" />
      <slot />
    </main>
    <footer class="LayoutDefault__footer">Awesome Company</footer>
  </div>
</template>

<script>
import MenuItem from "../utils/MenuItem.vue";

console.log("Layout");

export default {
  components: {
    MenuItem,
  },
};
</script>

<style>
.LayoutDefault__main {
  display: flex;
}
</style>
