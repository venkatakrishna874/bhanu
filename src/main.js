import Vue from 'vue';
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';
import 'vue2-dropzone/dist/vue2Dropzone.css';
import Vuetify from 'vuetify';
import { Upload, UploadInstaller } from '@progress/kendo-upload-vue-wrapper';
import 'vuetify/dist/vuetify.min.css';
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper';
import { DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper';
import { ChartInstaller } from '@progress/kendo-charts-vue-wrapper';
import App from './App.vue';
import router from './router/index';

Vue.config.productionTip = false;

Vue.use(UploadInstaller);
Vue.use(Vuetify);
Vue.use(GridInstaller);
Vue.use(DataSourceInstaller);
Vue.use(ChartInstaller);
Vue.use(require('vue-moment'));

new Vue({
  el: '#app',
  router,
  components: { App, Upload, Grid },
  template: '<App/>'
});
