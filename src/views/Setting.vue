<template>
  <div calss="view-container">
    <NavBar title="设置"></NavBar>
    <div class="content">
      <input type="color" v-model="backgroundColor">
      <input type="range" v-model="alpha" min="0" max="100">

      <br>
      {{backgroundColor}}
      {{alpha}}

      {{backgroundColorRgba}}
    </div>
  </div>
</template>

<script>
import hexRgb from 'hex-rgb';
import rgbHex from 'rgb-hex';
import NavBar from '../components/NavBar';

const styles = getComputedStyle(document.body);

export default {
  name: 'HeSettinglp',
  components: {
    NavBar,
  },
  data() {
    return {
      backgroundColor: '',
      alpha: 0,
    };
  },
  computed: {
    backgroundColorRgba() {
      if (!this.backgroundColor) return '';
      const rbga = hexRgb(this.backgroundColor);
      rbga.alpha = this.alpha / 100;

      return `rgba(${rbga.red}, ${rbga.green}, ${rbga.blue},  ${rbga.alpha})`;
    },
  },
  watch: {
    backgroundColorRgba(val) {
      this.setCssVar('backgroundColor', val);
      // console.log(val);
    },
  },
  methods: {
    getCssVar(varName) {
      return styles.getPropertyValue(`--${varName}`);
    },
    setCssVar(varName, value) {
      console.log(value);
      styles.setProperty(`--${varName}`, value);
    },
  },
  created() {
    const currentRgba = this.getCssVar('backgroundColor');
    const currentHex = rgbHex(currentRgba);

    this.backgroundColor = `#${currentHex.substring(0, 6)}`;
    this.alpha = (Number.parseInt(currentHex.substring(6, 8), 16) / 255) * 100;
  },
};
</script>

<style scoped>

.content {
  color: var(--fontColor);
}

</style>
