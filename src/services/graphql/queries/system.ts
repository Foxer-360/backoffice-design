import gql from 'graphql-tag';

export const PAGE_PLUGINS = gql`
  query getPagePlugins($page: ID!, $language: ID!, $plugin: String!) {
    pagePlugins( where: {
      page: { id: $page },
      language: { id: $language },
      plugin: $plugin
    } ) {
      id
      plugin
      content
    }
  }
`;