<script>
export default {
  name: "TitleItem",
  props: ["title"],
};
</script>

<template>
  <h1 id="title-text">{{ title }}</h1>
</template>

<style>
#title-text {
  font-family: "Tahoma";
  font-weight: 700;
  font-size: 60px;
  line-height: 72px;
  text-align: center;
}
h1 {
  /* width: 100%; */

  text-align: center;
  margin: 20px;
}
</style>
