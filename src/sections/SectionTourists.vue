<template>
  <section id="tourists" class="bg-[rgb(26,24,24)]">
    <div
      class="container flex flex-col space-y-14 max-w-6xl mx-auto py-14 px-20"
    >
      <h2 class="text-center text-3xl text-[rgb(233,190,109)]">
        Everyone loves to travel
      </h2>
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
    </div>
  </section>
</template>

<script>
import BaseBox from "@/components/ui/BaseBox.vue";
export default {
  components: {
    BaseBox,
  },
  data() {
    return {
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

<style scoped></style>
