<template>
  <div id="nav">
    <!-- Home ページへのリンク。router-link は Vue Router のコンポーネント -->
    <router-link to="/">Home</router-link> |
    <!-- About ページへのリンク -->
    <router-link to="/about">About</router-link>
  </div>
  <!-- ルートに応じたコンポーネントが表示される場所 -->
  <router-view />
</template>

<style>
/* アプリケーション全体のフォント設定とスタイリング */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; /* フォントファミリーの優先順位設定 */
  -webkit-font-smoothing: antialiased; /* Webkit ブラウザでのフォント平滑化 */
  -moz-osx-font-smoothing: grayscale; /* Firefox での macOS フォント平滑化 */
  text-align: center; /* テキストを中央揃え */
  color: #2c3e50; /* ダークグレーの文字色 */
}

/* ナビゲーション領域のスタイリング */
#nav {
  padding: 30px; /* 上下左右に30pxの内側余白 */
}

/* ナビゲーションリンクの基本スタイル */
#nav a {
  font-weight: bold; /* フォントを太字に設定 */
  color: #2c3e50; /* リンクの色をダークグレーに設定 */
}

/* アクティブなページのリンクスタイル（現在のページを示す） */
#nav a.router-link-exact-active {
  color: #42b983; /* アクティブなリンクを緑色でハイライト */
}
</style>
