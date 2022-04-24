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

.searchInput{
  /* 左上左下圆角 */
  border-radius: 5px 0 0 5px;
  padding: 5px;
  background-color: white;
  /* 右侧边框取消 */
  border: 2px solid #41B883;
  border-right-style: none;
}
.searchButton {
  /* 右上右下圆角 */
  border-radius: 0 5px 5px 0;
  padding: 5px;
  background-color: white;
  /*边框宽度*/
  border: 2px solid #41B883;
}
.searchButton:hover {
  background-color: #41B883;
  color: #35495E
}
</style>