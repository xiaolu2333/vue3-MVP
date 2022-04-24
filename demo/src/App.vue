<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <h2> Welcome to XXX's BLOG</h2>
  <NavTabs></NavTabs>

  <person-info :info="info">USER:</person-info>

  <div>
    <custom-input v-model="searchText"></custom-input>
  </div>

  <div :style="{ fontSize: postFontSize + 'em' }">
    <posts-info v-for="(post, key) in posts" :key="key"
                :title="post.title"
                :hot="post.hot"
                :likes="post.likes"
                :tags="post.tags"
                @like="likePost(post)"
    ></posts-info>
  </div>
</template>

<script>
import PersonInfo from './components/PersonInfo.vue'
import PostsInfo from './components/PostsInfo.vue'
import CustomInput from './components/CustomInput.vue'
import NavTabs from "@/components/NavTabs";

export default {
  name: 'App',
  data() {
    return {
      info: {
        name: 'xiaolu2333',
      },
      posts: [
        {id: 1, title: 'My journey with Vue😘', likes: 23, hot: false, tags: ['vue', 'vue.js', 'vue3']},
        {id: 2, title: 'Blogging with Vue🚄', likes: 14, hot: false, tags: ['vue.js', 'vue3']},
        {id: 3, title: 'Why Vue is so interesting🥰', likes: 100, hot: true, tags: ['vue', 'vue3']}
      ],
      styleObject: {
        title: 'color: green',
        info: 'color: blue',
      },
      postFontSize: 1,
      searchText: '',
    }
  },
  methods: {
    likePost(post) {
      post.likes += 1
    }
  },
  components: {
    PersonInfo,
    PostsInfo,
    CustomInput,
    NavTabs,
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
