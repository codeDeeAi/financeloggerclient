<template>
  <div>
    <!-- Navigation -->

    <header
      class="shadow-md bg-white px-6 py-6 dark:bg-gray-700 items-center rounded-lg space-y-4"
    >
      <!-- Chart Type -->
      <div class="">
        <label for="type" class="block text-sm font-medium text-gray-700"
          >Chart Type</label
        >
        <select
          name="type"
          v-model="new_chart.type"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="i/e">Income vs Expenses</option>
          <option value="i/s">Income vs Savings</option>
          <option value="e/s">Savings vs Expenses</option>
        </select>
      </div>
      <!-- Chart Type -->
      <!-- Date From -->
      <div class="">
        <label for="date" class="block text-sm font-medium text-gray-700"
          >Date From</label
        >
        <input
          type="date"
          name="date"
          v-model="new_chart.date_from"
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
          v-model="new_chart.date_to"
          class="shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
        />
      </div>
      <!-- Date To -->
      <button
        type="button"
        @click.prevent="createNewChart()"
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
        <span v-if="!isLoading">Load Chart</span>
      </button>
    </header>

    <!-- Navigation Ends -->

    <!-- Bar Chart -->
    <div class="flex justify-center py-4">
      <BarChart
        :chart_data="data"
        :chart_options="options"
        class="w-5/6 mx-auto"
      />
    </div>
    <!-- Bar Chart Ends -->
  </div>
</template>
<script>
import axios from "axios";
import BarChart from "../../components/charts/barchart.vue";
export default {
  components: {
    BarChart,
  },
  data() {
    return {
      // Load Parameter
      isLoading: false,

      // Account Id
      account_id: this.$route.params.id,

      data: [],
      options: {
        title: "",
      },

      // New Log Attributes
      new_chart: {
        type: "",
        date_from: "",
        date_to: "",
      },
    };
  },
  watch: {
    "$route.params.id": {
      handler: function () {},
      deep: true,
      immediate: true,
    },
  },
  methods: {
    // Output Chart Title
    outputChartTitle() {
      if (this.new_chart.type == "i/e") {
        return (this.options.title = `Income/Expenses (${this.new_chart.date_from} to ${this.new_chart.date_to})`);
      }
      if (this.new_chart.type == "i/s") {
        return (this.options.title = `Income/Savings (${this.new_chart.date_from} to ${this.new_chart.date_to})`);
      }
      return (this.options.title = `Expenses/Savings (${this.new_chart.date_from} to ${this.new_chart.date_to})`);
    },

    // Create New Chart
    async createNewChart() {
      // Validation
      if (this.new_chart.type.trim() == "")
        return this.BasicToast("Type is required !", "warning");
      if (this.new_chart.date_from.trim() == "")
        return this.BasicToast("Date From is required !", "warning");
      if (this.new_chart.date_to.trim() == "")
        return this.BasicToast("Date To is required !", "warning");

      // Create Self Variable
      var self = this;
      // Init load params
      this.isLoading = true;

      // Create Log
      await axios
        .post(
          `${this.getApiBaseUrl}api/charts/${this.account_id}`,
          this.new_chart,
          {
            headers: {
              Authorization: `Bearer ${this.getUserToken}`,
            },
          }
        )
        .then((response) => {
          // Disable Load Params
          self.isLoading = false;

          // Output Title
          self.outputChartTitle();
          // Reset Log Params
        //   self.new_chart = {
        //     type: "",
        //     date_from: "",
        //     date_to: "",
        //   };
          // Close Modal
          return (self.data = response.data.data);
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
