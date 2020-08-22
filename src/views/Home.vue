<template>
  <div calss="view-container">
    <HeaderBar date-class="dateClass" />

    <Task v-for="task in tasks" :key="task.id" :task="task"/>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar';
import Task from '../components/Task';

export default {
  name: 'Home',
  components: {
    HeaderBar,
    Task,
  },
  data() {
    return {
      dateClass: '0', // 0, 1, 2, 7
      tasks: [
        { id: '1', title: '增加新的功能点车市', finished: false },
        { id: '2', title: 'test2', finished: true },
      ],
    };
  },
};
</script>
<style>

</style>
