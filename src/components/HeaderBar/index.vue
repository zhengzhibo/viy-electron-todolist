<template>
  <div class="header-container">
    <div class="menu-container">
      <HeaderDropDown />
      <HeaderMoreMenu />
    </div>
    <vue-input class="add-input" placeholder="请输入任务" @keydown.native.enter="addTask"></vue-input>
  </div>
</template>

<script>
import HeaderDropDown from './HeaderDropDown';
import HeaderMoreMenu from './HeaderMoreMenu';
import TaskApi from '../../api/TaskApi';

export default {
  name: 'HeaderBar',
  components: {
    HeaderDropDown,
    HeaderMoreMenu,
  },
  methods: {
    addTask() {
      console.log(TaskApi.taskAdd());
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
  background-color: var(--backgroundColor);
  color: var(--fontColor)
}

.add-input .vue-input__inner::placeholder{
  color: var(--fontColor)
}
</style>
