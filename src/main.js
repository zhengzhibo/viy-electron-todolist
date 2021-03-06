import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Viy from 'viy-ui';
import App from './App.vue';
import router from './router';

import './style/global.css';

import { getSetting } from './api/SettingApi';

import LayoutSection from './components/LayoutSection.vue';

console.log(LayoutSection.name);
Vue.component(LayoutSection.name, LayoutSection);

async function initSetting() {
  const backgroundColor = await getSetting('backgroundColor');
  const fontColor = await getSetting('fontColor');
  if (backgroundColor) {
    document.documentElement.style.setProperty('--background-color', backgroundColor);
  }
  if (fontColor) {
    document.documentElement.style.setProperty('--font-color', fontColor);
  }
}

async function init() {
  await initSetting();

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
}

init();
