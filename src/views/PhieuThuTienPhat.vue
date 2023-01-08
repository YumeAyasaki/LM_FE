<template>
  <div class="container">
    <TitleItem title="Thu tiền phạt" />
    <form>
      <div>
        <label>Họ và tên</label>
        <input type="text" class="text-input" v-model="form.name" />
      </div>
      <div>
        <label>Tiền nợ</label>
        <input type="number" class="text-input" v-model.number="form.debt" />
      </div>
      <div>
        <label>Số tiền thu</label>
        <input type="number" class="text-input" v-model.number="form.money" />
      </div>
      <div>
        <label>Còn lại</label>
        <input type="number" class="text-input" v-model.number="form.remain" />
      </div>
      <div>
        <label>Người thu tiền</label>
        <input class="text-input" v-model="form.employee" />
      </div>
      <button v-on:click.prevent="handleSubmit" class="btn" type="submit">
        Lập phiếu thu tiền phạt
      </button>
    </form>
  </div>
</template>

<script>
import LayoutDefault from "../components/layouts/LayoutDefault.vue";
import TitleItem from "../components/utils/TitleItem.vue";

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
    async handleSubmit(e) {
      e.preventDefault();
      console.log("Submit");
      console.log(this.form);
    },
  },
};
</script>

<style scoped>
.container {
  margin: 10%;
}

.text-input {
  display: block;
  width: 60%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #8b8f92;
  appearance: none;
  border-radius: 0.3rem;
}

.select-label,
.date-input {
  width: 200px;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #8b8f92;
  border-radius: 0.3rem;
}

form {
  padding-left: 25%;
}

h1 {
  text-align: center;
  font-weight: bold;
}
label {
  display: block;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.btn {
  margin-top: 1em;

  display: inline-block;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 0.3rem;
  border: 1px solid;
  background-color: #d0dce4;

  padding: 0.15rem;
}
.btn:hover {
  background-color: #8b8f92;
}
</style>
