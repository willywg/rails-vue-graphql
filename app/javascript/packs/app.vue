<template>
  <div id="app">
    <user-list></user-list>
  </div>
</template>

<script>
  import UserList from './components/UserList'

  export default {
    name: 'app',
    components: {
      UserList
    }
  }
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
