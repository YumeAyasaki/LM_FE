<template>
  <div class="container">
    <TitleItem title="Lập thẻ độc giả" />
    <form @submit.prevent="addReader">
      <label>Họ và tên: </label>
      <input type="text" class="text-input" v-model="form.name" />

      <label>Ngày sinh: </label>
      <input type="date" class="date-input" v-model="form.dateOfBirth" />

      <label>Loại độc giả: </label>
      <select
        name="loai-doc-gia"
        id="loai-doc-gia"
        class="select-label"
        v-model="form.type"
      >
        <option>X</option>
        <option>Y</option>
      </select>

      <label>Email: </label>
      <input type="text" class="text-input" v-model="form.email" />

      <label>Địa chỉ: </label>
      <input type="text" class="text-input" v-model="form.address" />

      <label>Ngày lập thẻ: </label>
      <input type="date" class="date-input" v-model="form.createAt" />

      <label>Người lập thẻ: </label>
      <select
        name="nguoi-lap-the"
        id="nguoi-lap-the"
        class="select-label"
        v-model="form.createPerson"
      >
        <option v-for="person in createPersons" :key="person">
          {{ person }}
        </option>
      </select>

      <button class="btn">Lập thẻ</button>
    </form>
  </div>
</template>

<script>
import TitleItem from "../components/utils/TitleItem.vue";

import readerAPI from "../components/api/reader";
import employeeAPI from "../components/api/employee";

export default {
  name: "ThemDocGia",
  created() {
    this.getCreatePerson();
  },
  components: {
    TitleItem,
  },
  data() {
    return {
      form: {
        name: "",
        type: "X",
        email: null,
        dateOfBirth: null,
        address: "",
        createAt: null,
        createPerson: "",
      },
      createPersons: [],
    };
  },
  methods: {
    async addReader() {
      const age =
        new Date().getFullYear() - parseInt(this.form.dateOfBirth.slice(0, 4));

      if (18 <= age && age <= 55) {
        await readerAPI.create(this.form, "").then((res) => {
          if (res.status == 200) alert("Successfull!");
        });
      } else alert("Tuổi độc giả phải từ 18 đến 55");
    },

    async getCreatePerson() {
      await employeeAPI.getEmployeeByDepartment("Thủ Thư").then((response) => {
        for (let item in response.data) {
          this.createPersons.push(response.data[item].name);
          this.createPerson = this.createPersons[0];
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
