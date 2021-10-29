import { mapGetters, mapMutations } from "vuex";
export default {
    data() {
        return {};
    },
    methods: {
        ...mapMutations(["setAuth", "setSidebar", "removeAuth"]),
    },
    computed: {
        ...mapGetters(["isLoggedIn", "getUser", "getApiBaseUrl", "getUserToken", "getSidebar"]),
    },
};