<template>
  <div class="past-matches">
    <h4>Прошедщие матчи</h4>
    <div class='past-matches-list' v-if="!isLoading">
      <PastMatch v-for="(match, i) in pastMatches" :match="match" :key="i"/>
    </div>
    <Loader v-else/>
    <a>Смотреть все</a>
  </div>
</template>

<script>
import PastMatch from '@/components/PastMatches/PastMatch';
import Loader from '@/components/Loaders/Loader';
import { request } from '@/request';

export default {
  name: `PastMatches`,
  data() {
    return {
      pastMatches: [],
      isLoading: true,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      request
        .get(
          '/dota2/matches/past?sort=&page=1&per_page=10',
        )
        .then((response) => {
          console.log(response.data)
          this.pastMatches = response.data;
          this.isLoading = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  components: {
    PastMatch,
    Loader
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/style/main.scss' as m;

.past-matches {
  @include m.flex-c-fs;
  position: absolute;
  width: 420px;
  height: 650px;
  right: 15px;
  top: 110px;
  padding: 5px;
  -webkit-box-shadow: 0px 1px 8px -1px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 0px 1px 8px -1px rgba(0, 0, 0, 0.21);
  box-shadow: 0px 1px 8px -1px rgba(0, 0, 0, 0.21);

  a {
    margin-top: auto;
  }
}
</style>
