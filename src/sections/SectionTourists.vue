<template>
  <section id="tourists" class="bg-[rgb(26,24,24)]">
    <div
      class="container flex flex-col space-y-14 max-w-6xl mx-auto pt-14 pb-20 px-20"
    >
      <h1 class="text-center text-3xl leading-tight text-[rgb(233,190,109)]">
        Everyone loves to travel
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <base-box
          v-for="(box, index) in BoxesValues"
          :key="index"
          :num="box.num"
          :desc="box.desc"
        ></base-box>
      </div>

      <!--  -->
      <div
        class="flex flex-col-reverse items-stretch !mt-32 md:space-x-16 md:flex-row"
      >
        <base-card class="relative md:w-3/5">
          <template v-slot:header>
            <h1 class="card-header pr-8 pt-8 md:pt-0">
              Ueli Steck: The Swiss Machine sets new climbing record goal
            </h1>
          </template>
          <template v-slot:body>
            <p class="card-body pr-8">
              Ueli Steck, famed for his speed climbs, is aiming for another
              world record. The mountaineering community watches in
              anticipation. His determination and skill continue to inspire
              climbers worldwide.
            </p>
          </template>
          <template v-slot:footer>
            <button class="card-footer">Learn more</button>
          </template>
        </base-card>
        <div class="image md:w-2/5 mb-10 md:mb-0 relative">
          <img
            :src="climbImage2"
            alt="climb Image"
            class="h-96 object-cover hidden md:block"
            loading="lazy"
          />
          <img
            :src="climbImage"
            alt="climb Image"
            class="h-96 object-cover md:absolute md:bottom-16 md:right-16"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseBox from "@/components/ui/BaseBox.vue";
import BaseCard from "@/components/ui/BaseCard.vue";
import climbImage from "@/assets/images/climb.jpg";
import climbImage2 from "@/assets/images/climb2.jpg";
export default {
  components: {
    BaseBox,
    BaseCard,
  },
  data() {
    return {
      climbImage,
      climbImage2,
      BoxesValues: [
        { num: 57, desc: "Active tours" },
        { num: 1000, desc: "Happy clients" },
        { num: 60, desc: "Destinations" },
        { num: 12, desc: "Years of work" },
      ],
    };
  },
};
</script>

<style scoped>
h1.card-header::before {
  content: "";
  width: 5px;
  height: 60%;
  background-color: #cca763;
  position: absolute;
  top: 0;
  left: -2rem;
}

h1.card-header::after {
  content: "";
  width: 50%;
  height: 5px;
  background-color: #cca763;
  position: absolute;
  top: 0;
  left: -2rem;
}

div.image::after {
  content: "";
  width: 70%;
  height: 5px;
  background-color: #cca763;
  position: absolute;
  bottom: -2rem;
  right: -2rem;
}

div.image::before {
  content: "";
  width: 5px;
  height: 60%;
  background-color: #cca763;
  position: absolute;
  bottom: -2rem;
  right: -2rem;
}

@media (max-width: 480px) {
  h1.card-header::after {
    width: 70%;
  }
}

@media (max-width: 767px) {
  div.image::after,
  div.image::before {
    display: none;
  }
}
</style>
