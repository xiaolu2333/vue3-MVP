<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <h2> Welcome to XXX's BLOG</h2>

  <NavTabs></NavTabs>

  <person-info :info=info>USER:</person-info>

  <custom-input v-model="searchText"></custom-input>

  <posts-info v-for="(post, key) in posts.results" :key="key"
              :title="post.title"
              :ishot="post.ishot"
              :likes="post.likes"
              :tags="post.tags"
              @like="likePost(post)"
  ></posts-info>

  <PaginationButtons :size="posts.pageSize"
                     :page="posts.currentPage"
                     :total="posts.totalPages"
                     :max="5"
                     @change="changePage"
  >
  </PaginationButtons>
</template>


<script>
import PersonInfo from './components/PersonInfo.vue'
import PostsInfo from './components/PostsInfo.vue'
import CustomInput from './components/CustomInput.vue'
import NavTabs from "@/components/NavTabs";
import PaginationButtons from "@/components/PaginationButtons";

export default {
  name: 'App',

  data() {
    return {
      info: {
        name: 'xiaolu2333',
      },
      posts: {},
      searchText: '',
    }
  },
  // 在组件初始化之后，调用一次
  mounted() {
    this.getPosts(1);
  },
  methods: {
    // 文章点赞
    likePost(post) {
      post.likes += 1
    },
    // 分页改变
    changePage(page) {
      if (page !== this.posts.currentPage) {
        this.getPosts(page);
      }
    },
    // 请求文章列表数据
    getPosts(page) {
      const axios = require('axios');
      const url = 'http://127.0.0.1:8000/api/post/?page=' + page;
      // 请求文章列表数据
      axios.get(url)
          .then(
              function (response) {
                this.posts = response.data;
              }.bind(this)  // 将this绑定到当前组件
          )
          .catch(error => { // 请求失败
            console.log(error)
            this.errored = true
          })
          .finally({
            // 不管成功失败，都会调用
          })
    }
  },
  // 子组件
  components: {
    NavTabs,
    PersonInfo,
    CustomInput,
    PostsInfo,
    PaginationButtons,
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
