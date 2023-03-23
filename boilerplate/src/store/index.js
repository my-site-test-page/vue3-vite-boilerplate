import { createStore } from 'vuex';
import main from './main.js';
import vs from './VuexSample/vuexSample.js';

const store = createStore({
  ...main,
  modules: { vs },
});

export default store;
