<template>
  <a
    class="fab fa-github text-white glow text-2xl sm:text-4xl cursor-pointer mx-2"
    :href="link ? link : defaultLink"
  ></a>
</template>

<script>
export default {
  name: "Github Icon",
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