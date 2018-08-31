import { baseURL } from './request'
// import Vue from 'vue'

/* 图片 */
Vue.filter('filterPict', itemPict => {
  if (itemPict) {
    // return `${baseURL}` + '/images/test-copy.png'
    return 'http://localhost:8084/images/test-copy.png'
  } else {
    return 'http://localhost:8084/images/test-copy.png'
  }
})
