import { createRouter, createWebHistory } from "vue-router";

import ThemNhanVien from "../views/ThemNhanVien.vue";
import ThemDocGia from "../views/ThemDocGia.vue";
import ThemSach from "../views/ThemSach.vue";
import TraCuuSach from "../views/TraCuuSach.vue";
import MatSach from "../views/MatSach.vue";
import MuonSach from "../views/MuonSach.vue";
import TraSach from "../views/TraSach.vue";

import ThuTienPhat from "../views/PhieuThuTienPhat.vue";
import ThanhLySach from "../views/ThanhLySach.vue";
import BaoCao from "../views/BaoCao.vue";
import QuanLy from "../views/QuanLy.vue";

import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
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
  {
    path: "/muon-sach", ///path của route
    name: "MuonSach", // tên route
    component: MuonSach, // component route sử dụng
  },
  {
    path: "/tra-sach", ///path của route
    name: "TraSach", // tên route
    component: TraSach, // component route sử dụng
  },
  {
    path: "/thu-phat",
    name: "ThuPhat",
    component: ThuTienPhat,
  },
  {
    path: "/thanh-ly-sach",
    name: "ThanhLySach",
    component: ThanhLySach,
  },
  {
    path: "/bao-cao",
    name: "BaoCao",
    component: BaoCao,
  },
  {
    path: "/quan-ly",
    name: "QuanLy",
    component: QuanLy,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
