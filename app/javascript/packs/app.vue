<template>
  <div id="app">
    <user-list></user-list>
    <create-user></create-user>
  </div>
</template>

<script>
  import UserList from './components/UserList'
  import CreateUser from './components/CreateUser'

  export default {
    name: 'app',
    components: {
      UserList,
      CreateUser
    }
  }
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
