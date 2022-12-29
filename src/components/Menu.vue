<template>
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>QUẢN LÝ THƯ VIỆN</h3>
            </div>

            <ul class="list-unstyled components">
                <li>
                    <router-link to="them-nhan-vien">Tiếp nhận nhân viên</router-link>
                </li>
                <li>
                    <router-link to="lap-the-doc-gia">Lập thẻ độc giả</router-link>
                </li>
                <li>
                    <a href="#">Tiếp nhận sách mới</a>
                </li>
                <li>
                    <a href="#">Tra cứu sách</a>
                </li>
                <li>
                    <a href="#">Mượn sách</a>
                </li>
                <li>
                    <a href="#">Trả sách</a>
                </li>
                <li>
                    <a href="#">Ghi nhận mất sách</a>
                </li>
                <li>
                    <a href="#">Lập phiếu thu tiền phạt</a>
                </li>
                <li>
                    <a href="#">Thanh lý sách</a>
                </li>
                <li>
                    <a href="#">Báo cáo</a>
                </li>
                <li>
                    <a href="#">Quản lý</a>
                </li>
            </ul>
        </nav>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style scoped>

body {
    font-family: 'Tahoma', sans-serif;
    background: #fafafa;
    margin: 0;
    padding: 0;

}
a,
a:hover,
a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

.sidebar {
    display: block;
    float: left;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    min-height: 100vh;
    background: #b4b6be;
    color: #fff;
    transition: all 0.3s;
    display: block;
}

#sidebar .sidebar-header {
    padding: 15px;
    background: #888889;
}

#sidebar ul.components {
    padding: 20px 0;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}

#sidebar ul li a:hover {
    color: #000;
    background: #fff;
}

</style>