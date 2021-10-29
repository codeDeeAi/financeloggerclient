<template>
  <li>
    <a
      class="block hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer"
      @click.prevent="showDetails()"
    >
      <div class="px-4 py-4 sm:px-6">
        <div class="flex items-center justify-between">
          <p
            class="flex items-center text-md font-light text-gray-500 dark:text-gray-300"
          >
            {{ data.date }}
          </p>
          <span
            v-if="data.type == 'income'"
            class="px-4 py-2 flex items-center text-sm lg:text-base rounded-full text-green-500 border border-green-500 hover:cursor"
          >
            + {{ data.amount }}
          </span>
          <span
            v-if="data.type == 'expense'"
            class="px-4 py-2 flex items-center text-sm lg:text-base rounded-full text-red-500 border border-red-500 hover:cursor"
          >
            - {{ data.amount }}
          </span>
          <span
            v-if="data.type == 'savings'"
            class="px-4 py-2 flex items-center text-sm lg:text-base rounded-full text-blue-500 border border-blue-500 hover:cursor"
          >
            {{ data.amount }}
          </span>

          <div class="ml-2 flex-shrink-0 flex">
            <p
              v-if="data.type == 'income'"
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
            >
              {{ data.type }}
            </p>
            <p
              v-if="data.type == 'expense'"
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-400 text-green-800"
            >
              {{ data.type }}
            </p>
            <p
              v-if="data.type == 'savings'"
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-400 text-green-800"
            >
              {{ data.type }}
            </p>
          </div>
        </div>
        <div class="mt-2 flex">
          <div class="w-full">
            <div
              :id="`eachTrans${data.id}`"
              class="text-md text-gray-700 hidden dark:text-white md:truncate"
            >
              <p>{{ data.details }}</p>
              <div class="flex justify-end">
                <button
                  type="button"
                  @click.prevent="deleteLog()"
                  class="py-2 px-4 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 opacity-70 cursor-pointer rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </li>
</template>
<script>
import axios from "axios";
export default {
  props: {
    data: {
      required: true,
      type: [Object],
    },
  },
  data() {
    return {
      showMore: false,
    };
  },
  methods: {
    showDetails() {
      var list = document.getElementById(`eachTrans${this.data.id}`);
      // Open if closed
      if (list.classList.contains("hidden")) {
        return list.classList.remove("hidden");
      }
      // close if open
      return list.classList.add("hidden");
    },

    // Delete Log
    async deleteLog() {
      if (!confirm("Are you sure you want to delete this log ?")) return;

      // Get Accounts
      await axios
        .delete(`${this.getApiBaseUrl}api/transaction/${this.data.id}`, {
          headers: {
            Authorization: `Bearer ${this.getUserToken}`,
          },
        })
        .then(() => {
          // Reload Page
          location.reload();
        })
        .catch(() => {
          return this.BasicToast("Something went wrong", "error");
        });
    },
  },
};
</script>
