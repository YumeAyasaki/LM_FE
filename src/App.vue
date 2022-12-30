<script>
export default {
  name: "App",
  data() {
    return {
      layout: "div",
    };
  },
};
</script>

<template>
  <component :is="layout">
    <router-view v-model:layout="layout" />
  </component>
</template>

<style></style>
