<template>
  <section id="search">
    <div
      class="container flex flex-col-reverse items-stretch max-w-6xl mx-auto px-20 py-14 md:space-x-16 lg:flex-row"
    >
      <div class="mx-auto md:w-2/5">
        <img
          :src="skiImage"
          alt="Ski Image"
          class="h-96 object-cover"
          loading="lazy"
        />
      </div>
      <div class="card md:w-3/5 flex flex-col justify-center space-y-5">
        <h1 class="text-4xl text-white max-w-lg leading-tight">
          Searching for the world's most remote village
        </h1>
        <p class="text-sm text-lightGray max-w-md">
          Whether going on a mountain trip is a long-held ambition or a recent
          interest, there is no better time to plan an adventure than at the
          start of a new year.
        </p>
        <button class="text-sm text-white pb-1 border-b-2 border-white w-fit">
          Learn more
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import skiImage from "@/assets/images/ski.jpg";
export default {
  data() {
    return {
      skiImage,
    };
  },
};
</script>

<style scoped>
#search {
  background-color: #181818;
}
</style>
