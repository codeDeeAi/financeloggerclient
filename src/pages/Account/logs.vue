<template>
  <div>
    <!-- Navigation -->
    <header
      class="shadow-md bg-white px-6 py-6 dark:bg-gray-700 items-center rounded-lg space-y-4"
    >
      <!-- Log Type -->
      <div class="">
        <label for="type" class="block text-sm font-medium text-gray-700"
          >Log Type</label
        >
        <select
          name="type"
          v-model="type"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="income">Income</option>
          <option value="expense">Expenses</option>
          <option value="savings">Savings</option>
        </select>
      </div>
      <!-- Log Type -->
      <!-- Date From -->
      <div class="">
        <label for="date" class="block text-sm font-medium text-gray-700"
          >Date From</label
        >
        <input
          type="date"
          name="date"
          v-model="date_from"
          class="shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
        />
      </div>
      <!-- Date From -->
      <!-- Date To -->
      <div class="">
        <label for="date" class="block text-sm font-medium text-gray-700"
          >Date To</label
        >
        <input
          type="date"
          name="date"
          v-model="date_to"
          class="shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
        />
      </div>
      <!-- Date To -->
      <button
        type="button"
        @click.prevent="sortFetch()"
        class="py-2 px-4 flex justify-center items-center bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
      >
        <svg
          v-if="isLoading"
          width="20"
          height="20"
          fill="currentColor"
          class="mr-2 animate-spin"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"
          ></path>
        </svg>
        <span v-if="!isLoading">Load Logs</span>
      </button>
    </header>

    <!-- Navigation Ends -->

    <!-- Loader -->
    <div class="flex justify-center my-4" v-if="isLoading">
      <div class="bg-white p-1 shadow-sm rounded">
        <svg
          width="40"
          height="40"
          fill="currentColor"
          class="mr-2 animate-spin"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"
          ></path>
        </svg>
      </div>
    </div>
    <!-- Loader Ends -->

    <!-- Recent Logs -->

    <div class="px-4 py-5 rounded-t sm:px-6">
      <div
        class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md"
      >
        <ul class="divide-y divide-gray-200">
          <LogItem
            v-for="(transaction, index) in transactions.data"
            :key="index"
            :data="transaction"
          />
        </ul>
        <div class="p-4 w-full md:w-1/2 mx-auto">
          <div class="flex justify-center gap-4">
            <button
              v-if="transactions.current_page > 1"
              @click.prevent="page--"
              type="button"
              class="py-1 px-2 bg-green-600 hover:bg-green-700 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded"
            >
              Prev
            </button>
            <button
              v-if="transactions.last_page > transactions.current_page"
              @click.prevent="page++"
              type="button"
              class="py-1 px-2 bg-green-600 hover:bg-green-700 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Logs Ends -->
  </div>
</template>
<script>
import axios from "axios";
import LogItem from "../../components/account/log.vue";
export default {
  components: {
    LogItem,
  },
  data() {
    return {
      // Load Parameter
      isLoading: false,

      // Account Id
      account_id: this.$route.params.id,

      transactions: [], // All Logs

      // Search Log Attributes
      type: "",
      date_from: "",
      date_to: "",

      // Page attributes
      page: 1,
    };
  },
  watch: {
    page() {
      return this.sortFetch();
    },
  },
  methods: {
    // Sort Fetch Data
    sortFetch(page = this.page) {
      if (this.type.trim() !== "") return this.getTransWithType(page);
      // Get Basic Data
      return this.getTransBasic(page);
    },

    // Get Basic Logs
    async getTransBasic(page) {
      // Create Self Variable
      var self = this;

      // Get Accounts
      await axios
        .get(
          `${this.getApiBaseUrl}api/transactions/${this.account_id}?page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${this.getUserToken}`,
            },
          }
        )
        .then((response) => {
          // Disable Load Params
          return (self.transactions = response.data);
        })
        .catch(() => {
          return self.BasicToast("Something went wrong", "error");
        });
    },
    // Get Logs with type
    async getTransWithType(page) {
      // Create Self Variable
      var self = this;

      var route = "";
      // Construct Route
      if (this.date_from.trim() !== "" && this.date_to.trim() !== "") {
        route = `${this.getApiBaseUrl}api/transactions/${this.account_id}?type=${this.type}&date_from=${this.date_from}&date_to=${this.date_to}&page=${page}`;
      }
      if (this.date_from.trim() == "" && this.date_to.trim() == "") {
        route = `${this.getApiBaseUrl}api/transactions/${this.account_id}?type=${this.type}&page=${page}`;
      }

      // Get Accounts
      await axios
        .get(`${route}`, {
          headers: {
            Authorization: `Bearer ${this.getUserToken}`,
          },
        })
        .then((response) => {
          // Disable Load Params
          return (self.transactions = response.data);
        })
        .catch(() => {
          return self.BasicToast("Something went wrong", "error");
        });
    },
  },
  created() {
    // Startup Methods
    this.sortFetch();
  },
  mounted() {},
};
</script>
