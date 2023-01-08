<script>
import DefaultLayout from "./components/layouts/LayoutDefault.vue";

export default {
  name: "App",
  components: { DefaultLayout },
  data() {
    return {
      layout: "div",
    };
  },
};
</script>

<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<style></style>
