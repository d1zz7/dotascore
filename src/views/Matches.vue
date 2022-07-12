<template>
  <div class="matches">
    <div class="match-list" v-if="!isLoading">
      <div class="match-list-header">
        <h5 class="header-title">Дата</h5>
        <h5 class="header-title">Команды</h5>
        <h5 class="header-title">Лига</h5>
      </div>
      <Match v-for="match in matches" :match="match" :key="match.id" />
      <Pagination
        :pages="pages"
        @pageChange="pageChange"
        :currentPage="currentPage"
      />
    </div>
    <Loader v-else />
    <PastMatches />
  </div>
</template>

<script>
import Match from '@/components/Match';
import Loader from '@/components/Loaders/Loader';
import Pagination from '@/components/Pagination';
import PastMatches from '@/components/PastMatches/PastMatches';
import { request } from '@/request';

export default {
  name: `Matches`,
  data() {
    return {
      matches: [],
      isLoading: true,
      pageLength: 10,
      pages: 10,
      currentPage: 1,
    };
  },
  mounted() {
    this.getData();
  },
  components: {
    Match,
    Loader,
    Pagination,
    PastMatches,
  },
  methods: {
    getData() {
      request
        .get(
          `/dota2/matches/upcoming?sort=&page=${this.currentPage}&per_page=${this.pageLength}`,
        )
        .then((response) => {
          this.matches = response.data;
          this.isLoading = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    pageChange(page) {
      this.isLoading = true;
      this.currentPage = page;
      this.getData();
    },
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/style/main.scss' as m;

.matches {
  padding: 50px;

  .match-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
    padding: 20px;
    -webkit-box-shadow: 0px 1px 8px -1px rgba(0, 0, 0, 0.21);
    -moz-box-shadow: 0px 1px 8px -1px rgba(0, 0, 0, 0.21);
    box-shadow: 0px 1px 8px -1px rgba(0, 0, 0, 0.21);

    .match-list-header {
      @include m.flex-r-fs;
      height: 40px;
      width: 100%;
      color: #628df3;
    }
  }
}
</style>
