<template>
  <div class="item-container">
    <span class="item-title">{{title}}</span>
    <div class="item-content">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutItem',
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>

.item-container + .item-container {
  margin-top: 10px;
}

.item-title {
  color: var(--font-color);
  line-height: 2em;
  filter: brightness(80%);
}
</style>
