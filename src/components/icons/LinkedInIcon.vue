<template>
  <a
    class="fab fa-linkedin text-white glow text-2xl sm:text-4xl cursor-pointer mx-2"
    :href="link ? link : defaultLink"
  ></a>
</template>

<script>
export default {
  name: "LinkedIn Icon",
  props: ["size"],
  components: {},
  setup() {
    const defaultLink = "https://www.linkedin.com/in/imani-atfan/";
    return {
      defaultLink,
    };
  },
};
</script>