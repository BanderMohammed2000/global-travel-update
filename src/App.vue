<template>
  <the-header></the-header>
  <section-search></section-search>
  <section-activities></section-activities>
  <section-tourists></section-tourists>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import SectionSearch from "./sections/SectionSearch.vue";
import SectionActivities from "./sections/SectionActivities.vue";
import SectionTourists from "./sections/SectionTourists.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
  components: {
    TheHeader,
    SectionSearch,
    SectionActivities,
    SectionTourists,
    TheFooter,
  },
};
</script>

<style></style>
