import { createApp } from 'vue';
import App from './App.vue';  // Use relative path
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
