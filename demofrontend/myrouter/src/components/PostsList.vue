<template>
  <div class="post-list">
    <h1>📚Posts List</h1>
    <div v-for="(item,index) in posts.results" :key="index">
      <div class="post-item">
        <button class="post">
          <router-link :to="{ name: 'post-detail', params: { id: item.id } }"
                       class="post-router-link"
          >
            📔 {{ item.title }}
          </router-link>
        </button>
      </div>
    </div>
  </div>
  <pagination-buttons :size="posts.pageSize"
                      :page="posts.currentPage"
                      :total="posts.totalPages"
                      :max="5"
                      :hasPosts="this.hasPosts"
                      @change="changePage($event)"
  >
  </pagination-buttons>
</template>

<script>
import PaginationButtons from "@/components/PaginationButtons";

export default {
  name: "PostsList",
  data() {
    return {
      posts: {},
      hasPosts: false,
    }
  },
  created() {
    // watch 路由的参数，以便再次获取数据
    this.$watch(
        () => this.$route.query.page,
        () => {
          this.getPost(this.$route.query.page)
        },
        {immediate: true}
    )
  },
  methods: {
    fetchData() {
      this.loading = true;
      // 用你的数据获取 util 或 API 替换 `getPost`
      // console.log("query: " + this.$route.query.page)
      this.getPost(this.$route.query.page)
    },
    getPost(pageID) {
      // 获取数据
      if (pageID === undefined) {
        pageID = 1
      }
      // console.log("page: " + pageID)
      const axios = require('axios');
      const url = 'http://127.0.0.1:8000/api/post/?page=' + pageID;
      // console.log("url: " + url)
      // 请求文章列表数据
      axios.get(url)
          .then((response) => {
            // console.log("response data: " + response.data)
            this.posts = response.data;
            this.hasPosts = true;
            // console.log("posts: " + this.posts)
          })
          .catch(
              function (error) {
                console.log("error: " + error);
              })
          .finally({
            // 不管成功失败，都会调用
          })
    },
    changePage(pageNum) {
      if (pageNum !== this.posts.currentPage) {
        this.getPost(pageNum);
      }
    },
  },
  components: {
    PaginationButtons
  }
}
</script>

<style scoped>
.post-list {
  color: #41B883;
  text-align: left;
  padding-left: 10px;
}

.post {
  /* 取消按钮边框 */
  border: none;
  background-color: #fff;
  padding: 10px;
  font-weight: bolder;
  font-size: 25px;
}

.post-router-link {
  color: #41B883;
  text-decoration: none;
}

.post-router-link:hover {
  color: #35495E;
}
</style>