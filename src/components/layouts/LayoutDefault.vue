<template>
  <div class="LayoutDefault">
    <div class="LayoutDefault__header">
      Header
      <!-- Header -->
    </div>
    <main class="LayoutDefault__main">
      <MenuItem class="LayoutDefault__menu" />
      <div class="LayoutDefault__content">
        <slot />
      </div>
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
.LayoutDefault {
  min-width: 100%;
}
.LayoutDefault__header {
  width: 100%;
  background-color: black;
}
.LayoutDefault__main {
  display: flex;
  margin: 0%;
  padding: 0%;
}
.LayoutDefault__content {
  width: 100%;
}
</style>
