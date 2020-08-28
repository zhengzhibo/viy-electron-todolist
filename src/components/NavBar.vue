<template>
  <div class="navbar-container">
    <i @click="handleBack" class="vue-icon-arrow-left"></i>
    <span class="title">{{title}}</span>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['title'],
  methods: {
    handleBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>

.navbar-container {
  line-height: 16px;
  -webkit-app-region: drag;
  color: var(--font-color);
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.navbar-container > * {
  -webkit-app-region: no-drag;
}

.navbar-container > i {
  cursor: pointer;
}
</style>
