<template>
  <header
    id="header"
    class="bg-no-repeat bg-cover bg-center pb-24 relative"
    :style="`background-image: url(${bgHero})`"
  >
    <!-- <div class="overlay absolute bg-matteBlack w-full h-full"></div> -->
    <div class="container max-w-6xl mx-auto p-6">
      <the-navbar></the-navbar>
    </div>
    <div class="w-full border-b-4 border-white opacity-10 mb-52"></div>
    <div class="container relative max-w-6xl mx-auto px-20">
      <base-card>
        <template v-slot:header>
          <p
            class="w-fit text-xs text-white font-normal py-1 pl-2 pr-8 rounded-sm bg-[rgb(183,148,84,0.7)]"
          >
            The Telegraph / 5 January - 9:41 AM
          </p>
          <h1 class="card-header">
            15 Mountain holidays to conquer in your lifetime
          </h1>
        </template>
        <template v-slot:body>
          <p class="card-body">
            Whether going on a mountain trip is a long-held ambition or a recent
            interest, there is no better time to plan an adventure than at the
            start of a new year.
          </p>
        </template>
        <template v-slot:footer>
          <button class="card-footer">Learn more</button>
        </template>
      </base-card>
    </div>
  </header>
</template>

<script>
import TheNavbar from "./TheNavbar.vue";
import BaseCard from "../ui/BaseCard.vue";
import bgHero from "@/assets/images/hero.jpg";
export default {
  components: {
    TheNavbar,
    BaseCard,
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

@media (max-width: 768px) {
  h1::before {
    height: 100%;
  }
  .card::before {
    width: 50%;
  }
  .card::after {
    display: none;
  }
}
</style>
