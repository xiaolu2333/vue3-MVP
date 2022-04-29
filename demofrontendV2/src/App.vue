<template>
  <!--  logo  -->
  <img alt="Vue logo" src="./assets/logo.png">

  <h2> Welcome to XXX's BLOG</h2>

  <!--  三个顶级路由入口  -->
  <div id="navs">
    <router-link to="/" class="nav">Home</router-link>
    <router-link to="/posts" class="nav">Posts</router-link>
    <router-link to="/about" class="nav">About</router-link>
  </div>

  <!--  三个顶级路由入口的公共默认出口，展示当前入口内部的渲染结果  -->
  <div id="default-router-view">
    <router-view></router-view>
  </div>
  <!--  顶级路由的指定出口 -->
  <div id="named-router-view">
    <div id="PostsSearch-router-view" class="router-view">
      <router-view name="PostsSearch"></router-view>
    </div>
    <div id="PostsRecommend-router-view" class="router-view">
      <router-view name="PostsRecommend"></router-view>
    </div>
    <div id="PostsList-router-view" class="router-view">
      <router-view name="PostsList"></router-view>
    </div>
  </div>

  <footer>
    <p>Powered by: Vue 3</p>
    <p>Contact information: <a href="mailto:someone@example.com">someone@example.com</a>.</p>
  </footer>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  text-align: center;
}

#navs {
  display: flex;
  justify-content: space-around;
  /* 背景色渐变 */
  background: linear-gradient(#35495E, #41B883);
  padding: 20px;
}

.nav {
  /* 字体大小 */
  font: 1.3em sans-serif;
  /* 字体增粗 */
  font-weight: bold;
  /* 字体阴影 */
  text-shadow: 0 0 3px #fff;
  /* 去除下划线 */
  text-decoration: none;
  /* 背景透明 */
  background: transparent;
  color: white;
}

.nav:hover {
  color: #35495E;
}

.nav:active {
  /* 字体阴影 */
  text-shadow: 0 0 3px #35495E;
}

#named-router-view {
  margin-bottom: 20px;;
}

#named-router-view > #PostsRecommend-router-view {
  background-color: #fff;
  text-align: left;
}

#named-router-view > #PostsList-router-view {
  background-color: #fff;
  text-align: left;
}

footer {
  color: #35495E;
  text-align: center;
  padding: 1px;
  /* 背景色渐变 */
  background: linear-gradient(#41B883, #35495E);
}
</style>