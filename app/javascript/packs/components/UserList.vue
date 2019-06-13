<template>
  <div>
    <h4 v-if="loading">Loading...</h4>
    <user-item
      v-for="user in users"
      :key="user.id"
      :user="user">
    </user-item>
  </div>
</template>

<script>
  import { ALL_USERS_QUERY } from '../constants/graphql'
  import UserItem from './UserItem'

  export default {
    name: 'UserList',
    data () {
      return {
        users: [],
        loading: 0
      }
    },
    components: {
      UserItem
    },
    apollo: {
      users: {
        query: ALL_USERS_QUERY
      }
    }
  }
</script>