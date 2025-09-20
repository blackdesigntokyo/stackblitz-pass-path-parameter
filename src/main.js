import { createApp } from 'vue';
import App from './App.vue';
// 作成したルーターをインポート
import router from './router';

const app = createApp(App);

// .use() を使ってルーターをアプリケーションに登録
app.use(router);

app.mount('#app');
