<template>
    <div class="container">
        <h1> Tiếp nhận sách mới</h1>
        <form form @submit.prevent="addBook">

                <label>Tên sách: </label>
                <input type="text" class = "text-input" v-model="name"/>

                <label>Thể loại: </label>
                <select name="the-loai" id ="the-loai" class = "select-label" v-model="genres">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>

                <label>Tác giả </label>
                <input type="text" class = "text-input" v-model="author"/>

                <label>Năm xuất bản: </label>
                <input type="number" class = "text-input" v-model="year"/>

                <label>Nhà xuất bản: </label>
                <input type="text" class = "text-input" v-model="publisher"/>   

                <label>Ngày nhập: </label>
                <input type="date" class = "date-input" v-model="inputDate"/>

                <label>Trị giá: </label>
                <input type="number" step=0.01 class = "text-input" v-model="price"/>

                <label>Người tiếp nhận: </label>
                <select name="nguoi-tiep-nhan" id ="nguoi-tiep-nhan" class = "select-label" v-model="importer">
                    <option>Nguyễn Văn A</option>
                    <option>Trần Thị B</option>
                </select>
            
            <button class="btn"> Tiếp nhận</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ThemSach',
    data() {
        return {
            name: '',
            genres: 'A',
            author: '',
            year: null,
            publisher: '',
            inputDate: null,
            price: null,
            importer:'',

        };
    },
    methods :{
        async addBook(){
            if (new Date().getFullYear() - this.year <=8)
            {
                let formData = new formData();
                formData.append('name',this.name);
                formData.append('genres',this.genres);
                formData.append('author',this.author);
                formData.append('year',this.year);
                formData.append('publisher',this.publisher);
                formData.append('inputDate',this.inputDate);
                formData.append('price',this.price);
                formData.append('importer',this.importer);
                alert("zz");
                let url = "https://easy-gold-goshawk-vest.cyclic.app/Book";
                await axios.post(url, formData).then((response) => {
                    console.log(response);
                });
            }
            else alert('Chỉ nhận sách xuất bản trong vòng 8 năm')
        }
    }
}
</script>
<style scoped>

.container {
    margin: 10%;
    margin-top: 5%;
}


.text-input{
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



.select-label, .date-input {
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

    padding: 0.15rem ;
}
.btn:hover {
    background-color: #8b8f92;
}

</style>