<template>
  <div class="task-container">
      <vue-checkbox :class="['task-check', task.finished ? 'task-finished' : '']"
      v-model="task.finished">{{task.title}}</vue-checkbox>
      <i class="more-icon vue-icon-more"></i>
  </div>
</template>

<script>
export default {
  props: ['task'],
};
</script>

<style scoped>

.task-container {
  display: flex;
  justify-content: space-between;
  padding: 3px 10px;
  margin: 0 -10px;
}

.task-container:hover {
  background-color: rgba(255, 255, 255, .1)
}

.task-check >>> .vue-checkbox__label {
  color: var(--fontColor);
}

.more-icon {
  color: var(--fontColor);
  line-height: 22px;
}
</style>
