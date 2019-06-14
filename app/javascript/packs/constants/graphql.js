import gql from 'graphql-tag'

export const ALL_USERS_QUERY = gql`
  query  {
    users {
      id
      name
      books {
        title
      }
    }
  }
`

export const CREATE_USER_MUTATION = gql`
  mutation createUserMutation($name: String!, $email: String!) {
    createUser(input: {
      name: $name,
      email: $email
    }) {
      user {
        id
        name
        email
      }
      errors
    }
  }
`