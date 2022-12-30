<template>
    <div class="container">
        <h1> Mượn sách</h1>
        <form>

                <label>Tên sách: </label>
                <input type="text" class = "text-input"/>
            
            <button class="btn"> Xem kết quả </button>
        </form>

        <table class = "table">
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
    </div>
</template>

<script>
export default {
    name: 'MuonSach'
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