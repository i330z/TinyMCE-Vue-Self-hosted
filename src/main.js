import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

// Import TinyMCE
// import tinymce from 'tinymce/tinymce';

// Default icons are required for TinyMCE 5.3 or above
// import 'tinymce/icons/default';

// A theme is also required
// import 'tinymce/themes/silver';

// Any plugins you want to use has to be imported
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/table';

// Initialize the app
tinymce.init({
  selector: '#tiny',
  plugins: ['paste', 'link' ,'table']
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
