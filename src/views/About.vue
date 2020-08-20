<template>
  <div class="about">
    <h1>This is an about page</h1>
    <vue-input v-model="value"></vue-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '123',
    };
  },
};
</script>
