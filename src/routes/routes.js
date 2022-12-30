import { createRouter, createWebHistory } from "vue-router";
import ThemNhanVien from "../components/pages/ThemNhanVien.vue";
import ThemDocGia from "../components/pages/ThemDocGia.vue";
import ThemSach from "../components/pages/ThemSach.vue";
import TraCuuSach from "../components/pages/TraCuuSach.vue";
import MatSach from "../components/pages/MatSach.vue";
import HomePage from "../components/pages/HomePage";

const routes = [
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/them-nhan-vien", ///path của route
    name: "ThemNhanVien", // tên route
    component: ThemNhanVien, // component route sử dụng
  },
  {
    path: "/lap-the-doc-gia", ///path của route
    name: "ThemDocGia", // tên route
    component: ThemDocGia, // component route sử dụng
  },
  {
    path: "/them-sach", ///path của route
    name: "ThemSach", // tên route
    component: ThemSach, // component route sử dụng
  },
  {
    path: "/tra-cuu-sach", ///path của route
    name: "TraCuuSach", // tên route
    component: TraCuuSach, // component route sử dụng
  },
  {
    path: "/mat-sach", ///path của route
    name: "MatSach", // tên route
    component: MatSach, // component route sử dụng
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
