<template>
  <the-header></the-header>
  <section-hinterland></section-hinterland>
  <section-activities></section-activities>
  <section-stats></section-stats>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import SectionHinterland from "./sections/SectionHinterland.vue";
import SectionActivities from "./sections/SectionActivities.vue";
import SectionStats from "./sections/SectionStats.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
  components: {
    TheHeader,
    SectionHinterland,
    SectionActivities,
    SectionStats,
    TheFooter,
  },
};
</script>

<style></style>
