<template>
  <div class="view-container">
    <HeaderBar @addTask="handleAddTask" date-class="dateClass" />

    <div class="task-list">
      <div><span class="tips">未完成</span></div>
      <Task v-for="task in unfinishedTask" :key="task._id" :task="task" @contextmenu.prevent.native="$refs.menu.open($event, { task })"/>
      <div><span class="tips">已完成</span></div>
      <Task v-for="task in finishedTask" :key="task._id" :task="task" @contextmenu.prevent.native="$refs.menu.open($event, { task })"/>
    </div>

    <vue-context ref="menu" v-slot="{ data }">
      <li>
        <a href="#" @click.prevent="handelRemoveTask(data.task)">删除任务</a>
      </li>
    </vue-context>
  </div>
</template>

<script>
import { firstBy } from 'thenby';
import VueContext from 'vue-context';
import HeaderBar from '../components/HeaderBar';
import Task from '../components/Task';

import { getTasks, removeTask } from '../api/TaskApi';

export default {
  name: 'Home',
  components: {
    HeaderBar,
    Task,
    VueContext,
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
    async handelRemoveTask(task) {
      await removeTask(task._id);
      this.$notify({ title: '删除成功' });
      this.loadData();
    },
  },
  async created() {
    this.loadData();
  },
};
</script>
<style scoped>
@import '~vue-context/dist/css/vue-context.css';
.tips {
  font-size: 14px;
  color: var(--font-color);
  filter: brightness(60%);
}

.view-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.task-list {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-left: 10px;
  margin: 0 -10px;
}
</style>
