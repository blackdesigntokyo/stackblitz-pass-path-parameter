import { createRouter, createWebHistory } from 'vue-router';
// 各ページに対応するコンポーネントをインポートします
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

// ルートの定義
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
];

// ルーターインスタンスの作成
const router = createRouter({
  history: createWebHistory(), // HTML5 History API を使用
  routes, // routes: routes と同じ
});

export default router;
