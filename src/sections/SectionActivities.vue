<template>
  <section
    id="activities"
    class="bg-no-repeat bg-cover bg-center"
    :style="`background-image: url(${bgCamp})`"
  >
    <div class="container max-w-6xl mx-auto px-20 py-20">
      <base-card>
        <template v-slot:header>
          <h1 class="card-header relative">
            Great outdoor activities in Colorado: readers' tips
          </h1>
        </template>
        <template v-slot:body>
          <p class="card-body !mt-8">
            Colorado offers endless adventures, from hiking in the Rockies to
            kayaking on clear mountain lakes. Locals suggest exploring scenic
            trails, camping under the stars, and enjoying the fresh mountain
            air.
          </p>
        </template>
        <template v-slot:footer>
          <button class="card-footer">Learn more</button>
        </template>
      </base-card>
    </div>
  </section>
</template>

<script>
import bgCamp from "@/assets/images/camp.jpg";
import BaseCard from "@/components/ui/BaseCard.vue";
export default {
  components: {
    BaseCard,
  },
  data() {
    return {
      bgCamp,
    };
  },
};
</script>

<style scoped>
h1::before {
  content: "";
  width: 5px;
  height: 115%;
  background-color: #cca763;
  position: absolute;
  top: 0%;
  left: -2rem;
}

h1::after {
  content: "";
  width: 25%;
  height: 5px;
  background-color: #cca763;
  position: absolute;
  bottom: -15%;
  left: -2rem;
}

@media (max-width: 480px) {
  h1::after {
    width: 50%;
  }
}
</style>
