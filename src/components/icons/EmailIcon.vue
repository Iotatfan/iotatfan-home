<template>
  <a
    class="fas fa-envelope text-white glow text-2xl sm:text-4xl cursor-pointer mx-2"
    :href="link ? link : defaultLink"
  ></a>
</template>

<script>
export default {
  name: "Email Icon",
  props: ["size"],
  components: {},
  setup() {
    const defaultLink = "mailto:imaniatfan@gmail.com";
    return {
      defaultLink,
    };
  },
};
</script>