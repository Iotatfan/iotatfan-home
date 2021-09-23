<template>
  <div class="container-fluid flex-wrapper" ref="vantaRef">
    <header>
      <h1 id="fullname">MUHAMMAD IQBAL IMANI ATFAN</h1>
      <div>
        <p id="intro">I am <span>...</span></p>
      </div>
    </header>
  </div>
</template>

<script>
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'

export default {
    mounted() {
        this.vantaEffect = NET({
            el: this.$refs.vantaRef,
            THREE: THREE
        })
    }
};
</script>

<style>
.flex-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}

header {
    padding-top: 15%;
    padding-inline-start: 15%;
    padding-inline-end: 15%;
}



</style>