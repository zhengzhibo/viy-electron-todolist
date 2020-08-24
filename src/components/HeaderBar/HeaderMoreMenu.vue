<template>
  <vue-dropdown class="date-class-btn" @command="handleCommand">
    <span class="header-more-btn">

      <i class="vue-icon-more"></i>
    </span>
    <vue-dropdown-menu slot="dropdown">
      <vue-dropdown-item command="setting">设置</vue-dropdown-item>
      <vue-dropdown-item command="help">帮助</vue-dropdown-item>
      <vue-dropdown-item  command="exit" divided>退出</vue-dropdown-item>
    </vue-dropdown-menu>
  </vue-dropdown>
</template>

<script>
import { ipcRenderer } from 'electron';

export default {
  name: 'HeaderMoreMenu',
  methods: {
    handleCommand(command) {
      switch (command) {
        case 'exit':
          ipcRenderer.sendSync('QuitApp');
          break;
        case 'help':
          this.$router.push({ name: 'Help' });
          break;
        case 'setting':
          this.$router.push({ name: 'Setting' });
          break;
        default:
          this.$notify({ title: '很抱歉，功能开发中……' });
          break;
      }
    },
  },
};
</script>

<style>
.header-more-btn {
  cursor: pointer;
  font-size: 18px;
  line-height: 36px;
  color: var(--fontColor);
}

.vue-icon--right {
  cursor: pointer;
  color: var(--fontColor);
  vertical-align: unset;
}
</style>
