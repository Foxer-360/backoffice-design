import * as React from 'react';
import { Component } from 'react';

import { adopt } from 'react-adopt';
import { Mutation, Query } from 'react-apollo';

import { mutations, queries } from '@source/services/graphql';
import { SeoFormDataAndOperations, SeoFormQM, SeoFormState } from './interfaces';

import FormController from './formController';

const QueriesAndMutations = adopt({
  // Production components in the bottom of this file 
  language: ({ render }) => render('cjm69cpmg000m08728qa5oy02'), // Koh-I-Noor - CS
  page: ({ render }) => render('cjm988oxn00jw0861rwa83541'), //  Koh-I-Noor - Homepage
  seo: ({ render, page, language, plugin }) => (
    <Query query={queries.PAGE_PLUGINS} variables={{ page, language, plugin }}>
      {({ data, loading, error }) => render({ data, loading, error })}
    </Query>
  ),
  updateSeo: ({ render }) => (
    <Mutation mutation={mutations.CREATE_USER}>
      {(updateSeo) => render(updateSeo)}
    </Mutation>
  )
});

interface Properties {
  children: (data: SeoFormDataAndOperations) => JSX.Element;
}

class SeoForm extends Component<Properties> {

  public getSeoFormState({ seo, updateSeo }: SeoFormQM): SeoFormState {
    return {
      error: seo.error,
      loading: seo.loading,
      seo: seo.data,
      updateSeo
    };
  }

  public render() {
    return (
      <QueriesAndMutations plugin="SEO">
        {(seoData: SeoFormQM) => (
          <FormController seoData={this.getSeoFormState(seoData)}>
            {this.props.children}
          </FormController>
        )} 
      </QueriesAndMutations>
    );
  }

}

export default SeoForm;

/*

+----------------------------------+
|          Graphiql query          |
+----------------------------------+

query {
  project (where: { id: "cjm69k17m001v0872m0nd1mwo" }) {
    id
    name
    websites (where: { id: "cjm69kd1g00240872187gyn3k" }) {
      id
      title
      pages (where: { id: "cjm988oxn00jw0861rwa83541" }) {
        id
        type {
          id
          name
          plugins
        }
      }
    }
    languages {
      id
      code
    }
    defaultLanguage {
      id	
      code
      isEnabled
    }
  }
  pagePlugins (where: { page: { id: "cjm988oxn00jw0861rwa83541" } }) {
    id
    plugin
    content
  }
}

+------------------------------------+
|          Adopt components          |
+------------------------------------+

{
  language: ({ render }) => (
    <Query query={queries.LOCAL_SELECTED_LANGUAGE}>
      {({ data: { language } }) => render(language && language.id)}
    </Query>
  ),
  page: ({ render }) => (
    <Query query={queries.LOCAL_SELECTED_PAGE}>
      {({ data: { page }}) => render(page && page.id)}
    </Query>
  ),
}

+-------------------------------------------------+
|          SEO plugin content interface           |
+-------------------------------------------------+

interface SeoContent {
  title: string; // <title><CONTENT></title>
  description: string; // <meta name="description" content="<CONTENT>">
  themeColor: string; // <meta name="theme-color" content="<CONTENT>">
  keywords: string; // <meta name="keywords" content="<CONTENT>">
  focusKeyword: string; // Main keyword that should be in title and keywords 
  defaultImage: string; // URL to default image -> used when there is not facebook/twitter image set
  facebook: {
    title: string; // <meta property="og:title" content="<CONTENT>">
    description: string; // <meta property="og:description" content="<CONTENT>">
    image: string; // <meta property="og:image" content="<CONTENT>">
  };
  twitter: {
    title: string; // <meta name="twitter:title" content="<CONTENT>">
    description: string; // <meta name="twitter:description" content="<CONTENT>">
    image: string; // <meta name="twitter:image" content="<CONTENT>">
  };
}

*/