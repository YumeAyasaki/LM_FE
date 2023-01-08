<template>
  <div class="container">
    <TitleItem title="Tra cứu sách" />
    <form @submit.prevent="findBook">
      <label>Tên sách: </label>
      <input type="text" class="text-input" v-model="key" />

      <button class="btn">Xem kết quả</button>
    </form>

    <table class="table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã sách</th>
          <th>Tên sách</th>
          <th>Thể loại</th>
          <th>Tác giả</th>
          <th>Tình Trạng</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="book in listbook" :key="book._id">
          <td>{{ listbook.indexOf(book) + 1 }}</td>
          <td>{{ book._id }}</td>
          <td>{{ book.name }}</td>
          <td>{{ book.genres }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.state }}</td>
          <td>
            <button
              class="btnx"
              @click.prevent="removeBook(listbook.indexOf(book))"
            >
              Xóa
            </button>
            <router-link
              :to="{ name: 'EditBook', params: { id: book._id } }"
              class="btnx"
              >Sửa</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TitleItem from "../components/utils/TitleItem.vue";

import axios from "axios";

export default {
  name: "TraCuuSach",
  data() {
    return {
      key: "",
      listbook: [],
    };
  },
  components: { TitleItem },
  methods: {
    async findBook() {
      this.listbook = [];
      let url =
        "https://easy-gold-goshawk-vest.cyclic.app/Book/?name=" + this.key;
      await axios.get(url).then((response) => {
        for (let item in response.data) {
          this.listbook.push(response.data[item]);
        }
        console.log(this.listbook);
        if (this.listbook.length == 0) alert("Khong tim thay sach");
      });
    },
    async getallBook() {
      let url = "https://easy-gold-goshawk-vest.cyclic.app/Book/all";
      await axios.get(url).then((response) => {
        for (let item in response.data) {
          this.listbook.push(response.data[item]);
        }
      });
    },

    async removeBook(index) {
      let url =
        "https://easy-gold-goshawk-vest.cyclic.app/Book/" +
        this.listbook[index]._id;
      if (confirm("Bạn có chắc muốn xóa?")) {
        console.log(url);
        await axios.delete(url);
        this.listbook.splice(index, 1);
      }
    },
  },
  created() {
    this.getallBook();
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

.btnx {
  display: inline-block;
  margin: 5px;
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
