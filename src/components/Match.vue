<template>
  <div class="match">
    <div class="info">
      {{ beginAt }}
    </div>
    <div class="teams">
      <div class="left-t">
        {{ match.opponents[0].opponent.name }}
        <img
          class="team-image"
          :src="match.opponents[0].opponent.image_url"
          alt=""
        />
      </div>
      <h5>vs</h5>
      <div class="right-t">
        <img
          class="team-image"
          :src="match.opponents[1].opponent.image_url"
          alt=""
        />
        {{ match.opponents[1].opponent.name }}
      </div>
    </div>
    <div class="description">
      <img
        class="league-image"
        :src="match.league.image_url"
        alt=""
      />
      {{match.league.name}}
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: `Match`,
  props: {
    match: {
      type: Object,
      required: true,
      begin_at: {
        type: String,
        required: true,
      },
      name: String,
      league: {
        type: Object,
        required: false,
        name: String,
        image_url: String,
      },
      opponents: {
        type: Array,
        required: true,
        opponent: {
          type: Object,
          required: true,
          name: String,
          image_url: String,
        },
      },
    },
  },
  computed: {
    beginAt() {
      return moment(this.match.begin_at).format('DD.MM hh:mm a');
    },
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/style/main.scss' as m;

.match {
  width: 100%;
  height: 60px;
  border-radius: 10px;
  margin: 0;
  @include m.flex-r-sb;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 5px;
  border: 1px solid transparent;

  .info {
    height: 40%;
    width: 20%;
    @include m.flex-c;
    color: #628df3;
    padding: 1px;
    border: 1px solid #628df3;
    border-radius: 5px;
    font-size: 0.7rem;
  }
  .teams {
    width: 90%;
    height: 100%;
    @include m.flex-r-c;

    h5 {
      width: 2%;
    }

    .left-t {
      width: 40%;
      height: 100%;
      @include m.flex-r-fe;
    }
    .right-t {
      width: 40%;
      height: 100%;
      @include m.flex-r-fs;
    }
    .team-image {
      max-width: 40px;
      margin: 5px;
    }
  }
  .description {
    min-width: 40%;
    @include m.flex-r-fs;
    .league-image {
      max-width: 40px;
      margin: 5px;
    }
  }

  &:hover {
    background: rgba(60, 69, 86, 0.89);
    border: 1px solid #628df3;
  }
}
</style>
