<template>
  <div>
    正在观看 ID 为 {{ $route.params.id }} 的文章
    <p>
      <span>{{ $route.fullPath }}</span>
    </p>
  </div>
</template>

<script>

export default {
  name: "PostDetail",
  created() {
    this.$watch(
        () => this.$route.params,
        (toParams, previousParams) => {
          console.log("before: " + previousParams.id);
          // 对路由变化做出响应...
          console.log("now:    " + toParams.id);
        }
    )
  },
  mounted() {
    alert("即将展示文章 ID 为 " + this.$route.params.id + " 的文章详情");
  },
}
</script>

<style scoped>

</style>