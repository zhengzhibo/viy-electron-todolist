<template>
  <div calss="view-container">
    <HeaderBar @addTask="handleAddTask" date-class="dateClass" />

    <div><span class="tips">未完成</span></div>
    <Task v-for="task in unfinishedTask" :key="task._id" :task="task"/>
    <div><span class="tips">已完成</span></div>
    <Task v-for="task in finishedTask" :key="task._id" :task="task"/>
  </div>
</template>

<script>
import { firstBy } from 'thenby';
import HeaderBar from '../components/HeaderBar';
import Task from '../components/Task';
import { getTasks } from '../api/TaskApi';

export default {
  name: 'Home',
  components: {
    HeaderBar,
    Task,
  },
  data() {
    return {
      tasks: [],
      dateClass: '0', // 0, 1, 2, 7
    };
  },
  computed: {
    unfinishedTask() {
      return this.tasks.filter((task) => !task.finished)
        .sort(
          firstBy('priority', 'desc')
            .thenBy('createOn'),
        );
    },
    finishedTask() {
      return this.tasks.filter((task) => task.finished)
        .sort(
          firstBy('finishedTime'),
        );
    },
  },
  methods: {
    async loadData() {
      this.tasks = await getTasks();
    },
    handleAddTask() {
      this.loadData();
    },
  },
  async created() {
    this.loadData();
  },
};
</script>
<style scoped>

.tips {
  font-size: 14px;
  color: var(--fontColor);
  filter: brightness(60%);
}
</style>
