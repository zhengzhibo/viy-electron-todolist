import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Viy from 'viy-ui';
import App from './App.vue';
import router from './router';

Vue.use(VueI18n);
Vue.use(Viy);

const messages = {
  ja: {
    message: 'こんにちは', // Pj message
    ...Viy.lang.ja, // Extend viy component i18n message
  },
  en: {
    message: 'Hello',
    ...Viy.lang.en,
  },
  zh: {
    message: '你好',
    ...Viy.lang.zh,
  },
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'ja', // set default locale
  messages, // set locale messages
});

Viy.setI18n(i18n); // set i18n function to viy
Vue.config.productionTip = false;

Vue = Vue.extend({ i18n });
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
