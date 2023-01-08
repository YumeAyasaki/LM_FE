<template>
  <div class="BaoCao">
    <div class="title">
      <TitleItem title="Báo cáo" />
    </div>
    <!-- ... -->
    <form></form>
  </div>
</template>

<script>
import TitleItem from "../components/utils/TitleItem.vue";

export default {
  name: "BaoCao",
  components: { TitleItem },
};
</script>

<style>
.title {
  width: 100%;
}
</style>
