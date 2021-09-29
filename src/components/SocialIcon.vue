<template>
  <a :href="link" class="mx-2">
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 512"
      :width="size"
      :height="size"
      class="glow fill-current text-white"
    >
      <path fill="#ffffff" :d="pathData"></path>
    </svg>
  </a>
</template>

<script>
export default {
  name: "SocialIcon",
  props: ["pathData", "link", "size"],
};
</script>