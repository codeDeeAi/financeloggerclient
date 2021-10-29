<template>
  <div class="flex justify-center">
    <GChart type="ColumnChart" :options="chart_options" :data="chart_data" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  name: "App",
  components: {
    GChart,
  },
  props: {
    chart_data: {
      type: [Array, Object],
      default: Array,
      required: true,
    },
    chart_options: {
      type: Object,
      default: Object,
      required: true,
    },
  },
  watch: {
    chart_data() {},
    chart_options() {},
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
