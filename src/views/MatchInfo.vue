<template>
  <div class='matches'>
    <div class='match-info'>
    </div>
    <div class='streaming'>
      <twitch-player
        channel="m3traneo"
      ></twitch-player>
    </div>
  </div>
</template>

<script>

export default {
  name: `MatchInfo`
};
</script>

<style lang='scss' scoped>
@use '@/assets/style/main.scss' as m;

.matches {
  @include m.flex-r-sb;
  padding: 50px;

  .match-info {
    width: 700px;
    height: 600px;
    border-radius: 20px;
    -webkit-box-shadow: 0px 1px 8px -1px rgba(0, 0, 0, 0.21);
    -moz-box-shadow: 0px 1px 8px -1px rgba(0, 0, 0, 0.21);
    box-shadow: 0px 1px 8px -1px rgba(0, 0, 0, 0.21);
  }
  .streaming {
    width: 700px;
    height: 600px;
    border-radius: 20px;
    -webkit-box-shadow: 0px 1px 8px -1px rgba(0, 0, 0, 0.21);
    -moz-box-shadow: 0px 1px 8px -1px rgba(0, 0, 0, 0.21);
    box-shadow: 0px 1px 8px -1px rgba(0, 0, 0, 0.21);
  }
}

</style>
