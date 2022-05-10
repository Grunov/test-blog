import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate'
import uiLibrary from '@/components/ui/library';

Vue.use(Vuelidate);

uiLibrary.forEach(component => {
  Vue.component(component.name, component);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
