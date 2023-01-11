<template>
  <div class="container">
    <TitleItem title="Sửa thông tin sách" />
    <form form @submit.prevent="addBook">
      <label>Tên sách: </label>
      <input type="text" class="text-input" v-model="name" />

      <label>Thể loại: </label>
      <select
        name="the-loai"
        id="the-loai"
        class="select-label"
        v-model="genres"
      >
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>

      <label>Tác giả </label>
      <input type="text" class="text-input" v-model="author" />

      <label>Năm xuất bản: </label>
      <input type="number" class="text-input" v-model="year" />

      <label>Nhà xuất bản: </label>
      <input type="text" class="text-input" v-model="publisher" />

      <label>Ngày nhập: </label>
      <input type="date" class="date-input" v-model="inputDate" />

      <label>Trị giá: </label>
      <input type="number" step="0.01" class="text-input" v-model="price" />

      <label>Người tiếp nhận: </label>
      <select
        name="nguoi-tiep-nhan"
        id="nguoi-tiep-nhan"
        class="select-label"
        v-model="importer"
      >
        <option v-for="person in importers" :key="person">{{ person }}</option>
      </select>

      <button class="btn">Tiếp nhận</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import TitleItem from "../components/utils/TitleItem.vue";

export default {
  name: "EditBook",
  data() {
    return {
      name: "",
      genres: "A",
      author: "",
      year: null,
      publisher: "",
      inputDate: null,
      price: null,
      importer: "",
      importers: [],
    };
  },
  components: { TitleItem },
  methods: {
    async addBook() {
      if (new Date().getFullYear() - this.year <= 8) {
        const formData = {
          name: this.name,
          genres: this.genres,
          author: this.author,
          year: this.year,
          publisher: this.publisher,
          inputDate: this.inputDate,
          price: this.price,
          importer: this.importer,
        };
        let url =
          "https://easy-gold-goshawk-vest.cyclic.app/Book/" +
          this.$route.params.id;
        console.log(url);
        await axios.put(url, formData).then((response) => {
          console.log(response);
          alert("Successfull!");
        });
      } else alert("Chỉ nhận sách xuất bản trong vòng 8 năm");
    },
    async getImporter() {
      let url =
        "https://easy-gold-goshawk-vest.cyclic.app/Employee/department/Thủ Kho";
      await axios.get(url).then((response) => {
        for (let item in response.data) {
          this.importers.push(response.data[item].name);
          this.importer = this.importers[0];
        }
      });
    },
    async getBookById() {
      console.log(this.$route.params.id);
      let url =
        "https://easy-gold-goshawk-vest.cyclic.app/Book/" +
        this.$route.params.id;
      await axios.get(url).then((response) => {
        for (let item in response.data) {
          this.name = response.data[item].name;
          this.genres = response.data[item].genres;
          this.author = response.data[item].author;
          this.year = response.data[item].year;
          this.publisher = response.data[item].publisher;
          this.inputDate = response.data[item].inputDate;
          this.price = response.data[item].price;
          this.importer = response.data[item].importer;
        }
      });
    },
  },
  created() {
    this.getBookById();
    this.getImporter();
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
