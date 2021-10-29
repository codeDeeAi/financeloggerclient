<template>
  <div>
    <!-- Modals -->

    <!-- Create New Account -->
    <!-- This example requires Tailwind CSS v2.0+ -->

    <div
      v-if="createAccountModal"
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
                    Create account
                  </p>
                </div>
                <div class="mt-2">
                  <div>
                    <div class="md:gap-6">
                      <div class="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                          <div class="sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-3 sm:p-6">
                              <!-- Account Name -->
                              <div class="">
                                <label
                                  for="name"
                                  class="block text-sm font-medium text-gray-700"
                                  >Account Name</label
                                >
                                <input
                                  type="text"
                                  name="name"
                                  v-model="new_account.name"
                                  class="shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                />
                              </div>
                              <!-- Account Name Ends -->

                              <!-- Currency -->
                              <div class="">
                                <label
                                  for="country"
                                  class="block text-sm font-medium text-gray-700"
                                  >Currency</label
                                >
                                <select
                                  name="currency"
                                  v-model="new_account.currency"
                                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="Naira">Naira</option>
                                  <option value="Dollars">Dollars</option>
                                  <option value="Pounds">Pounds</option>
                                </select>
                              </div>
                              <!-- Currency -->
                              <!-- Description -->
                              <div>
                                <label
                                  for="description"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Description
                                </label>
                                <div class="mt-1">
                                  <textarea
                                    id="description"
                                    name="description"
                                    v-model="new_account.description"
                                    rows="3"
                                    class="shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                    placeholder="short note about account < 500 words"
                                  ></textarea>
                                </div>
                              </div>
                              <!-- Description Ends -->
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
              @click.prevent="createNewAccount()"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              :disabled="isLoading"
            >
              <span v-if="!isLoading">Create account</span>
              <BtnSpinner v-if="isLoading" />
            </button>
            <button
              type="button"
              @click.prevent="
                toggleModal(createAccountModal, 'createAccountModal')
              "
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
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
      <!-- Create New Account -->
      <a
        href="#!"
        @click.prevent="toggleModal(createAccountModal, 'createAccountModal')"
        class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-900 w-64 m-auto relative hover:shadow-md"
      >
        <div class="w-full h-full text-center">
          <div class="flex h-full flex-col justify-between">
            <p class="text-gray-900 dark:text-white text-lg mt-4">
              New Account
            </p>
            <p
              class="dark:text-gray-50 text-gray-700 text-xs font-thin py-2 px-6"
            >
              Create a new account
            </p>
          </div>
        </div>
      </a>
      <!-- Create New Account Ends -->
      <!-- Each Account -->
      <a
        v-for="(account, index) in accounts"
        :key="index"
        :to="`/logs/${account.name}/${account.id}`"
        class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-900 w-64 m-auto relative hover:shadow-md"
      >
        <div class="w-full h-full text-center">
          <div class="flex h-full flex-col justify-between">
            <p class="text-gray-900 dark:text-white text-lg mt-4">
              {{ account.name }}
            </p>
            <p
              class="dark:text-gray-50 text-gray-700 text-xs font-thin py-2 px-6"
            >
              {{ account.description }}
            </p>
          </div>
        </div>
      </a>
      <!-- Each Account Ends -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
import BtnSpinner from "../../components/BtnSpinner.vue";
export default {
  components: {
    BtnSpinner,
  },
  data() {
    return {
      // Load Parameter
      isLoading: false,

      // Modals
      createAccountModal: false,

      // All Accounts
      accounts: [],

      // New Account Attributes
      new_account: {
        name: "",
        currency: "",
        description: "",
      },
    };
  },
  watch: {},
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
    async getAccounts() {
      // Create Self Variable
      var self = this;

      // Get Accounts
      await axios
        .get(`${this.getApiBaseUrl}api/accounts`, {
          headers: {
            Authorization: `Bearer ${this.getUserToken}`,
          },
        })
        .then((response) => {
          // Disable Load Params
          return (self.accounts = response.data);
        })
        .catch(() => {
          return self.BasicToast("Something went wrong", "error");
        });
    },
    // Create New Account
    async createNewAccount() {
      // Validation
      if (this.new_account.name.trim() == "")
        return this.BasicToast("Account name is required !", "warning");
      if (this.new_account.currency.trim() == "")
        return this.BasicToast("Select a currency !", "warning");
      if (this.new_account.description.trim() == "")
        return this.BasicToast("A brief description is required !", "warning");

      // Create Self Variable
      var self = this;
      // Init load params
      this.isLoading = true;

      // Login User
      await axios
        .post(`${this.getApiBaseUrl}api/account`, this.new_account, {
          headers: {
            Authorization: `Bearer ${this.getUserToken}`,
          },
        })
        .then(() => {
          // Disable Load Params
          self.isLoading = false;

          // Get Data
          self.getAccounts();

          // Close Modal
          return self.toggleModal(
            this.createAccountModal,
            "createAccountModal"
          );
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
    this.getAccounts();
  },
  mounted() {},
};
</script>
