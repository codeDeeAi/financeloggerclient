import Vue from "vue";
import Router from "vue-router";
// Import middleware
// import authMiddleware from './middleware/auth'

// Use Router
Vue.use(Router);

// Import Layouts
import GuestLayout from "../layouts/guest.vue";
import AuthLayout from "../layouts/auth.vue";

// Import Pages

// Home
import home from "../pages/index.vue";

// Authentication
import login from "../pages/Auth/login.vue";
import signup from "../pages/Auth/signup.vue";

// Accounts
import accounts from "../pages/Accounts/accounts.vue";

// Account
import createAccountLog from "../pages/Account/log.vue";
import AccountLogs from "../pages/Account/logs.vue";
import accountChart from "../pages/Account/chart.vue";
import accountSettings from "../pages/Account/settings.vue";

// Page Not Found
import notfound from "../pages/error/404.vue";

const routes = [{
        path: "/",
        component: GuestLayout,
        children: [{
            path: "",
            name: "Home Page",
            component: home,
        }, ],
    },
    {
        path: "/login",
        component: GuestLayout,
        children: [{
            path: "",
            name: "Login",
            component: login,
        }, ],
    },
    {
        path: "/signup",
        component: GuestLayout,
        children: [{
            path: "",
            name: "Signup",
            component: signup,
        }, ],
    },
    {
        path: "/accounts",
        component: AuthLayout,
        children: [{
            path: "",
            name: "My Accounts",
            component: accounts,
        }, ],
    },
    {
        path: "/create-log/:name/:id",
        component: AuthLayout,
        children: [{
            path: "",
            name: "Create Account Log",
            component: createAccountLog,
        }, ],
    },
    {
        path: "/logs/:name/:id",
        component: AuthLayout,
        children: [{
            path: "",
            name: "Account Logs",
            component: AccountLogs,
        }, ],
    },
    {
        path: "/chart/:name/:id",
        component: AuthLayout,
        children: [{
            path: "",
            name: "Account Chart",
            component: accountChart,
        }, ],
    },
    {
        path: "/settings/:name/:id",
        component: AuthLayout,
        children: [{
            path: "",
            name: "Account Settings",
            component: accountSettings,
        }, ],
    },
    {
        path: "*",
        component: GuestLayout,
        children: [{
            path: "",
            name: "Page Not Found",
            component: notfound,
        }, ],
    },
];

export default new Router({
    mode: "hash",
    routes,
});