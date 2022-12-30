<template>
    <div class="container">
        <h1> Trả sách</h1>
        <form id = "thong-tin-phieu-tra">
            <label>Mã độc giả: </label>
            <input type="text" class = "text-input"/>
                
            <button class="btn"> Xem</button>
        </form>

        <form>
            <div id = "thong-tin-phieu-tra">
                <label>Ngày trả: </label>
                <input type="date" class = "date-input"/>

                <label>Tiền phạt kỳ này: </label>
                <input type="text" class = "text-input"/>

                <label>Tiền nợ: </label>
                <input type="text" class = "text-input"/>

                <label>Tổng nợ: </label>
                <input type="text" class = "text-input"/>
            </div>
            <table class = "table" id ="table-sach-tra">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã sách</th>
                        <th>Tên sách</th>
                        <th>Thể loại</th>
                        <th>Tác giả</th>
                        <th>Tình Trạng</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>A123</td>
                        <td>Sách Văn A</td>
                        <td>Thể loại thị B</td>
                        <td>Tác giả văn C</td>
                        <td>Tình Trạng D</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>A123</td>
                        <td>Sách Văn A</td>
                        <td>Thể loại thị B</td>
                        <td>Tác giả văn C</td>
                        <td>Tình Trạng D</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>A123</td>
                        <td>Sách Văn A</td>
                        <td>Thể loại thị B</td>
                        <td>Tác giả văn C</td>
                        <td>Tình Trạng D</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>A123</td>
                        <td>Sách Văn A</td>
                        <td>Thể loại thị B</td>
                        <td>Tác giả văn C</td>
                        <td>Tình Trạng D</td>
                    </tr>
                </tbody>
            </table>

            <button class="btn btn-tra-sach"> Trả sách</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'TraSach'
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