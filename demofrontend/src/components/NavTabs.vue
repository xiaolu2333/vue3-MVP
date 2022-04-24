<template>
  <div id="navs">
    <button
        v-for="(tab,key) in tabs"
        :key="key"
        class="nav"
    >
      {{ tab.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: "NavTabs",
  data() {
    return {
      tabs: {
        home: {
          name: "Home",
          path: "#"
        },
        posts: {
          name: "Posts",
          path: "#"
        },
        about: {
          name: "About",
          path: "#"
        }
      }
    }
  },
}
</script>

<style scoped>
#navs {
  display: flex;
  justify-content: space-around;
  /* 背景色渐变 */
  background: linear-gradient(#35495E, #41B883);
  padding: 10px;
}

.nav {
  /* 字体大小 */
  font: 1.3em sans-serif;
  /* 字体增粗 */
  font-weight: bold;
  /* 字体阴影 */
  text-shadow: 0 0 3px #fff;
  /* 去除边框 */
  border: none;
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
</style>
