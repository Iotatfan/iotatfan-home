<template>
  <a
    class="fas fa-globe text-white glow text-2xl sm:text-4xl cursor-pointer mx-2"
    :href="link ? link : defaultLink"
  ></a>
</template>

<script>
export default {
  name: "Website Icon",
  props: ["link", "size"],
  components: {},
  setup() {
    const defaultLink = "https://github.com/Iotatfan";
    return {
      defaultLink,
    };
  },
};
</script>