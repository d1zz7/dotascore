<template>
  <div class="matches">
    <Match v-for="match in matches" :key="match.id" />
  </div>
</template>

<script>
import Match from '@/components/Match';
import { request } from '@/request';

export default {
  name: `Matches`,
  data() {
    return {
      matches: [],
    };
  },
  mounted() {
    request
      .get('/dota2/matches/upcoming?sort=&page=1&per_page=50')
      .then((response) => (this.matches = response.data))
      .catch(function (error) {
        console.log(error);
      });
  },
  components: {
    Match,
  },
};
</script>

<style lang="scss" scoped>
.matches {
  padding: 50px;
}
</style>
