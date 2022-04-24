<template>
  <div class="PostsInfo">
    <h3>{{ title }}</h3>
    <div class="postItem">
      <span v-if="ishot" class="isHot">🔥HOT </span>
      <button @click="$emit('like')" class="isLike">{{ likes }} 💖</button>
      🚩:<span v-for="(tag,key) in tags" :key="key" class="areTags"><a>{{ tag }} </a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostsInfo',
  props: ['info', 'title', 'likes', 'ishot', 'tags'],
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

/* 快元素向上浮起 */
.PostsInfo:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
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

.isLike {
  /* 右上右下变圆角 */
  border-radius: 0.25rem;
  /* 边缘模糊 */
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  padding: 5px;
  background-color: white;
  /*边框宽度*/
  border: None;
}

.isLike:hover {
  cursor: pointer;
  background-color: #41B883;
  color: #35495E;
  /* 下右阴影 */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.isLike:active {
  transform: scale(0.95);
  background-color: #26895d;
  color: #35495E;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>