<template>
    <div class="container">
        <h1> Tra cứu sách</h1>
        <form  @submit.prevent="findBook">

                <label>Tên sách: </label>
                <input type="text" class = "text-input" v-model="key"/>
            
            <button class="btn"> Xem kết quả </button>
        </form>

        <table class = "table">
            <thead>
                <tr>
                    <th >STT</th>
                    <th>Mã sách</th>
                    <th>Tên sách</th>
                    <th>Thể loại</th>
                    <th>Tác giả</th>
                    <th>Tình Trạng</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="book in listbook" :key="book">
                    <td>{{ listbook.indexOf(book) + 1 }}</td>
                    <td>{{book._id}}</td>
                    <td>{{book.name}}</td>
                    <td>{{book.genres}}</td>
                    <td>{{book.author}}</td>
                    <td>{{book.state}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'TraCuuSach',
    data() {
        return {
            key:'',
            STT: 1,
            listbook: [],
        };
    },
    methods :{
        async findBook(){
            this.listbook = [];
            let url = "https://easy-gold-goshawk-vest.cyclic.app/Book/?name=" + this.key;
            await axios.get(url).then(response => {
            for (let item in response.data)
            {
                this.listbook.push(response.data[item]);
            };
            console.log(this.listbook);
            if (this.listbook.length == 0 ) alert('Khong tim thay sach')
            }     
            );
        },
    }
}
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

    padding: 0.15rem ;
}
.btn:hover {
    background-color: #8b8f92;
}

table {
  margin-top: 10pt;
  border-collapse: collapse;
  width: 100%;
}

tr:nth-child(even){background-color: #f2f2f2}

th {
  background-color: #888889;
  color: white;
  padding: 0.5rem;
  font-weight: bold;
}


th, td {
  text-align: left;
  padding: 8px;
}

</style>