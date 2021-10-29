import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // darkMode: false,

        // API Base URL
        api_url: "http://127.0.0.1:5000/",

        // Authentication and user details
        auth: {
            user: null,
            loggedIn: false,
            token: null,
        },

        // Admin sidebar state
        sidebar: false,
    },
    getters: {
        // Get User Auth Token
        getApiBaseUrl: (state) => {
            return state.api_url;
        },

        // Get User
        getUser: (state) => {
            return state.auth.user;
        },

        // Get User Auth Token
        getUserToken: (state) => {
            return state.auth.token;
        },

        // Get User Auth Logged in
        isLoggedIn: (state) => {
            return state.auth.loggedIn;
        },

        // Get Sidebar state
        getSidebar: (state) => {
            return state.sidebar;
        },
    },
    mutations: {
        // Update Sidebar state
        setSidebar(state, data) {
            state.sidebar = data;
        },
        // Update Auth Details
        setAuth(state, data) {
            state.auth.user = data.user;
            state.auth.loggedIn = true;
            state.auth.token = data.token;
        },

        // Remove Auth Status
        removeAuth(state) {
            state.auth.user = null;
            state.auth.loggedIn = false;
            state.auth.token = null;
        },
    },
    actions: {},
    plugins: [createPersistedState()],
});