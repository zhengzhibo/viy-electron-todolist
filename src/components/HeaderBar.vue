<template>
  <div class="header-container">
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
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
};
</script>

<style>

.date-class-label {
  cursor: pointer;
  font-size: 25px;
  color: white;
}

.vue-icon--right {
  cursor: pointer;
  color: white;
  vertical-align: unset;
}
</style>
