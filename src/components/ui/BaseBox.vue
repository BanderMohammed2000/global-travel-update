<template>
  <div
    class="flex flex-col items-center space-y-6 py-16 border-2 border-[#C5C5C542]"
  >
    <p class="text-5xl text-[rgb(233,190,109)]">{{ num }}</p>
    <p class="text-md text-white uppercase text-center">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  props: ["num", "desc"],
};
</script>

<style scoped></style>
