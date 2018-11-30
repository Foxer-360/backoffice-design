import gql from 'graphql-tag';

export const LOCAL_SET_USER = gql`
  mutation setUser($id: ID!) {
    setUser(id: $id) @client
  }
`;
