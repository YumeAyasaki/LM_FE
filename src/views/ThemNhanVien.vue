<template>
  <div class="container">
    <h1>Tiếp nhận nhân viên</h1>
    <form @submit.prevent="addEmplyee">
      <label>Họ và tên: </label>
      <input type="text" class="text-input" v-model="form.name" />

      <label>Ngày sinh: </label>
      <input type="date" class="date-input" v-model="form.dateOfBirth" />

      <label>Số điện thoại: </label>
      <input type="text" class="text-input" v-model="form.phoneNumber" />

      <label>Địa chỉ: </label>
      <input type="text" class="text-input" v-model="form.address" />

      <label>Bằng cấp: </label>
      <select
        name="degree"
        id="degree"
        class="select-label"
        v-model="form.degree"
      >
        <option>Tú Tài</option>
        <option>Trung Cấp</option>
        <option>Cao Đẳng</option>
        <option>Đại Học</option>
        <option>Thạc Sĩ</option>
        <option>Tiến Sĩ</option>
      </select>

      <label>Chức vụ: </label>
      <select
        name="degree"
        id="degree"
        class="select-label"
        v-model="form.position"
      >
        <option>Giám Đốc</option>
        <option>Phó Giám Đốc</option>
        <option>Trưởng Phòng</option>
        <option>Phó Phòng</option>
        <option>Nhân Viên</option>
      </select>

      <label>Bộ phận: </label>
      <select
        name="department"
        id="department"
        class="select-label"
        v-model="form.department"
      >
        <option>Thủ Thư</option>
        <option>Thủ Quỷ</option>
        <option>Thủ Kho</option>
        <option>Ban Giám Đốc</option>
      </select>

      <button class="btn">Tiếp nhận</button>
    </form>
  </div>
</template>

<script>
import employeeAPI from "../components/api/employee";

export default {
  name: "ThemNhanVien",
  data() {
    return {
      form: {
        name: "",
        address: "",
        phoneNumber: "",
        dateOfBirth: null,
        degree: "Đại Học",
        position: "Nhân Viên",
        department: "Thủ Thư",
      },
    };
  },
  methods: {
    async addEmplyee() {
      await employeeAPI.create(this.form, "").then((res) => {
        if (res.status == 200) alert("Successfull!");
      });
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
