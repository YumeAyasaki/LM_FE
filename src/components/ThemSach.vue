<template>
    <div class="container">
        <h1> Tiếp nhận sách mới</h1>
        <form>

                <label>Tên sách: </label>
                <input type="text" class = "text-input"/>

                <label>Thể loại: </label>
                <select name="the-loai" id ="the-loai" class = "select-label">
                    <option>A</option>
                    <option>B</option>
                </select>

                <label>Tác giả </label>
                <input type="text" class = "text-input"/>

                <label>Năm xuất bản: </label>
                <input type="text" class = "text-input"/>

                <label>Nhà xuất bản: </label>
                <input type="text" class = "text-input"/>   

                <label>Ngày nhập: </label>
                <input type="date" class = "date-input"/>

                <label>Trị giá: </label>
                <input type="text" class = "text-input"/>

                <label>Người tiếp nhận: </label>
                <select name="nguoi-tiep-nhan" id ="nguoi-tiep-nhan" class = "select-label">
                    <option>Nguyễn Văn A</option>
                    <option>Trần Thị B</option>
                </select>
            
            <button class="btn"> Tiếp nhận</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ThemSach'
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