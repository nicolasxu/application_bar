<template>
  <header>This is header
    <div class="name">{{user.name}}</div>
    <div class="email">{{user.email}}</div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data: function () {
      return {
        userName: ''
      }
    },
    props: ['user'] // it is user obj
  }
</script>

<style scoped>
  header {
    background-color: lightgray;
  }
  .name, .email {
    display: inline-block;
  }
</style>