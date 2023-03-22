import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import vuetify from './vuetify';

const app = createApp(App);

const plugins = [vuetify];

plugins.forEach((plugin) => app.use(plugin));

app.mount('#app');
