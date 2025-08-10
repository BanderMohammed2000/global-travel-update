<template>
  <nav class="flex items-center justify-between font-bold text-white">
    <h1 class="text-xl md:text-2xl font-medium">Global Travel Update</h1>
    <!-- Menu -->
    <div class="hidden h-10 md:flex md:items-center md:space-x-14">
      <div>
        <a href="#hinterland" class="hover:text-[#cca763] capitalize"
          >hinterland</a
        >
      </div>
      <div>
        <a href="#stats" class="hover:text-[#cca763] capitalize">stats</a>
      </div>
      <div>
        <a href="#contact-us" class="hover:text-[#cca763] capitalize"
          >contact us</a
        >
      </div>
    </div>
    <!-- Hamburger Menu -->
    <div class="md:hidden">
      <button
        id="menu-btn"
        ref="btn"
        @click="navToggle"
        type="button"
        class="z-40 block hamburger md:hidden focus:outline-none"
      >
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </button>
    </div>
  </nav>
  <!-- Mobile Menu -->
  <div
    id="menu"
    ref="menu"
    class="absolute top-0 bottom-0 left-0 flex-col self-end hidden w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"
  >
    <a href="#hinterland" class="hover:text-[#cca763] capitalize">hinterland</a>
    <a href="#stats" class="hover:text-[#cca763] capitalize">stats</a>
    <a href="#contact-us" class="hover:text-[#cca763] capitalize">contact us</a>
  </div>
</template>

<script>
export default {
  methods: {
    navToggle() {
      this.$refs.btn.classList.toggle("open");
      this.$refs.menu.classList.toggle("flex");
      this.$refs.menu.classList.toggle("hidden");
    },
  },
};
</script>

<style scoped></style>
