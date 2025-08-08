<template>
  <header
    id="header"
    class="bg-no-repeat bg-cover h-screen bg-center relative"
    :style="`background-image: url(${bgHero})`"
  >
    <!-- <div class="overlay absolute bg-matteBlack w-full h-full"></div> -->
    <div class="container max-w-6xl mx-auto p-6">
      <the-navbar></the-navbar>
    </div>
    <div class="w-full border-b-4 border-white opacity-10 mb-52"></div>
    <div class="container relative max-w-6xl mx-auto px-20">
      <div class="card flex flex-col justify-center space-y-5">
        <p
          class="w-fit text-xs text-white font-normal py-1 pl-2 pr-8 rounded-sm bg-[rgb(183,148,84,0.7)]"
        >
          The Telegraph / 5 January - 9:41 AM
        </p>
        <h1 class="text-4xl text-white max-w-lg leading-tight">
          15 Mountain holidays to conquer in your lifetime
        </h1>
        <p class="text-sm text-lightGray max-w-2xl">
          Whether going on a mountain trip is a long-held ambition or a recent
          interest, there is no better time to plan an adventure than at the
          start of a new year.
        </p>
        <button class="text-sm text-white pb-1 border-b-2 border-white w-fit">
          Learn more
        </button>
      </div>
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

<style scoped>
h1::before {
  content: "";
  width: 5px;
  height: 135%;
  /* height: 18.9rem; */
  background-color: #cca763;
  position: absolute;
  top: -15%;
  /* transform: translateY(-50%); */
  left: 1.5rem;
}

.card::before {
  content: "";
  width: 25%;
  /* width: 17rem; */
  height: 5px;
  background-color: #cca763;
  position: absolute;
  left: 1.5rem;
  top: -15%;
}

.card::after {
  content: "";
  width: 25%;
  /* width: 17rem; */
  height: 5px;
  background-color: #cca763;
  position: absolute;
  left: 1.5rem;
  bottom: -20%;
  /* bottom: -22%; */
}
</style>
