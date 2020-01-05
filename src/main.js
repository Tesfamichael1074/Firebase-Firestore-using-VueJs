import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCn59gNyStOjUB_GL41nvBMcSyz_Tf-9gk",
    authDomain: "tmeeducation-report.firebaseapp.com",
    databaseURL: "https://tmeeducation-report.firebaseio.com",
    projectId: "tmeeducation-report",
    storageBucket: "tmeeducation-report.appspot.com",
    messagingSenderId: "757172656806",
    appId: "1:757172656806:web:ff795863b45b32ff1fb267",
    measurementId: "G-CK916K5BQ4"
});
export const db = firebaseApp.firestore();

Vue.config.productionTip = false


new Vue({
    render: h => h(App),
}).$mount('#app')