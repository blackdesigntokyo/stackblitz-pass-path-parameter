<template>
  <div id="nav">
    <!-- ホームページへのリンク -->
    <router-link to="/">Home</router-link> |
    <!-- Aboutページへのリンク -->
    <router-link to="/about">About</router-link> |
    <!-- 動的ルートを使用した記事ページへのリンク（ID: 108） -->
    <router-link to="/article/108">記事：No.108</router-link>
  </div>
  <!-- ルーティングされたコンポーネントが表示される場所 -->
  <router-view/>
</template>

<style>
/* アプリケーション全体のスタイル設定 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; /* フォントファミリーの指定 */
  -webkit-font-smoothing: antialiased; /* WebKitブラウザでのフォント平滑化 */
  -moz-osx-font-smoothing: grayscale; /* Firefoxでのフォント平滑化 */
  text-align: center; /* テキストを中央揃え */
  color: #2c3e50; /* テキストの色を濃い青灰色に設定 */
}

/* ナビゲーション領域のスタイル */
#nav {
  padding: 30px; /* 内側の余白を30px設定 */
}

/* ナビゲーションリンクのスタイル */
#nav a {
  font-weight: bold; /* フォントを太字に設定 */
  color: #2c3e50; /* リンクの色を濃い青灰色に設定 */
}

/* アクティブなルートのリンクスタイル（現在のページのリンク） */
#nav a.router-link-exact-active {
  color: #42b983; /* アクティブなリンクの色を緑色に変更 */
}
</style>
