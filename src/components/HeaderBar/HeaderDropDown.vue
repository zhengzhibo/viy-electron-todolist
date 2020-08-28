<template>
  <vue-dropdown class="date-class-btn">
    <span class="dropdown-link">
      <span class="date-class-label">所有</span>
      <i class="vue-icon-arrow-down vue-icon--right"></i>
    </span>
    <vue-dropdown-menu slot="dropdown">
      <vue-dropdown-item>今天</vue-dropdown-item>
      <vue-dropdown-item>明天</vue-dropdown-item>
      <vue-dropdown-item>近七天</vue-dropdown-item>
    </vue-dropdown-menu>
  </vue-dropdown>
</template>

<script>
export default {
  name: 'HeaderDropDown',
};
</script>

<style>
.date-class-label {
  cursor: pointer;
  font-size: 25px;
  color: var(--font-color);
}

.vue-icon--right {
  cursor: pointer;
  color: var(--font-color);
  vertical-align: unset;
}
</style>
