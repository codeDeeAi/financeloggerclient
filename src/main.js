import Vue from "vue";
import App from "./App.vue";

// Import router
import router from "./routes/index";

// Import store
import store from "./store/index";

// Import common JS for Apis like notification,callApi etc
import common from "./plugins/common";

// Import Notifications
import notifications from "./plugins/notifications";

// Use Common Js
Vue.mixin(common);

// Use Notifications
Vue.mixin(notifications);

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
    router,
    store,
}).$mount("#app");