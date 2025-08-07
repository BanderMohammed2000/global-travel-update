<template>
  <header
    id="header"
    class="bg-no-repeat bg-cover"
    :style="`background-image: url(${bgHero})`"
  >
    <div class="container max-w-6xl mx-auto px-6 py-12">
      <the-navbar></the-navbar>
    </div>
  </header>
</template>

<script>
import TheNavbar from "./TheNavbar.vue";
import bgHero from "@/assets/images/hero.jpg";
export default {
  components: {
    TheNavbar,
  },
  data() {
    return {
      bgHero,
    };
  },
};
</script>
