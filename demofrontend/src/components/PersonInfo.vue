<template>
  <div class="info">
    <h3>
      <slot></slot>
      {{ info.name }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'PersonInfo',
  props: ['info'],
}
</script>

<style scoped>
.info {
  margin-left: auto;
  padding: 10px;
}
</style>