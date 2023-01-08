<template>
  <div class="LayoutDefault">
    <div class="LayoutDefault__header">
      <NavBar />
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
import NavBar from "../utils/NavBar.vue";

export default {
  components: {
    MenuItem,
    NavBar,
  },
};
</script>

<style>
.LayoutDefault {
  min-width: 100%;
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
