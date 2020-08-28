<template>
  <fieldset :id="label.toLowerCase()">
    <legend @click.prevent="doCollapse">
      <span>{{ label }}</span>
      <i v-if="collapse" :class="collapsed ? 'vue-icon-arrow-down' : 'vue-icon-arrow-up'"></i>
    </legend>
    <div class="collapsible">
      <slot />
    </div>
  </fieldset>
</template>

<style scoped>
fieldset {
  margin: 16px 0;
  border-radius: 8px;
  background-color: rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
}
fieldset legend {
  display: inline-block;
  align-items: center;
  justify-content: center;
  color: var(--font-color);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
fieldset legend * {
  vertical-align: middle;
}
fieldset legend i {
  margin-left: 8px;
}

</style>

<script>
export default {
  name: 'LayoutSection',
  data() {
    return {
      collapsed: false,
    };
  },
  props: {
    label: {
      type: String,
      default: 'Section',
    },
    collapse: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    doCollapse({ target }) {
      const parent = target.parentNode.parentNode;
      parent.querySelector('.collapsible').classList.toggle('hidden');
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
