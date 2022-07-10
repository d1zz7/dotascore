<template>
  <Header />
  <router-view />
</template>

<script>
import '@/assets/style/main.scss';
import Header from '@/components/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
