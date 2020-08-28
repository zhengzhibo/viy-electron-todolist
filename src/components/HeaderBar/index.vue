<template>
  <div class="header-container">
    <div class="menu-container">
      <HeaderDropDown style="-webkit-app-region: no-drag;" />
      <HeaderMoreMenu style="-webkit-app-region: no-drag;" />
    </div>
    <vue-input class="add-input" v-model="taskInput" placeholder="请输入任务"
      @keydown.native.enter="handleEnterKey"></vue-input>
  </div>
</template>

<script>
import HeaderDropDown from './HeaderDropDown';
import HeaderMoreMenu from './HeaderMoreMenu';
import { addTask } from '../../api/TaskApi';

export default {
  name: 'HeaderBar',
  components: {
    HeaderDropDown,
    HeaderMoreMenu,
  },
  data() {
    return {
      taskInput: '',
    };
  },
  methods: {
    async handleEnterKey(event) {
      if (!this.taskInput) return;

      console.log(event);

      const task = await addTask({
        title: this.taskInput,
        createOn: new Date(),
      });

      this.taskInput = '';
      this.$emit('addTask', task);
    },
  },
};
</script>

<style>
.header-container {
  margin-bottom: 10px;
}

.menu-container {
  -webkit-app-region: drag;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.add-input .vue-input__inner{
  background-color: var(--background-color);
  color: var(--font-color)
}

.add-input .vue-input__inner::placeholder{
  color: var(--font-color);
  filter: brightness(60%);
}
</style>
