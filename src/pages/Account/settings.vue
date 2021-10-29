<template>
  <div>
    <div>
      <div class="">
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <!-- Account Name -->
                <div class="">
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                    >Account Name</label
                  >
                  <input
                    @change="updateAccount('name')"
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
                    @change="updateAccount('currency')"
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
                      @change="updateAccount('description')"
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

        <!-- Delete Account -->
        <div class="my-3">
          <button
            @click.prevent="deleteAccount()"
            type="button"
            class="py-2 px-4 flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            Delete this account
          </button>
        </div>
        <!-- Delete Account Ends -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      new_account: {
        name: "",
        currency: "",
        description: "",
      },
    };
  },
  methods: {
    // Get Account Details
    async getAccountDetails() {
      // Create Self Variable
      var self = this;

      // Get Accounts
      await axios
        .get(`${this.getApiBaseUrl}api/account/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.getUserToken}`,
          },
        })
        .then((response) => {
          // Disable Load Params
          return (self.new_account = {
            name: response.data[0].name,
            currency: response.data[0].currency,
            description: response.data[0].description,
          });
        })
        .catch(() => {
          return self.BasicToast("Something went wrong", "error");
        });
    },

    // Update Account Detail
    async updateAccount(type) {
      // Validation
      if (type == "name" && this.new_account.name.trim() == "")
        return this.BasicToast("Account name is required !", "warning");
      if (type == "currency" && this.new_account.currency.trim() == "")
        return this.BasicToast("Select a currency !", "warning");
      if (type == "description" && this.new_account.description.trim() == "")
        return this.BasicToast("A brief description is required !", "warning");

      // Create Self Variable
      var self = this;
      // Init load params
      this.isLoading = true;

      // Attach Value
      var value = "";

      if (type == "name") {
        value = this.new_account.name;
      } else if (type == "currency") {
        value = this.new_account.currency;
      } else {
        value = this.new_account.description;
      }

      // Update account
      await axios
        .put(
          `${this.getApiBaseUrl}api/account/${this.$route.params.id}`,
          { value: value, type: type },
          {
            headers: {
              Authorization: `Bearer ${this.getUserToken}`,
            },
          }
        )
        .then(() => {
          // Disable Load Params
          self.isLoading = false;

          // Alert User
          self.BasicToast(`${type} updated successfully`, "success");

          // Get Data
          return self.getAccountDetails();
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

    // Delete Account
    async deleteAccount() {
      if (!confirm("Are you sure you want to delete this account ?")) return;
      // Create Self Variable
      var self = this;

      // Delete Account
      await axios
        .delete(`${this.getApiBaseUrl}api/account/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.getUserToken}`,
          },
        })
        .then(() => {
          // Alert User
          self.BasicToast("Account Deleted !", "success");

          //   Redirect home
          self.$router.push("/accounts");

          // Reload Page
          return location.reload();
        })
        .catch(() => {
          return self.BasicToast("Something went wrong", "error");
        });
    },
  },
  created() {
    // Startup methods
    this.getAccountDetails();
  },
};
</script>
