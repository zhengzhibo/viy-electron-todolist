<template>
  <div calss="view-container">
    <NavBar title="设置" />
    <div class="content">
      <LayoutSection label="样式设置">
        <LayoutItem title="背景色">
          <input class="edit-background-color" type="color" v-model="backgroundColor">
        </LayoutItem>
        <LayoutItem title="透明度">
          <input class="edit-background-alpha" type="range" v-model="alpha" min="0" max="100">
        </LayoutItem>
        <LayoutItem title="字体色">
          <input class="edit-font-color" type="color" v-model="fontColor">
          {{fontColor}}
        </LayoutItem>
      </LayoutSection>

      <span>z-todo v1.0</span>
      <br>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar';
import { setSetting } from '../api/SettingApi';
import LayoutItem from '../components/LayoutItem';

const styles = getComputedStyle(document.body);

export default {
  name: 'HeSettinglp',
  components: {
    NavBar,
    LayoutItem,
  },
  data() {
    return {
      backgroundColor: '',
      alpha: 0,
      fontColor: '',
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
      this.setCssVar('background-color', val);
      setSetting('backgroundColor', val);
    },
    fontColor(val) {
      this.setCssVar('font-color', val);
      setSetting('fontColor', val);
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
    const backgroundColor = this.getCssVar('background-color').trim();

    this.backgroundColor = `${backgroundColor.substring(0, 7)}`;
    this.alpha = (Number.parseInt(backgroundColor.substring(7, 9), 16) / 255) * 100;

    const fontColor = this.getCssVar('font-color').trim();
    this.fontColor = fontColor;
  },
};
</script>

<style scoped>

.content {
  color: var(--font-color);
}

input[type="color"] {
  border: none;
  width: 32px;
  height: 32px;
  padding: 0;
  outline: 0;
}

input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}

</style>
