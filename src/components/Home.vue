<template>
  <div class="container-fluid flex-wrapper" ref="vantaRef">
    <header>
      <h1 id="fullname">MUHAMMAD IQBAL IMANI ATFAN</h1>
      <div>
        <VueWriter :array="arr" caret="cursor"> </VueWriter>
      </div>
    </header>
    <div class="mx-auto flex flex-row mb-8">
      <social-icon
        v-for="(data, index) in socialIcon"
        :key="index"
        :pathData="data.pathData"
        :link="data.link"
        :size="data.size"
      >
      </social-icon>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import SocialIcon from "./SocialIcon.vue";
import socialIconData from "../assets/socialIcon.json";

export default {
  components: {
    SocialIcon,
  },
  data() {
    return {
      arr: [
        "I'm programmer",
        "I'm currently unemployed",
        "I love playing games",
      ],
      socialIcon: socialIconData,
    };
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

.icon-glow {
  opacity: 0.75;
  transition: 0.3s !important;
}

.icon-glow:hover {
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