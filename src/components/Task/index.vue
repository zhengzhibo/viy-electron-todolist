<template>
  <div class="task-container" :class="{ 'task-container-finished': task.finished}"
    :priority="task.priority">
      <vue-checkbox :class="['task-check', task.finished ? 'task-finished' : '']"
      @change="checkChange" v-model="task.finished">{{task.title}}</vue-checkbox>
      <i class="more-icon vue-icon-more"></i>
  </div>
</template>

<script>
import { updateTask } from '../../api/TaskApi';

export default {
  props: ['task'],
  methods: {
    async checkChange() {
      updateTask(this.task._id, {
        $set: {
          finished: this.task.finished,
          finishedTime: this.task.finished ? new Date() : 0,
        },
      });
    },
  },
};
</script>

<style scoped>

.task-container {
  display: flex;
  justify-content: space-between;
  padding: 3px 10px;
  margin: 0 -10px;
}

.task-container[priority="1"] >>> .vue-checkbox__inner{
  border: 2px solid rgb(144, 220, 144);
}

.task-container[priority="2"] >>> .vue-checkbox__inner{
  border: 2px solid rgb(250, 120, 120);
}

.task-container[priority="3"] >>> .vue-checkbox__inner{
  border: 2px solid red;
}

.task-container >>> .vue-checkbox__inner:active{
  box-shadow: inset 0px 0px 4px 1px #888888;
}

.task-container >>> .vue-checkbox__inner:active:after {
  display: none;
}

.task-container-finished {
  filter: brightness(60%);
}

.task-container:hover {
  background-color: rgba(255, 255, 255, .1)
}

.task-check {
  text-overflow: ellipsis;
  overflow: hidden;
  color: var(--font-color);
}

.task-check >>> .vue-checkbox__label {
  color: var(--font-color);
  vertical-align: text-bottom;
}

.more-icon {
  cursor: pointer;
  color: var(--font-color);
  line-height: 22px;
  visibility: hidden;
}

.task-container:hover .more-icon {
  visibility: visible;
}
</style>
