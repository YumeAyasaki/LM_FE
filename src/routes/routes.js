import { createRouter, createWebHistory } from 'vue-router';
import ThemNhanVien from '../components/ThemNhanVien.vue';
import ThemDocGia from '../components/ThemDocGia.vue';
import ThemSach from '../components/ThemSach.vue';


const routes = [{
    path: '/them-nhan-vien', ///path của route
    name: 'ThemNhanVien', // tên route
    component: ThemNhanVien // component route sử dụng
    },
    {
        path: '/lap-the-doc-gia', ///path của route
        name: 'ThemDocGia', // tên route
        component: ThemDocGia // component route sử dụng
    },
    {
        path: '/them-sach', ///path của route
        name: 'ThemSach', // tên route
        component: ThemSach // component route sử dụng
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


