<template>
    <div class="container">
        <h1> Trả sách</h1>
        <form id = "thong-tin-phieu-tra">
            <label>Mã độc giả: </label>
            <input type="text" class = "text-input" v-model="reader_id"/>
                
            <button class="btn" @click.prevent="viewLoanBook"> Xem</button>
        </form>

        <form>
            <div id = "thong-tin-phieu-tra">
                <label>Ngày trả: </label>
                <input type="date" class = "date-input" v-model="returnDate"/>

                <label>Tiền phạt kỳ này: </label>
                <input type="text" class = "text-input" v-model="phat"/>

                <label>Tiền nợ: </label>
                <input type="text" class = "text-input" v-model="no"/>

                <label>Tổng nợ: </label>
                <input type="text" class = "text-input" v-model="tong_no"/>
            </div>
            <table class = "table" id ="table-sach-tra">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã sách</th>
                        <th>Tên sách</th>
                        <th>Thể loại</th>
                        <th>Tác giả</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="book in listbook" :key="book">
                    
                    <td>{{ listbook.indexOf(book) + 1 }}</td>
                    <td>{{book._id}}</td>
                    <td>{{book.name}}</td>
                    <td>{{book.genres}}</td>
                    <td>{{book.author}}</td>
                    <td> <button @click.prevent="remomveBookFromList(listbook.indexOf(book))">Xóa</button></td>
                </tr>

                </tbody>
            </table>

            <button class="btn btn-tra-sach" @click.prevent="TraSach"> Trả sách</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'TraSach',
    data() {
        return {
            reader_id:'',
            returnDate: null,
            listbook: [],
            no: 0,
            tong_no: 0,
            phat: 0
   
        };
    },
    methods: {
        async viewLoanBook(){
            this.listbook = [];
            let url = "https://easy-gold-goshawk-vest.cyclic.app/BookLoan/" + this.reader_id;
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
        remomveBookFromList(index)
        {
            this.listbook.splice(index,1);
        },
        async TraSach(){
            for (var i = 0; i < this.listbook.length; i++)
            {
                const Data = {
                    reader_id : this.reader_id,
                    returnDate : this.returnDate,
                    book: this.listbook[i]._id,
                    
                }
                console.log(Data);
                let url = "https://easy-gold-goshawk-vest.cyclic.app/BookLoan";
                await axios.put(url, Data).then(response => {
                        console.log(response);
                    });
            }
            alert("Successfull!");
        },    
    },
    
}
</script>
<style scoped>

.container {
    margin-left: 10%;
    margin-right: 10%;

    margin-top: 20px;
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

#thong-tin-phieu-tra {
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

.btn-tra-sach {
    float: right;
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