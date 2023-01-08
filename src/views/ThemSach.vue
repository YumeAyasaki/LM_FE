<template>
  <div class="container">
    <h1>Tiếp nhận sách mới</h1>
    <form form @submit.prevent="addBook">
      <label>Tên sách: </label>
      <input type="text" class="text-input" v-model="form.name" />

      <label>Thể loại: </label>
      <select
        name="the-loai"
        id="the-loai"
        class="select-label"
        v-model="form.genres"
      >
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>

      <label>Tác giả </label>
      <input type="text" class="text-input" v-model="form.author" />

      <label>Năm xuất bản: </label>
      <input type="number" class="text-input" v-model="form.year" />

      <label>Nhà xuất bản: </label>
      <input type="text" class="text-input" v-model="form.publisher" />

      <label>Ngày nhập: </label>
      <input type="date" class="date-input" v-model="form.inputDate" />

      <label>Trị giá: </label>
      <input
        type="number"
        step="0.01"
        class="text-input"
        v-model="form.price"
      />

      <label>Người tiếp nhận: </label>
      <select
        name="nguoi-tiep-nhan"
        id="nguoi-tiep-nhan"
        class="select-label"
        v-model="form.importer"
      >
        <option v-for="person in importers" :key="person">{{ person }}</option>
      </select>

      <button class="btn">Tiếp nhận</button>
    </form>
  </div>
</template>

<script>
import LayoutDefault from "../components/layouts/LayoutDefault.vue";

import bookAPI from "../components/api/book";
import employeeAPI from "../components/api/employee";

export default {
  name: "ThemSach",
  created() {
    this.$emit("update:layout", LayoutDefault);
    this.getImporter();
  },
  data() {
    return {
      form: {
        name: "",
        genres: "A",
        author: "",
        year: null,
        publisher: "",
        inputDate: null,
        price: null,
        importer: "",
      },
      importers: [],
    };
  },
  methods: {
    async addBook() {
      if (new Date().getFullYear() - this.year <= 8) {
        await bookAPI.create(this.form).then((res) => {
          if (res.status == 200) alert("Successfull!");
        });
      } else alert("Chỉ nhận sách xuất bản trong vòng 8 năm");
    },
    async getImporter() {
      await employeeAPI.getEmployeeByDepartment("Thủ Kho").then((response) => {
        for (let item in response.data) {
          this.importers.push(response.data[item].name);
          this.form.importer = this.importers[0];
        }
      });
    },
  },
  mounted() {
    console.log("Mounted!");
  },
};
</script>
<style scoped>
.container {
  margin: 10%;
  margin-top: 5%;
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
