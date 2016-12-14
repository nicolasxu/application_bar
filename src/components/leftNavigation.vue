<template>
  <nav class="left_navi">
    <h2>This is left navigation</h2>
    <ul>
      <li v-for="item in menu">
        <a href="">{{item}} </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'LeftNavigation',
    data: function () {
      return {
        menu: ['item1', 'item2', 'item3']
      }
    }
  }
</script>

<style scoped>
  .left_navi {
   
    float: left;
    height: 100vh; 
    width:300px;
   
    background-color: yellowgreen;
  }
</style>