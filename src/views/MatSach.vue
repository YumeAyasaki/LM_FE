<template>
  <div class="container">
    <TitleItem title="Ghi nhận mất sách" />
    <form>
      <label>Tên sách: </label>
      <input type="text" class="text-input" v-model="form.bookName" />

      <label>Mã sách: </label>
      <input type="text" class="text-input" v-model="form.bookId" />

      <label>Ngày ghi nhận: </label>
      <input type="date" class="date-input" v-model="form.date" />

      <label>Họ tên độc giả: </label>
      <input type="text" class="text-input" v-model="form.readerName" />

      <label>Mã độc giả: </label>
      <input type="text" class="text-input" v-model="form.readerId" />

      <label>Tiền phạt: </label>
      <input type="number" class="text-input" v-model="form.compensation" />

      <label>Người ghi nhận: </label>
      <select
        name="nguoi-ghi-nhan"
        id="nguoi-ghi-nhan"
        class="select-label"
        v-model="form.employee"
      >
        <option v-for="person in employees" :key="person">{{ person }}</option>
      </select>

      <button class="btn" @click.prevent="GhiNhanMatSach">
        Ghi nhận mất sách
      </button>
    </form>
  </div>
</template>

<script>
import TitleItem from "../components/utils/TitleItem.vue";

import employeeAPI from "../components/api/employee";
import lostBookAPI from "../components/api/lostBook";

export default {
  name: "MatSach",
  data() {
    return {
      form: {
        bookName: "",
        bookId: "",
        readerName: "",
        readerId: "",
        date: null,
        employee: "",
        compensation: 0,
      },
      employees: [],
    };
  },
  components: { TitleItem },
  methods: {
    async getCreatePerson() {
      await employeeAPI
        .getEmployeeByDepartment("Thủ Thư", "")
        .then((response) => {
          for (let item in response.data) {
            this.employees.push(response.data[item].name);
            this.employee = this.employees[0];
          }
        });
    },
    async GhiNhanMatSach() {
      const Data = {
        bookName: this.bookName,
        bookId: this.bookId,
        date: this.date,
        readerName: this.readerName,
        readerId: this.readerId,
        employee: this.employee,
        compensation: this.compensation,
      };
      await lostBookAPI.create(Data, "").then((response) => {
        console.log(response);
        alert("Successfull!");
      });
    },
  },
  created() {
    this.getCreatePerson();
  },

  mounted() {
    console.log("Mounted!");
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
