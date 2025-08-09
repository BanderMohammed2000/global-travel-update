<template>
  <the-header></the-header>
  <section-search></section-search>
  <section-activities></section-activities>
  <section-tourists></section-tourists>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import SectionSearch from "./sections/SectionSearch.vue";
import SectionActivities from "./sections/SectionActivities.vue";
import SectionTourists from "./sections/SectionTourists.vue";
export default {
  components: {
    TheHeader,
    SectionSearch,
    SectionActivities,
    SectionTourists,
  },
};
</script>

<style></style>
