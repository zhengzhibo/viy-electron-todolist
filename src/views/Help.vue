<template>
  <div calss="view-container">
    <NavBar title="帮助"></NavBar>
    <div class="content">
      <h1>基本用法</h1>
      <p>
        输入框输入任务标题后，直接按回车键即可添加任务。
        如果按回车的同时按住Shift、Alt、Crtl键，则可将任务的优先级对应设置为低、中、高。
      </p>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar';

export default {
  name: 'Help',
  components: {
    NavBar,
  },
};
</script>

<style scoped>

.content {
  color: var(--font-color);
}

.content h1 {
  font-size: 18px;
  margin: 0;
}

.content p {
  font-size: 14px;
  margin: 0;
}
</style>
