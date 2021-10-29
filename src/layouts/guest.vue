<template>
  <div>
    <!-- Header -->
    <AppHeader></AppHeader>
    <!-- Header Ends -->
    <!-- Page Views -->
    <div
      class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <router-view></router-view>
    </div>
    <!-- Page Views Ends -->
    <!-- Footer -->
    <AppFooter></AppFooter>
    <!-- Footer Ends -->
  </div>
</template>
<script>
import AppHeader from "../components/guest/header.vue";
import AppFooter from "../components/guest/footer.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {};
  },
};
</script>
