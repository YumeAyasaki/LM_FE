<template>
  <div class="ThanhLySach">
    <TitleItem title="Thanh lý sách"></TitleItem>
    <form>
      <div>
        <label>Họ tên người thanh lý</label>
        <input v-model="form.name" />
      </div>
      <div>
        <label>Ngày thanh lý</label>
        <input type="date" v-model="form.date" />
      </div>
      <button>Thanh lý sách</button>
    </form>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>Tên sách</th>
            <th>Ngày nhập</th>
            <th>Lý do</th>
            <th>Người nhận</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item._id">
            <td>{{ item.bookname }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.reason }}</td>
            <td>{{ item.employee }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import LayoutDefault from "../components/layouts/LayoutDefault.vue";
import TitleItem from "../components/utils/TitleItem.vue";

console.log("ThanhLySach");

console.log(import.meta.env.VITE_BACKEND_LOCAL);
const url = import.meta.env.VITE_BACKEND_LOCAL;

export default {
  name: "ThanhLySach",
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
  components: { TitleItem },
  data: function () {
    return {
      items: [
        {
          _id: "1",
          bookname: "1",
          date: "1/1/1111",
          reason: "1",
          employee: "1",
        },
        {
          _id: "1",
          bookname: "1",
          date: "1/1/1111",
          reason: "1",
          employee: "1",
        },
      ],
      form: {
        name: "",
        date: new Date("01/01/2022"),
      },
    };
  },
};
</script>

<style>
table {
  margin-top: 10pt;
  border-collapse: collapse;
  width: 100%;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  background-color: #888889;
  color: white;
  padding: 0.5rem;
  font-weight: bold;
}

th,
td {
  text-align: left;
  padding: 8px;
}
</style>
