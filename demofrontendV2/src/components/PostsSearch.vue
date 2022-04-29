<template>
  <div>
    <div class="search">
      <div class="search-input">
        <input type="text"
               v-model="keyWord"
               placeholder="Search By Post's Title"
               class="text-input">
        <button @click="searchPosts"
                class="search-submit">SEARCH
        </button>
      </div>
    </div>
    <div v-if="getResult" class="post-list">
      <h1>📚Search Results</h1>
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
  </div>
  <pagination-buttons :size="posts.pageSize"
                      :page="posts.currentPage"
                      :total="posts.totalPages"
                      :max="5"
                      :hasPosts="this.getResult"
                      @change="changePage($event,this.keyWord)"
  >
  </pagination-buttons>

</template>

<script>
import PaginationButtons from "@/components/PaginationButtons";

export default {
  name: "PostsSearch",
  emits: ["search"],
  data() {
    return {
      keyWord: "",
      posts: {},
      getResult: false,
    }
  },
  methods: {
    searchPosts() {
      this.posts['keywords'] = this.keyWord;
      this.getPost(1, this.keyWord)
    },
    getPost(pageNum, keyWords) {
      if (pageNum === null) {
        pageNum = 1;
      }
      if (keyWords === "") {
        alert("请输入搜索内容");
        this.getResult = false;
        this.posts = {};
      } else {
        const axios = require('axios');
        const url = 'http://127.0.0.1:8000/api/searchposttitle/?page=' + pageNum + '&search=' + keyWords;
        // 请求搜索数据
        axios.get(url)
            .then((response) => {
              this.posts = response.data;
              this.getResult = true;
              this.$emit('search', this.getResult)
            })
            .catch(
                function (error) {
                  console.log("error: " + error);
                })
            .finally({
              // 不管成功失败，都会调用
            })
      }
    },
    changePage(pageNum, key) {
      if (pageNum !== this.posts.currentPage) {
        this.getPost(pageNum, key);
      }
    },
  },
  components: {
    PaginationButtons
  }
}
</script>

<style scoped>
.search {
  padding: 10px;
  text-align: right;
}

.search-input {
  border-color: #41B883;
}

.search-submit {
  background-color: #41B883;
  border-color: #41B883;
  color: #fff;
  text-shadow: 0 0 3px #fff;
  cursor: pointer;
}

.search-submit:hover {
  /* 字体阴影 */
  color: #35495E;
}

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
  /* 字体阴影 */
  text-shadow: 0 0 5px #41B883;
}
</style>