<template>
  <div class="post-detail">
    <div>
      <h3>{{ post.title }}</h3>
      <span v-if="post.ishot">🔥 </span>
      <button @click="likePost"
              v-if="isReloadData"
              class="post-likes"
      >{{ post.likes }}💖
      </button>
      <span> 🔖 {{ post.tags }}</span>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'

export default {
  name: "PostDetail",
  data() {
    return {
      post: {},
      isReloadData: true,
      // csrfToken: "",
    }
  },
  created() {
    this.$watch(
        () => this.$route.params.id,
        () => {
          this.fetchData()
          this.getCsrfToken()
        },
        {immediate: true}
    )
  },
  watch: {
    post: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal)
        if (newVal.likes === oldVal.likes + 1) {
          this.post.likes += 1
        }
      },
    }
  },
  methods: {
    fetchData() {
      this.loading = true;
      // 用你的数据获取 util 或 API 替换 `getPost`
      // console.log("query: " + this.$route.query.page)
      this.getPost(this.$route.params.id)
    },

    getPost(postID) {
      // 获取数据
      if (postID === undefined) {
        postID = 1
      }
      const axios = require('axios');
      const url = 'http://127.0.0.1:8000/api/post/' + postID + '/';
      // 请求文章列表数据
      axios.get(url)
          .then((response) => {
            this.post = response.data;
            axios.defaults.headers['X-CSRFToken'] = document.cookie.match(/csrftoken=([^;]+)/)[1];
          })
          .catch(
              function (error) {
                console.log("error: " + error);
              })
          .finally({
            // 不管成功失败，都会调用
          })
    },

    // 获取 csrf token
    getCsrfToken() {
      const axios = require('axios');
      const url = 'http://127.0.0.1:8000/api/getcsrftoken/'
      axios.get(url)
          .then(function (response) {
            // 保存获取的 csrf token
            this.csrfToken = response.data.csrftoken;
            console.log("成功获取 csrftoken: " + this.csrfToken);
          }.bind(this))
          .catch(function (error) {
            console.log("error: " + error);
          })
    },

    // 点赞
    likePost() {
      console.log(document.cookie)
      const axios = require('axios');
      const url = 'http://127.0.0.1:8000/api/likepost/'

      const data = {
        post_id: this.post.id,
        csrfmiddlewaretoken: document.cookie.split(';')[0].split('=')[1],
      }
      axios({
        url: url,
        method: 'post',
        data: Qs.stringify(data),
        withCredentials: true,
        headers: {
          'X-CSRFToken': document.cookie.split(';')[0].split('=')[1],
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
          .then(response => {
            alert(response.data.msg)
            // // 通过跳转到本页面，实现全部刷新
            // this.$router.push(this.$route.path)
            window.location.reload()

          })
          .catch(function (error) {
            console.log("点赞失败");
            console.log(error);
          });
    }
  }
}
</script>

<style scoped>
.post-detail {
  /* 顶部与底部间隔 */
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
}

.post-detail:hover {
  /* 底部阴影 */
  box-shadow: 4px 4px 4px #615d5d;
}

h3 {
  color: #41B883;

}

.post-likes {
  /* 右上右下变圆角 */
  border-radius: 0.25rem;
  /* 边缘模糊 */
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
  /* 左右边距 */
  margin: 0 0.5rem;
  background-color: white;
  /*边框宽度*/
  border: None;
}

.post-likes:hover {
  background-color: #41B883;
  color: #35495E;
  /* 下右阴影 */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.post-likes:active {
  transform: scale(0.95);
  background-color: #26895d;
  color: #35495E;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>