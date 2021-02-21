import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./router";
import VuePeerJS from "vue-peerjs";
import Peer from "peerjs";
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
import VueClipboard from 'vue-clipboard2'
import Clipboard from 'v-clipboard'
Vue.use(require('vue-moment'));
Vue.use(VuePlyr);
Vue.use(VuePeerJS, new Peer({}), { store });
Vue.config.productionTip = false;
 
Vue.use(Clipboard)
Vue.use(VueClipboard)
new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
