import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import AboutUs from './pages/AboutUs.vue';
import ContactUs from './pages/contact.vue';
import Login from './pages/Login.vue';
import Signup from './pages/Signup.vue';
import NotFound from './pages/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutUs },
  { path: '/contact', component: ContactUs },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
