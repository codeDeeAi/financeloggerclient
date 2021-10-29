import Vue from "vue";
import VueToast from "vue-toast-notification";
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(VueToast);
export default {
    data() {
        return {};
    },
    methods: {
        // Notification Types

        // Success
        // ToastSuccess(message) {
        //   Vue.$toast.success(message, {
        //     // optional options Object
        //     position: "top-right",
        //   });
        // },
        BasicToast(message, type) {
            Vue.$toast.open({
                /* options */
                message: message,
                type: type,
                position: "top-right",
            });
        },
    },
    computed: {},
};