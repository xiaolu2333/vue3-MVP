<template>
  <div class="pagination-buttons">
    <button @click="prevPage">◀</button>
    <button v-for="(item,key) in pageList()" :key="key"
            :class="{'current': compare(item)}"
            @click="clickPage(item)">
      {{ item }}
    </button>
    <button @click="nextPage">▶</button>
  </div>
</template>

<script>
export default {
  name: "PaginationButtons",
  props: ['size', 'page', 'total', 'max'],
  methods: {
    // 上一页
    prevPage() {
      // 如果当前页不是第一页，则跳转到上一页
      if (this.page > 1) {
        this.$emit('change', this.page - 1);
      }
    },
    // 下一页
    nextPage() {
      // 如果当前页小于总页数，则跳转到下一页
      if (this.page < this.total) {
        this.$emit('change', this.page + 1);
      }
    },
    // 点击页码
    clickPage(index) {
      this.$emit('change', index);
    },
    // 比较当前页和指定页
    compare(index) {
      return index === this.page;
    },
    // 判断是否显示省略号
    isEllipsis(index) {
      return index === '...';
    },
    // 获取分页页码
    pageList() {
      let result = []
      const fold = ['...']
      // 如果总页数小于等于最大页码显示数量，则直接返回页码数组
      if (this.total <= this.max) {
        let list = [...Array(this.total).keys()].map(item => item + 1)
        result = list
      }
      if (this.total > this.max) {
        if (this.page <= this.max-1) {
          let list = [...Array(this.max - 1).keys()].map(item => item + 1)
          console.log(list)
          result = list
          result = result.concat(fold)
          result = result.concat(this.total)
          console.log(result)
        }
        if (this.total - 3 > this.page && this.page > this.max - 1) {
          result = [1]
          result = result.concat(fold)
          let list = [...Array(3).keys()].map(item => item + this.page - 2 + 1)
          result = result.concat(list)
          result = result.concat(fold)
          result = result.concat(this.total)
        }
        if (this.total - 3 <= this.page) {
          result = [1]
          result = result.concat(fold)
          let list = [...Array(4).keys()].map(item => item + this.total - 4 + 1)
          result = result.concat(list)
        }
        console.log(result)

      }
      return result
    },
  }
}
</script>

<style scoped>
button {
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

button:hover {
  background-color: #41B883;
  color: #35495E;
  /* 下右阴影 */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

/* 鼠标点击按钮，按钮向下变小 */
button:active {
  transform: scale(0.95);
  background-color: #26895d;
  color: #35495E;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.current {
  background-color: #fa0788;
  color: #35495E;
  /* 下右阴影 */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
</style>