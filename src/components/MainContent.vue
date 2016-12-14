<template>
  <main>
    <main-header v-bind:user="firstUser"></main-header>
    <h3>This is main component</h3>
    <p> {{mainData}}</p>
  </main>
</template>

<script>
  import MainHeader from './Header'
  export default {
    name: 'MainContent',
    components: {
      MainHeader
    },
    props: ['userName'],
    data: function () {
      return {
        firstUser: {
          name: 'Nick',
          email: 'xu.shenxin@gmail.com'
        },
        mainData: 'This is main Data'
      }
    }
  }
</script>

<style scoped>
  main {
    

    margin-left: 300px;
    width: auto;
    height: 100vh;
  
    
    background-color: lightcyan;

    
  }

</style>