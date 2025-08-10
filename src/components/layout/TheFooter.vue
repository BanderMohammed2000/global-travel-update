<template>
  <footer
    id="contact-us"
    class="bg-no-repeat bg-cover bg-center"
    :style="`background-image: url(${bgFooter})`"
  >
    <div class="container max-w-6xl mx-auto px-20 py-10">
      <form action="" @submit.prevent="clickSubmitBtn" class="relative">
        <h1
          class="text-3xl mb-10 text-white text-center leading-tight capitalize relative"
        >
          how we can help you?
        </h1>
        <div class="flex flex-col items-center mx-auto max-w-xl space-y-4">
          <input
            type="text"
            placeholder="Enter your Name"
            class="p-2 w-[118%] sm:w-full rounded border-2 border-lightGray outline-0"
          />
          <input
            type="email"
            placeholder="Enter your Email"
            class="p-2 w-[118%] sm:w-full rounded border-2 border-lightGray outline-0"
          />
          <textarea
            placeholder="Enter your Message"
            class="p-2 w-[118%] sm:w-full rounded h-28 border-2 border-lightGray outline-0"
          ></textarea>
          <button
            class="text-sm text-white uppercase px-6 py-2 bg-[#cca763] rounded w-fit"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  </footer>
</template>

<script>
import bgFooter from "@/assets/images/mount-fuji.jpg";
export default {
  data() {
    return {
      bgFooter,
    };
  },
  methods: {
    clickSubmitBtn() {
      alert("Sent successfully");
    },
  },
};
</script>

<style scoped>
h1::before {
  content: "";
  width: 90px;
  height: 5px;
  background-color: #cca763;
  position: absolute;
  top: 0%;
  left: 0;
}
h1::after {
  content: "";
  width: 5px;
  height: 200%;
  background-color: #cca763;
  position: absolute;
  top: 0%;
  left: 0;
}

form::before {
  content: "";
  width: 90px;
  height: 5px;
  background-color: #cca763;
  position: absolute;
  bottom: 0%;
  right: 0;
}
form::after {
  content: "";
  width: 5px;
  height: 21%;
  background-color: #cca763;
  position: absolute;
  bottom: 0%;
  right: 0;
}

@media (max-width: 767px) {
  h1::after,
  h1::before,
  form::before,
  form::after {
    display: none;
  }
}
</style>
