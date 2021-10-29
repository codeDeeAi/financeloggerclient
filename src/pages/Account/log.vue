<template>
  <div>
    <!-- Modals -->

    <!-- Create New Account -->
    <!-- This example requires Tailwind CSS v2.0+ -->

    <div
      v-if="createLogModal"
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div class="flex justify-center">
                  <p
                    class="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Create Log
                  </p>
                </div>
                <div class="mt-2">
                  <div>
                    <div class="md:gap-6">
                      <div class="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                          <div class="sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-3 sm:p-6">
                              <!-- Log Type -->
                              <div class="">
                                <label
                                  for="type"
                                  class="block text-sm font-medium text-gray-700"
                                  >Log Type (expense, income, savings)</label
                                >
                                <select
                                  name="type"
                                  v-model="new_log.type"
                                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="income">Income</option>
                                  <option value="expense">Expense</option>
                                  <option value="savings">Savings</option>
                                </select>
                              </div>
                              <!-- Log Type -->
                              <!-- Amount -->
                              <div class="">
                                <label
                                  for="amount"
                                  class="block text-sm font-medium text-gray-700"
                                  >Amount</label
                                >
                                <input
                                  type="number"
                                  name="amount"
                                  min="0"
                                  v-model="new_log.amount"
                                  class="shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                />
                              </div>
                              <!-- Amount Ends -->
                              <!-- Date -->
                              <div class="">
                                <label
                                  for="date"
                                  class="block text-sm font-medium text-gray-700"
                                  >Date</label
                                >
                                <input
                                  type="date"
                                  name="date"
                                  v-model="new_log.date"
                                  class="shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                />
                              </div>
                              <!-- Date Ends -->
                              <!-- Details -->
                              <div>
                                <label
                                  for="description"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Details
                                </label>
                                <div class="mt-1">
                                  <textarea
                                    name="details"
                                    v-model="new_log.details"
                                    rows="3"
                                    class="shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                    placeholder="describe log < 1000 words"
                                  ></textarea>
                                </div>
                              </div>
                              <!-- Details Ends -->
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              @click.prevent="createNewLog()"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              :disabled="isLoading"
            >
              <span v-if="!isLoading">Create Log</span>
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
            </button>
            <button
              type="button"
              @click.prevent="toggleModal(createLogModal, 'createLogModal')"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Create New Account Ends -->

    <!-- Modals Ends -->
    <!-- Navigation -->

    <header
      class="shadow-md bg-white px-6 dark:bg-gray-700 items-center h-16 rounded-lg flex justify-end gap-4"
    >
      <button
        type="button"
        @click.prevent="toggleModal(createLogModal, 'createLogModal')"
        class="py-2 px-4 flex justify-center items-center bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
      >
        <svg
          width="20"
          height="20"
          class="mr-2"
          fill="currentColor"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"
          ></path>
        </svg>
        Create Log
      </button>
    </header>

    <!-- Navigation Ends -->

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
        <div class="p-4 flex justify-center mx-auto">
          <router-link
            :to="`/logs/${$route.params.name}/${$route.params.id}`"
            class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-1/2 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            View all
          </router-link>
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

      // Modals
      createLogModal: false,

      // Account Id
      account_id: this.$route.params.id,

      // All Accounts
      transactions: [],

      // New Log Attributes
      new_log: {
        type: "",
        amount: "",
        date: "",
        details: "",
      },
    };
  },
  watch: {
    '$route.params.id': {
        handler: function() {
           this.getTransactions();
        },
        deep: true,
        immediate: true
      }
  },
  methods: {
    /**
     * Reusable Toggle Modal function
     * Take two params 'element', 'ref'
     * 'element' is data variable that takes a boolean {'true','false'}
     * 'ref' is a string that takes the name of the data variable
     */
    toggleModal(element, ref) {
      if (element == false) {
        this[ref] = true;
        this.body = true;
      } else {
        this[ref] = false;
        this.body = false;
      }
    },

    // Get Accounts
    async getTransactions() {
      // Create Self Variable
      var self = this;

      // Get Accounts
      await axios
        .get(`${this.getApiBaseUrl}api/transactions/${this.account_id}`, {
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
    // Create New Log
    async createNewLog() {
      // Validation
      if (this.new_log.type.trim() == "")
        return this.BasicToast("Log type is required !", "warning");
      if (this.new_log.amount.trim() == "")
        return this.BasicToast("Amount is required !", "warning");
      if (this.new_log.date.trim() == "")
        return this.BasicToast("Date is required !", "warning");
      if (this.new_log.details.trim() == "")
        return this.BasicToast("A brief description is required !", "warning");

      // Create Self Variable
      var self = this;
      // Init load params
      this.isLoading = true;

      // Create Log
      await axios
        .post(
          `${this.getApiBaseUrl}api/transaction/${this.account_id}`,
          this.new_log,
          {
            headers: {
              Authorization: `Bearer ${this.getUserToken}`,
            },
          }
        )
        .then(() => {
          // Disable Load Params
          self.isLoading = false;

          // Get Data
          self.getTransactions();

          // Reset Log Params
          self.new_log = {
            type: "",
            amount: "",
            date: "",
            details: "",
          };
          // Close Modal
          return self.toggleModal(this.createLogModal, "createLogModal");
        })
        .catch((error) => {
          // Disable Load Params
          self.isLoading = false;
          if (error.response.status == 400) {
            return self.BasicToast(error.response.data.message, "error");
          }
          if (error.response.status == 422) {
            var errs = error.response.data.errors;
            for (let i in errs) {
              var err = errs[i][0];
              // Alert User
              self.BasicToast(err, "error");
            }
            return;
          }
          return self.BasicToast("Something went wrong", "error");
        });
    },
  },
  created() {
    // Startup Methods
    this.getTransactions();
  },
  mounted() {},
};
</script>
