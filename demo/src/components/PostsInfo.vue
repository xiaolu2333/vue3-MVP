<template>
  <div class="PostsInfo">
    <h3>{{ title }}</h3>
    <div class="postItem">
      <span v-if="hot" class="isHot">🔥HOT </span>
      <button @click="$emit('like')" class="isLike">{{ likes }} 💖</button>
      🚩:<span v-for="(tag,key) in tags" :key="key" class="areTags"><a>{{ tag + " " }} </a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostsInfo',
  props: ['title', 'likes', 'hot', 'tags', 'style']
}
</script>

<style scoped>
.PostsInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

h3 {
  margin: 20px;
  color: #41B883;
}

span[class^='is'], button[class^='is'] {
  margin-right: 20px;
  border: none;
  background-color: white;
}

.isLike:hover {
  cursor: pointer;
  background-color: #41B883;
}
</style>