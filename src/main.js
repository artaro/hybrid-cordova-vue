// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import './components/firebaseInit'
Vue.config.productionTip = false

let app
// var config = {
//   apiKey: 'AIzaSyAVqxz9IAzrH7-XEK1huZNrRNHHoPuoXqk',
//   authDomain: 'webapp-ac16b.firebaseapp.com',
//   databaseURL: 'https://webapp-ac16b.firebaseio.com',
//   projectId: 'webapp-ac16b',
//   storageBucket: 'webapp-ac16b.appspot.com',
//   messagingSenderId: '42883641659'
// }
// firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
})
