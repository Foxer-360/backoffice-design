import * as React from 'react';
import { Component } from 'react';

import { Alert, Card } from 'antd';

import { SeoContent, SeoFormDataAndOperations, SeoFormState } from './interfaces';

interface Properties {
  seoData: SeoFormState;
  children: (data: SeoFormDataAndOperations) => JSX.Element;
}

interface State {
  content: SeoContent
}

class FormController extends Component<Properties, State> {

  constructor(props: Properties) {
    super(props);
    const content = this.getDefaultContent(props.seoData.seo.content);
    this.state = { content };
  }

  public updateDefault = (key: string, value: string): void => {
    const content = this.getContentWithoutReference();
    content[key] = value;
    this.setState({ content });
  }

  public updateFacebook = (key: string, value: string): void => {
    const content = this.getContentWithoutReference();
    content.facebook[key] = value;
    this.setState({ content });
  }

  public updateTwitter = (key: string, value: string): void => {
    const content = this.getContentWithoutReference();
    content.twitter[key] = value;
    this.setState({ content });
  }

  public saveSeoContent = (): Promise<LooseObject> => {
    const { updateSeo, seo } = this.props.seoData;
    return updateSeo({ data: this.state.content, where: { id: seo.id } });
  }

  public render(): JSX.Element {
    const { loading, error } = this.props.seoData;

    if (loading) { return <Card loading={loading} />; }

    if (error) {
      return (
        <div style={{ padding: 15 }}>
          <Alert
            message={error.name}
            description={error.message}
            type="error"
          />
        </div>
      );
    }

    return this.props.children({
      content: this.state.content,
      saveSeoContent: this.saveSeoContent,
      updateDefault: this.updateDefault,
      updateFacebook: this.updateFacebook,
      updateTwitter: this.updateTwitter
    });
  }

  private getContentWithoutReference(): SeoContent {
    return JSON.parse(JSON.stringify(this.state.content));
  }

  private getDefaultContent(seoContent: SeoContent): SeoContent {
    return {
      defaultImage: seoContent && seoContent.defaultImage || '',
      description: seoContent && seoContent.description || '',
      facebook: {
        description: seoContent && seoContent.facebook && seoContent.facebook.description || '',
        image: seoContent && seoContent.facebook && seoContent.facebook.image || '',
        title: seoContent && seoContent.facebook && seoContent.facebook.title || ''
      },
      focusKeyword: seoContent && seoContent.focusKeyword || '',
      keywords: seoContent && seoContent.keywords || '',
      themeColor: seoContent && seoContent.themeColor || '',
      title: seoContent && seoContent.title || '',
      twitter: {
        description: seoContent && seoContent.twitter && seoContent.twitter.description || '',
        image: seoContent && seoContent.twitter && seoContent.twitter.image || '',
        title: seoContent && seoContent.twitter && seoContent.twitter.title || '',
      }
    }
  }

}

export default FormController;