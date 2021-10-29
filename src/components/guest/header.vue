<template>
  <div
    class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
  >
    <div class="relative flex items-center justify-between">
      <a
        href="/"
        aria-label="Finance Logger"
        title="Finance Logger"
        class="inline-flex items-center"
      >
        <img
          class="h-8 w-auto sm:h-10"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        />
        <span
          class="ml-2 hidden lg:block text-xl font-bold tracking-wide text-gray-800 uppercase"
          >Finance Logger</span
        >
      </a>
      <ul class="flex items-center space-x-8 lg:flex">
        <li>
          <router-link
            to="/login"
            aria-label="Login"
            title="Login"
            class="font-medium tracking-wide hover:text-gray-50 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >Login</router-link
          >
        </li>
        <li>
          <router-link
            to="/signup"
            aria-label="Sign up"
            title="Sign up"
            class="font-medium tracking-wide hover:text-gray-50 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >Sign up</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>
