<template>
  <div class="pagination">
    <div :class="[currentPage === i ? 'p-btn active' : 'p-btn']" v-for="i in pages" :key="i" @click="onClick(i)" >{{ i }}</div>
    <div class="p-nav">
      <div class="p-btn">←</div>
      <div class="p-btn">→</div>
    </div>
  </div>
</template>

<script>
export default {
  name: `Pagination`,
  props: {
    pages: {
      required: true,
      type: Number,
    },
    currentPage: Number,
  },
  methods: {
    onClick(page) {
      this.$emit('pageChange', page)
    }
  }
};
</script>

<style lang="scss" scoped>
@use '@/assets/style/main.scss' as m;

.pagination {
  @include m.flex-r-fs;
  height: 40px;
  width: 100%;
  color: #628df3;
  margin-top: 10px;
  .p-nav {
    @include m.flex-r-fs;
    width: 130px;
    margin: 0 0 0 10px;
    .p-btn {
      width: 60px;
    }
  }
  .p-btn {
    @include m.flex-c;
    height: 30px;
    width: 30px;
    border: 1px solid #628df3;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
    margin: 0 0 0 5px;

    &:hover {
      background: #628df3;
      color: whitesmoke;
    }
  }
  .active {
    background: #628df3;
    color: whitesmoke;
  }
}
</style>
