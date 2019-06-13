<template>
  <div>
    <p>{{user.id}}) <strong>{{user.name}}</strong></p>
    <ul>
      <li 
        v-for="book in user.books"
        :key="book.title"
      >
        {{ book.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'UserItem',
    props: ['user']
  }
</script>