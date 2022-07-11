<template>
  <div class="matches" >
    <div class='match-list' v-if='!isLoading'>
      <Match v-for="match in matches" :match='match' :key="match.id" />
    </div>
    <Loader v-else/>
  </div>
</template>

<script>
import Match from '@/components/Match';
import Loader from '@/components/Loader';
import { request } from '@/request';

export default {
  name: `Matches`,
  data() {
    return {
      matches: [],
      isLoading: true
    };
  },
  mounted() {
    request
      .get('/dota2/matches/upcoming?sort=&page=1&per_page=5')
      .then((response) => {
        this.matches = response.data
        this.isLoading = false
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  components: {
    Match, Loader
  },
};
</script>

<style lang="scss" scoped>
.matches {
  padding: 50px;
}
</style>
