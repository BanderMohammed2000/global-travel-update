<template>
  <section id="hinterland" class="bg-[#0d0c0c]">
    <div
      class="container flex flex-col-reverse items-stretch max-w-6xl mx-auto px-20 py-14 md:space-x-16 md:flex-row"
    >
      <div class="md:w-2/5">
        <img
          :src="villageImage"
          alt="Village Image"
          class="h-96 object-cover"
          loading="lazy"
        />
      </div>
      <base-card class="relative md:w-3/5 mb-10 md:mb-0">
        <template v-slot:header>
          <h1 class="card-header pr-8 pt-8 md:pt-0">
            Searching for the world's most remote village
          </h1>
        </template>
        <template v-slot:body>
          <p class="card-body pr-8">
            Far from cities and modern life, some villages remain hidden in
            nature. These remote places are hard to reach but full of beauty and
            peace. Life there is simple, quiet, and connected to the land.
            Finding such a village is like stepping into another world.
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
import BaseCard from "@/components/ui/BaseCard.vue";
import villageImage from "@/assets/images/village.jpg";
export default {
  components: {
    BaseCard,
  },
  data() {
    return {
      villageImage,
    };
  },
};
</script>

<style scoped>
h1::before {
  content: "";
  width: 5px;
  height: 100%;
  background-color: #cca763;
  position: absolute;
  top: 0%;
  right: 0rem;
}

.card::before {
  content: "";
  width: 50%;
  height: 5px;
  background-color: #cca763;
  position: absolute;
  right: 0rem;
  top: 0%;
}

.card::after {
  content: "";
  width: 50%;
  height: 5px;
  background-color: #cca763;
  position: absolute;
  right: 0rem;
  bottom: 0%;
}

@media (max-width: 768px) {
  h1::before {
    height: 100%;
  }
  .card::before {
    width: 80%;
  }
  .card::after {
    display: none;
  }
}
</style>
