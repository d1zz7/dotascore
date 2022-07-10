import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faGamepad,
  faHouse,
  faUserGroup,
  faVideo,
  faBell,
  faIdBadge,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faGamepad,
  faHouse,
  faUserGroup,
  faVideo,
  faBell,
  faIdBadge,
  faBars,
);

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
