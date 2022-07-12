<template>
  <div class="past-match">
    <div class="info">
      {{ endAt }}
    </div>
    <div class="teams">
      <div
        :class="[
          match.opponents[0].opponent.id === match.winner_id
            ? 'left-t winner'
            : 'left-t',
        ]"
      >
        {{ match.opponents[0].opponent.name }}
        <img
          class="team-image"
          :src="match.opponents[0].opponent.image_url"
          alt=""
        />
      </div>
      <div
        :class="[
          match.opponents[1].opponent.id === match.winner_id
            ? 'right-t winner'
            : 'right-t',
        ]"
      >
        <img
          class="team-image"
          :src="match.opponents[1].opponent.image_url"
          alt=""
        />
        {{ match.opponents[1].opponent.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `PastMatch`,
  props: {
    match: {
      type: Object,
      required: true,
      end_at: String,
      name: String,
      league: {
        type: Object,
        required: false,
        name: String,
        image_url: String,
      },
      winner: {
        Type: Object,
        required: true,
        image_url: String,
        name: String,
      },
      winner_id: {
        type: Number,
        required: true,
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
    endAt() {
      return this.match.begin_at.substring(0, 10);
    },
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/style/main.scss' as m;

.past-match {
  @include m.flex-r-sb;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  .info {
    font-size: 0.7rem;
    border: 0.5px solid #628df3;
    border-radius: 1px;
    padding: 0.5px;
    width: 70px;
  }
  .teams {
    width: 350px;
    max-width: 350px;
    height: 100%;
    padding: 5px;
    @include m.flex-r-c;
    color: #de3b55;

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

    .winner {
      color: #4be36b;
    }
  }

  &:hover {
    background: rgba(60, 69, 86, 0.89);
    border: 1px solid #628df3;
  }
}
</style>
