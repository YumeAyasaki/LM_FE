<template>
    <div class="container">
        <h1> Lập thẻ độc giả</h1>
        <form>

                <label>Họ và tên: </label>
                <input type="text" class = "text-input"/>

                <label>Ngày sinh: </label>
                <input type="date" class = "date-input"/>

                <label>Loại độc giả: </label>
                <select name="loai-doc-gia" id ="loai-doc-gia" class = "select-label">
                    <option>x</option>
                    <option>y</option>
                </select>

                <label>Email: </label>
                <input type="text" class = "text-input"/>

                <label>Địa chỉ: </label>
                <input type="text" class = "text-input"/>

                <label>Ngày lập thẻ: </label>
                <input type="date" class = "date-input"/>

                <label>Người lập thẻ: </label>
                <select name="nguoi-lap-the" id ="nguoi-lap-the" class = "select-label">
                    <option>Nguyễn Văn A</option>
                    <option>Trần Thị B</option>
                </select>
            
            <button class="btn"> Lập thẻ </button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ThemDocGia'
}
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