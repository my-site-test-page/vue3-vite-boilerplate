import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import vuetify from './vuetify';
import router from './router';
import store from './store';

const app = createApp(App);

const plugins = [vuetify, router, store];
plugins.forEach((plugin) => app.use(plugin));

app.mount('#app');
