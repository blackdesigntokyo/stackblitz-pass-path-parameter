// Vue Router v4の必要な関数をインポート
import { createRouter, createWebHistory } from 'vue-router'
// 各ページコンポーネントをインポート（静的インポート）
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'

// ルート定義の配列
const routes = [
  {
    // ルートパス（/）の設定
    path: '/',
    name: 'Home', // ルートの名前（プログラマティックナビゲーションで使用）
    component: Home // 表示するコンポーネント
  },
  {
    // /aboutパスの設定
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 動的インポート（コード分割）でパフォーマンス向上
    // このルートにアクセスした時のみAbout.vueが読み込まれる
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // 動的ルート：:aidは記事IDのパラメータ
    path: '/article/:aid',
    name: 'Article',
    component: Article, // Article.vueコンポーネントを表示
    // props: true

    // props: routes => ({
    //   aid: Number(routes.params.aid)
    // })
    // コメントアウトされたprops設定
    // props: true → ルートパラメータをpropsとして渡す
    // 下のコメントは関数形式でaidを数値に変換してpropsに渡す設定
  }
]

// ルーターインスタンスの作成
const router = createRouter({
  // HTML5 History APIを使用（URLに#が付かない）
  history: createWebHistory(process.env.BASE_URL),
  routes // 上で定義したルート配列を設定
})

// 作成したルーターインスタンスをエクスポート（main.jsなどで使用）
export default router