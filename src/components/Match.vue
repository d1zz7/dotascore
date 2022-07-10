<template>
  <div class="match">
    <div class="team left-team">

    </div>
    <div class="info">

    </div>
    <div class="team right-team">

    </div>
  </div>
</template>

<script>
export default {
  name: `Match`
}
</script>

<style lang="scss" scoped>
.match {
  width: 70%;
  height: 50px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  .team {
    height: 100%;
    width: 40%;
  }
  .info {
    height: 100%;
    width: 20%;
  }
}
</style>