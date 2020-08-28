<template>
  <div calss="view-container">
    <NavBar title="设置"></NavBar>
    <div class="content">
      <LayoutSection label="样式设置">
        <input class="edit-background-color" type="color" v-model="backgroundColor">
        <input class="edit-background-alpha" type="range" v-model="alpha" min="0" max="100">
      </LayoutSection>
      <br>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar';
import { setSetting } from '../api/SettingApi';

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
    backgroundColorWithAlpha() {
      if (!this.backgroundColor) return '';
      let alpha = parseInt(((this.alpha / 100) * 255), 10).toString(16);

      if (alpha.length === 1) {
        alpha = 0 + alpha;
      }

      return this.backgroundColor + alpha;
    },
  },
  watch: {
    backgroundColorWithAlpha(val) {
      this.setCssVar('backgroundColor', val);
      setSetting('backgroundColor', val);
    },
  },
  methods: {
    getCssVar(varName) {
      return styles.getPropertyValue(`--${varName}`);
    },
    setCssVar(varName, value) {
      document.documentElement.style.setProperty(`--${varName}`, value);
    },
  },
  async created() {
    const backgroundColor = this.getCssVar('backgroundColor').trim();

    this.backgroundColor = `${backgroundColor.substring(0, 7)}`;
    this.alpha = (Number.parseInt(backgroundColor.substring(7, 9), 16) / 255) * 100;
  },
};
</script>

<style scoped>

.content {
  color: var(--fontColor);
}

.edit-background-color {
  border: none;
  width: 32px;
  height: 32px;
  padding: 0;
  outline: 0;
}

.edit-background-color::-webkit-color-swatch-wrapper {
  padding: 0;
}

</style>
