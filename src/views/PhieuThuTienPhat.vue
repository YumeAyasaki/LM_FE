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
        <select
          name="nguoi-tiep-nhan"
          id="nguoi-tiep-nhan"
          class="select-label"
          v-model="form.employee"
        >
          <option v-for="person in employees" :key="person">
            {{ person }}
          </option>
        </select>
      </div>
      <button v-on:click.prevent="handleSubmit" class="btn" type="submit">
        Lập phiếu thu tiền phạt
      </button>
    </form>
  </div>
</template>

<script>
import employeeAPI from "../components/api/employee";
import readerAPI from "../components/api/reader";

import TitleItem from "../components/utils/TitleItem.vue";

export default {
  name: "ThuTienPhat",
  created() {
    this.getEmployees();
  },
  components: { TitleItem },
  data: function () {
    return {
      form: {
        name: "",
        debt: 0,
        money: 0,
        remain: 0,
        employee: "",
      },
      employees: [],
    };
  },
  methods: {
    async handleSubmit() {
      await readerAPI.getReaderByName(this.form.name, "").then((res) => {
        let reader = {
          email: res.data.email,
          address: res.data.address,
          createAt: res.data.createAt,
          totalLoan: res.data.totalLoan,
          name: res.data.name,
          type: res.data.type,
          dateOfBirth: res.data.dateOfBirth,
          createPerson: res.data.createPerson,
        };
        readerAPI.update(res.data.id, reader, "");
      });
    },
    async getEmployees() {
      await employeeAPI.getEmployeeByDepartment("Thủ Thư").then((response) => {
        for (let item in response.data) {
          this.employees.push(response.data[item].name);
          this.form.employee = this.employees[0];
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
