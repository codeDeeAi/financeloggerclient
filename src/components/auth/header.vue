<template>
  <div>
    <!-- Vertical Nav -->
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          class="flex justify-between items-center border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10"
        >
          <div class="-mr-2 -my-2">
            <button
              type="button"
              @click.prevent="toggleSidebar()"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <img
                class="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>

          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button
              type="button"
              @click.prevent="logout()"
              class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-2 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Vertical Nav Ends -->

    <!-- SideBar nav -->
    <div
      v-if="sidebar"
      class="fixed inset-0 overflow-hidden z-50 transition-all duration-200"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="absolute inset-0 overflow-hidden">
        <!--
      Background overlay, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    -->
        <div
          class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
          <div class="relative w-screen max-w-md">
            <!--
          Close button, show/hide based on slide-over state.

          Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0"
        -->
            <div
              class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4"
            >
              <button
                type="button"
                @click.prevent="toggleSidebar()"
                class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span class="sr-only">Close panel</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div
              class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll"
            >
              <div class="mt-6 relative flex-1 px-4 sm:px-6">
                <!-- Replace with your content -->
                <div class="absolute inset-0 px-4 sm:px-6">
                  <div class="h-full" aria-hidden="true">
                    <div class="">
                      <div class="flex flex-col sm:flex-row sm:justify-around">
                        <div class="w-full h-screen overflow-y-auto">
                          <nav class="mt-10 px-6">
                            <!-- All Accounts -->
                            <router-link
                              class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-600 dark:text-gray-400 rounded-lg"
                              to="/accounts"
                            >
                              <svg
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="m-auto"
                                viewBox="0 0 2048 1792"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
                                ></path>
                              </svg>
                              <span class="mx-4 text-lg font-normal">
                                All Accounts
                              </span>
                              <span class="flex-grow text-right"> </span>
                            </router-link>
                            <!-- All Accounts End -->

                            <!-- Each Account -->
                            <div
                              v-for="(account, index) in accounts"
                              :key="index"
                            >
                              <a
                                @click.prevent="openMoreOptions(account)"
                                class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-600 dark:text-gray-400 rounded-lg"
                                href="#!"
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  class="m-auto"
                                  viewBox="0 0 2048 1792"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
                                  ></path>
                                </svg>
                                <span class="mx-4 text-lg font-normal">
                                  {{ account.name }}
                                </span>
                                <span class="flex-grow text-right"> </span>
                              </a>
                              <div
                                :id="`submenupanel${account.id}`"
                                class="px-6 border rounded hidden p-3 pt-1 rounded-b-lg transition-all"
                              >
                                <!-- Each Account Options -->
                                <router-link
                                  v-for="(submenu, index) in accounts_submenu"
                                  :key="index"
                                  class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-1 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-600 dark:text-gray-400 rounded-lg"
                                  :to="`${submenu.route}/${account.name}/${account.id}`"
                                >
                                  <span class="mx-4 text-lg font-normal">
                                    {{ submenu.name }}
                                  </span>
                                  <span class="flex-grow text-right"> </span>
                                </router-link>
                                <!-- Each Account Options -->
                              </div>
                            </div>

                            <!-- Each Account Ends -->
                          </nav>
                          <!-- Logout -->
                          <div
                            class="flex items-center justify-end md:flex-1 lg:w-0"
                          >
                            <button
                              type="button"
                              @click.prevent="logout()"
                              class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-2 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                            >
                              Sign out
                            </button>
                          </div>
                          <!-- Logout Ends -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /End replace -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SideBar nav ends-->
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      sidebar: false,
      accounts: [],
      accounts_submenu: [
        { name: "Chart", route: "/chart" },
        { name: "Create Log", route: "/create-log" },
        { name: "Logs", route: "/logs" },
        { name: "Settings", route: "/settings" },
      ],
    };
  },
  methods: {
    // Toggle sidebar
    toggleSidebar() {
      if (!this.sidebar) {
        // Open tray
        this.sidebar = true;
        return this.setSidebar(true);
      } else {
        // Close
        this.sidebar = false;
        return this.setSidebar(false);
      }
    },

    // Open Sidebar accordion
    openMoreOptions(account) {
      // Get Id of element
      var tray = document.getElementById(`submenupanel${account.id}`);
      // toggle class of hidden
      if (tray.classList.contains("hidden")) {
        return tray.classList.remove("hidden");
      }
      return tray.classList.add("hidden");
    },

    // Get Accounts for navigation
    async getAccounts() {
      // Declare Self variable
      var self = this;
      await axios
        .get(`${this.getApiBaseUrl}api/accounts`, {
          headers: {
            Authorization: `Bearer ${this.getUserToken}`,
          },
        })
        .then((response) => {
          return (self.accounts = response.data);
        })
        .catch(() => {});
    },

    // Logout from account
    async logout() {
      // Declare Self variable
      var self = this;
      await axios
        .get(`${this.getApiBaseUrl}api/logout`, {
          headers: {
            Authorization: `Bearer ${this.getUserToken}`,
          },
        })
        .then(() => {
          // Remove Client auth
          self.removeAuth();
          // Redirect to login page
          return self.$router.push("/login");
        })
        .catch(() => {
          return self.BasicToast("Something went wrong !", "error");
        });
    },
  },
  created() {
    // Start up Methods
    this.getAccounts();
    this.sidebar = this.getSidebar;
  },
};
</script>
