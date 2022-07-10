<template>
  <div class="header">
    <img
      class="logo"
      src="@/assets/svg/logo.svg"
      height="50"
      alt="cybersport"
    />
    <ul class="header-items">
      <li><router-link to="/">Главная</router-link></li>
      <li><router-link to="/matches">Матчи</router-link></li>
      <li><router-link to="/players">Игроки</router-link></li>
      <li><router-link to="/heroes">Герои</router-link></li>
    </ul>
    <div class="sign-in">
      <a>Войти</a>
    </div>
  </div>
</template>

<script>
export default {
  name: `Header`,
};
</script>

<style lang="scss" scoped>
.header {
  max-width: 100%;
  height: 40px;
  padding: 10px 20px 10px 0;
  margin: 0 auto;
  background: #1A2026;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 0px 4px 8px -9px rgba(34, 60, 80, 1);
  -moz-box-shadow: 0px 4px 8px -9px rgba(34, 60, 80, 1);
  box-shadow: 0px 4px 8px -9px rgba(34, 60, 80, 1);

  .logo {
    margin: 0;
    width: 20%;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    cursor: pointer;
  }
  .header-items {
    margin: 0;
    padding: 4px;
    width: 50%;
    li {
      display: inline;
      margin-right: 50px;
      padding: 3px;
      cursor: pointer;
      color: #3b6eef;
      font-family: Consolas, sans-serif;
      transition: all 0.3s ease;

      a {
        text-decoration: none;
        color: #3b6eef;
        cursor: pointer;
      }
      &:hover {
        color: #628df3;
      }
    }
  }
  .sign-in {
    width: 6%;
    padding-right: 10px;
    a {
      text-decoration: none;
      color: #3b6eef;
      cursor: pointer;
    }
  }
}

@media only screen and (max-width: 860px) {
  .header {
  }
}
</style>
