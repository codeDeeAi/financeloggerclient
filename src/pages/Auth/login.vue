<template>
  <div class="w-full bg-cover bg-landscape">
    <div
      class="container py-16 flex items-center justify-center flex-1 h-full mx-auto"
    >
      <div class="w-full max-w-lg">
        <div class="leading-loose">
          <form
            class="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl"
            :class="{ 'animate-pulse': isLoading }"
          >
            <p class="mb-8 text-2xl font-light text-center text-white">
              Login
            </p>
            <div class="mb-2">
              <div class="relative">
                <input
                  type="email"
                  @change="checkValidEmail()"
                  id="login-with-bg-email"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="email"
                  v-model="email"
                />
              </div>
            </div>
            <div class="mb-2">
              <div class="flex relative">
                <button
                  @click.prevent="showpassword()"
                  class="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"
                    />
                  </svg>
                </button>
                <input
                  type="password"
                  id="login-password"
                  class="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="password"
                  v-model="password"
                />
              </div>
            </div>
            <div class="flex items-center justify-between mt-4">
              <button
                type="button"
                @click.prevent="login()"
                class="py-2 px-4 flex justify-center bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                :disabled="isLoading"
              >
                <span v-if="!isLoading">Login</span>
                <span v-if="isLoading" class="italic flex gap-2">
                  loading ... <BtnSpinner
                /></span>
              </button>
            </div>
            <div class="text-center">
              <router-link
                to="/signup"
                class="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-gray-800"
              >
                Create an account
              </router-link>
            </div>
          </form>
        </div>
      </div>
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
      email: "",
      password: "",
      isLoading: false,
    };
  },
  watch: {
    // Watch Email
    email() {
      if (this.email.trim() == "")
        return this.BasicToast("Email is required !", "warning");
    },
    // Watch Password
    password() {
      if (this.password.trim() == "")
        return this.BasicToast("Password is required !", "warning");
    },
  },
  methods: {
    // Toggle password visibility
    showpassword() {
      var item = document.getElementById("login-password");

      // Toggle
      if (item.type == "password") {
        return (item.type = "text"); // Change to text
      } else {
        return (item.type = "password"); // Change tp password
      }
    },
    // Get CSRF Token
    async getCsrf() {
      await axios
        .get(`${this.getApiBaseUrl}sanctum/csrf-cookie`)
        .then(() => {});
    },

    // Check if email is valid
    checkValidEmail() {
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!this.email.match(validRegex))
        return this.BasicToast("A valid email is required !", "warning");
    },

    // Login
    async login() {
      // Validation
      if (this.email.trim() == "")
        return this.BasicToast("Email is required !", "warning");
      if (this.password.trim() == "")
        return this.BasicToast("Password is required !", "warning");

      // Get CSRF
      this.getCsrf();

      // Create Self Variable
      var self = this;
      // Init load params
      this.isLoading = true;

      // Login User
      await axios
        .post(`${this.getApiBaseUrl}api/signin`, {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          // Disable Load Params
          self.isLoading = false;

          // Data
          let data = {
            user: response.data.user,
            token: response.data.token,
          };
          // Save Auth Data
          self.setAuth(data);

          // Alert User
          self.BasicToast(`Welcome ${response.data.user.name}`, "success");

          // Push to dashboard
          self.$router.push("/accounts");
          // Reload Page
          location.reload();
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
  created() {},
  mounted() {},
};
</script>
