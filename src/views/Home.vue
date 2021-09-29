<template>
  <div class="flex-wrapper" ref="vantaRef">
    <header class="mx-5">
      <h1 class="font-bold text-4xl md:text-5xl text-center text-white">
        MUHAMMAD IQBAL IMANI ATFAN
      </h1>
      <div>
        <VueWriter
          :array="arr"
          caret="cursor"
          class="mx-5 text-2xl md:text-4xl"
        >
        </VueWriter>
      </div>
    </header>
    <footer class="flex flex-col mb-8">
      <portofolio />
      <div class="flex flex-row mx-auto">
        <social-icon
          v-for="(data, index) in socialIcon"
          :key="index"
          :pathData="data.pathData"
          :link="data.link"
          :size="data.size"
        >
        </social-icon>
      </div>
    </footer>
  </div>
</template>

<script>
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import SocialIcon from "../components/SocialIcon.vue";
import socialIconData from "../assets/socialIcon.json";
import Portofolio from "../components/Portofolio.vue";

export default {
  components: {
    SocialIcon,
    Portofolio,
  },
  data() {
    return {
      arr: [
        "I'm programmer",
        "I'm currently unemployed",
        "I love playing games",
      ],
      showPortofolio: false,
      socialIcon: socialIconData,
    };
  },
  methods: {
    togglePortofolio() {
      this.showPortofolio = !this.showPortofolio;
    },
  },
  mounted() {
    this.vantaEffect = NET({
      el: this.$refs.vantaRef,
      THREE: THREE,
      gyroControl: true,
      points: 10.0,
    });
  },
  beforeUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
};
</script>

<style>
.flex-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}

.glow {
  opacity: 0.75;
  transition: 0.3s !important;
}

.glow:hover {
  opacity: 1;
}

.is-typed {
  font-size: 32px;
  font-family: "Courier New", Courier, monospace !important;
}

.is-typed span.typed {
  color: white !important;
  font-weight: bold;
}

#fullname {
  font-weight: bold !important;
  font-size: 56px;
}

header {
  padding-top: 40vh;
}

footer {
  padding-bottom: 10px;
}
</style>