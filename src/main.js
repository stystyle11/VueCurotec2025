//import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useUserStore } from './stores/user';
import App from './App.vue';
import router from './router';
import './index.css';
const app = createApp(App);

app.use(router);
app.use(createPinia());

// Initialize the user store from localStorage
const userStore = useUserStore();
userStore.initializeStore();
app.mount('#app');

