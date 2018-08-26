import Vue from 'vue'
import App from './index'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import MpvueRouterPatch from 'mpvue-router-patch'

import Api from '../../../config/api.js';
Vue.prototype.$api = Api;

const app = new Vue(App);
app.$mount();
// Vue.use(VueAxios, axios, MpvueRouterPatch);
