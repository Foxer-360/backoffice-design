import * as React from 'react';
import { Component } from 'react';

import { Tabs } from 'antd';

import { SeoFormDataAndOperations } from './components/form/interfaces';

import BasicSeo from './components/basic';
import FacebookSeo from './components/facebook';
import SeoForm from './components/form';
import TwitterSeo from './components/twitter';

const TabPane = Tabs.TabPane;
const TabContentWrap = ({ children }: { children: JSX.Element }) => <div style={{ padding: 15 }}>{children}</div>;

class SeoModule extends Component {

  public render() {
    return (
      <SeoForm>
        {(seoDataAndOps: SeoFormDataAndOperations) => {
          return (
            <Tabs defaultActiveKey="1">
              <TabPane tab="Seo" key="1">
                <TabContentWrap>
                  <BasicSeo seoData={seoDataAndOps.content} change={seoDataAndOps.updateDefault} />
                </TabContentWrap>
              </TabPane>
              <TabPane tab="Facebook" key="2">
                <TabContentWrap>
                  <FacebookSeo seoData={seoDataAndOps.content.facebook} change={seoDataAndOps.updateFacebook} />
                </TabContentWrap>
              </TabPane>
              <TabPane tab="Twitter" key="3">
                <TabContentWrap>
                  <TwitterSeo seoData={seoDataAndOps.content.twitter} change={seoDataAndOps.updateTwitter} />
                </TabContentWrap>
              </TabPane>
            </Tabs>
          );
        }}
      </SeoForm>
    );
  }

}

export default SeoModule;