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
        <router-link to="them-sach">Tiếp nhận sách mới</router-link>
      </li>
      <li>
        <router-link to="tra-cuu-sach">Tra cứu sách</router-link>
      </li>
      <li>
        <router-link to="muon-sach">Mượn sách</router-link>
      </li>
      <li>
        <router-link to="tra-sach">Trả sách</router-link>
      </li>
      <li>
        <router-link to="mat-sach">Ghi nhận mất sách</router-link>
      </li>
      <li>
        <router-link to="thu-phat">Lập phiếu thu tiền phạt</router-link>
      </li>
      <li>
        <router-link to="thanh-ly-sach">Thanh lý sách</router-link>
      </li>
      <li>
        <router-link to="bao-cao">Báo cáo</router-link>
      </li>
      <li>
        <router-link to="quan-ly">Quản lý</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
const token = localStorage.getItem("token");
if (token == null) {
  // haven't login
} else {
  // login
}
console.log("Token: ", token);

export default {
  name: "MenuItem",
};
</script>

<style scoped>
body {
  font-family: "Tahoma", sans-serif;
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
