<template>
  <div class="custom-input">
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="searchInput">
    <button class="searchButton">SEARCH</button>
  </div>
  <br>
</template>

<script>
export default {
  name: 'CustomInput',
  props: ['modelValue'],
  emits: ['update:modelValue'],
}
</script>

<style scoped>
.custom-input {
  float: right;
}

.searchInput {
  /* 左上左下圆角 */
  border-radius: 5px 0 0 5px;
  padding: 5px;
  background-color: white;
  /* 右侧边框取消 */
  border: 2px solid #41B883;
  border-right-style: none;
}

.searchInput:active {
  /* 取消输入时的边框 */
  border-right-style: none;
}

.searchInput:hover {
  /* 四周阴影 */
  box-shadow: 0 0 4px #41B883;
}

.searchButton {
  /* 右上右下圆角 */
  border-radius: 0 5px 5px 0;
  padding: 4px;
  color: #41B883;
  /* 字体阴影 */
  text-shadow: 0 0 4px #41B883;
  background-color: #35495E;
  /*边框宽度*/
  border: 3px solid #35495E;
}

.searchButton:hover {
  border: 3px solid #41B883;
  background-color: #41B883;
  color: #35495E;
  /* 四周阴影 */
  box-shadow: 0 0 4px #41B883;
}

.searchButton:active {
  background-color: #41B883;
  color: #35495E;
  /* 四周阴影 */
  box-shadow: 0 0 2px #41B883;
}
</style>