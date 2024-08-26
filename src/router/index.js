import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import UserView from '@/views/UserView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/users', name: 'UserList', component: UserView },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes,
});

export default router;
