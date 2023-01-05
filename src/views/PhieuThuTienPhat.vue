<template>
  <div class="ThuTienPhat">
    <TitleItem title="Thu tiền phạt" />
    <div>{{ form }}</div>
    <form>
      <div>
        <label>Họ và tên</label>
        <input v-model="form.name" />
      </div>
      <div>
        <label>Tiền nợ</label>
        <input type="number" v-model.number="form.debt" />
      </div>
      <div>
        <label>Số tiền thu</label>
        <input type="number" v-model.number="form.money" />
      </div>
      <div>
        <label>Còn lại</label>
        <input type="number" v-model.number="form.remain" />
      </div>
      <div>
        <label>Người thu tiền</label>
        <input v-model="form.employee" />
      </div>
      <button @click="submit">Lập phiếu thu tiền phạt</button>
    </form>
  </div>
</template>

<script>
import LayoutDefault from "../components/layouts/LayoutDefault.vue";
import TitleItem from "../components/utils/TitleItem.vue";
import axios from "axios";

console.log(import.meta.env.VITE_BACKEND_LOCAL);

export default {
  name: "ThuTienPhat",
  components: { TitleItem },
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
  data: function () {
    return {
      form: {
        name: "",
        debt: 0,
        money: 0,
        remain: 0,
        employee: "",
      },
    };
  },
  methods: {
    async submit() {
      this.$emit("submit", this.form);
      axios.post();
    },
  },
};
</script>
