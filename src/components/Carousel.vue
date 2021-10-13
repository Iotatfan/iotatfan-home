<template>
  <div class="carousel relative rounded overflow-hidden shadow-xl mx-auto">
    <div class="carousel-inner relative overflow-hidden">
      <carousel-item
        v-for="(image, index) in images"
        :key="index"
        :idx="index"
        :image="image"
      />
      <ol class="carousel-indicators list-outside list-disc">
        <li
          :for="`carousel-${index - 1}`"
          class="inline-block mr-3"
          v-for="index in images.length"
          :key="index - 1"
        >
          <label
            :for="`carousel-${index - 1}`"
            class="
              carousel-bullet
              cursor-pointer
              text-xs text-white
              hover:text-violet
              font-bold
              fas
              fa-circle
            "
          ></label>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import CarouselItem from "./CarouselItem.vue";
export default {
  name: "Carousel",
  components: { CarouselItem },
  props: { images: Array, default: [] },
  setup(props) {
    const { images } = toRefs(props);
    const last = images.value.length - 1;
    return {
      last,
    };
  },
};
</script>

<style>
.carousel-indicators {
  margin: 0px !important;
  padding: 0px !important;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

.carousel-bullet:hover {
  transition: 0.4s;
  margin: 0px !important;
}

.carousel-open:checked ~ .carousel-bullet {
  color: rgba(145, 42, 94, 1);
}

.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}
</style>