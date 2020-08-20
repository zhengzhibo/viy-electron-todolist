<template>
  <div class="hello">
    <vue-button type="primary" @click="btnClick">Click Me</vue-button>

  </div>
</template>

<script>
export default {
  methods: {
    btnClick() {
      this.$alert({
        title: 'Title',
        message: 'This is a message',
        callback: (action) => {
          this.$notify({ title: action });
        },
      });
    },
  },
};
</script>

<style scoped>
</style>
