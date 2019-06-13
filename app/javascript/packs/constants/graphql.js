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
