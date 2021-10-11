<template>
  <input
    class="carousel-open"
    :id="`carousel-${idx}`"
    type="radio"
    name="carousel"
    aria-hidden="true"
    hidden=""
    checked
  />
  <img
    class="
      carousel-item
      absolute
      opacity-0
      object-scale-down
      max-h-56
      xl:max-h-80
      2xl:max-h-96
      rounded-xl
      bg-center
    "
    :src="image"
  />
</template>

<script>
// import { toRefs } from "@vue/reactivity";

export default {
  name: "Carousel Item",
  props: ["image", "idx"],
  //   setup(props) {
  //     const { idx, last } = toRefs(props);
  //     const prev = idx.value > 0 ? idx.value - 1 : last.value;
  //     const next = idx.value > last.value ? last.value : idx.value + 1;
  //     return {
  //       prev,
  //       next,
  //     };
  //   },
};
</script>

<style>
.carousel-item {
  transition: opacity 0.6s linear;
}
</style>