<template>
  <div>
    <div class="flex flex-column mt3">
      <input
        class="mb2"
        v-model="user.name"
        type="text"
        placeholder="Your name">
      <input
        class="mb2"
        v-model="user.email"
        type="email"
        placeholder="Your email">
    </div>
    <button @click="createUser()">Submit</button>
  </div>
</template>

<script>
  import { CREATE_USER_MUTATION } from '../constants/graphql'

  export default {
    name: 'CreateUser',
    data () {
      return {
        user: {
          name: '',
          email: ''
        },
        errors: ''
      }
    },
    methods: {
      createUser () {
        const { user, errors } = this.$data

        this.$apollo.mutate({
          mutation: CREATE_USER_MUTATION,
          variables: {
            name: user.name,
            email: user.email
          }
        })
      }
    }
  }
</script>