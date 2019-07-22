
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
var Vue = require('vue');
Vue.use(require('vue-resource'));
//http request yapmak icin axios u node paketlerimize ekleyek de.
window.axios = require('axios');
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('users', require('./components/Users.vue'));
Vue.component('messages', require('./components/Messages.vue'));
Vue.component('box', require('./components/BoxComponent.vue'));

const app = new Vue({
    el: '#app'
});
