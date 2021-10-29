<template>
  <div class="w-screen h-screen overflow-y-auto">
    <!-- App Header -->
    <AppHeader></AppHeader>
    <!-- App Header Ends -->
    <!-- Page Views -->
    <div
      class="p-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <router-view></router-view>
    </div>
    <!-- Page Views Ends -->
  </div>
</template>
<script>
import AppHeader from "../components/auth/header.vue";
export default {
  components: {
    AppHeader,
  },
  data() {
    return {};
  },
  created() {
    // Apply Middleware
    if (!this.isLoggedIn || this.getUser == null || this.getUserToken == null) {
      return this.$router.push("/login");
    }
  },
};
</script>
