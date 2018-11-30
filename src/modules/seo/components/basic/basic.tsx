import * as React from 'react';
import { Component } from 'react';

import { Col, Icon, Input, Row } from 'antd';

import { DefaultSeoContent } from '../form/interfaces';

import InputWrap from '../inputWrap';

interface Properties {
  seoData: DefaultSeoContent;
  change: (key: string, value: string) => void;
}

class BasicSeo extends Component<Properties> {

  public render(): JSX.Element {
    const { seoData } = this.props;
    return (
      <Row>
        <h2>{'Basic SEO Settings'}</h2>
        <Col md={12} style={{ padding: '0 10px' }}>
          <InputWrap title="Title">
            <Input
              value={seoData.title}
              placeholder="Page about some amazing stuffs"
              onChange={this.changeText('title')}
            />
          </InputWrap>
          <InputWrap title="Description">
            <Input
              value={seoData.description}
              placeholder="This page contains some important informations"
              onChange={this.changeText('description')}
            />
          </InputWrap>
          <InputWrap title="Keywords">
            <Input
              value={seoData.keywords}
              placeholder="Important information, amazing stuffs, etc..."
              onChange={this.changeText('keywords')}
            />
          </InputWrap>
          <InputWrap title="Focus Keyword">
            <Input
              value={seoData.focusKeyword}
              placeholder="Amazing stuff"
              onChange={this.changeText('focusKeyword')}
            />
          </InputWrap>
          <InputWrap title="Default Image">
            <Input
              value={seoData.defaultImage}
              placeholder="https://example.com/image.png"
              onChange={this.changeText('defaultImage')}
            />
          </InputWrap>
          <InputWrap title="Theme Color">
            <Input
              value={seoData.themeColor}
              placeholder="#000000"
              onChange={this.changeText('themeColor')}
            />
          </InputWrap>
        </Col>
        <Col md={12} style={{ padding: '0 10px' }}>
          <InputWrap title="Preview">
            {this.getPreview(seoData)}
          </InputWrap>
        </Col>
      </Row>
    );
  }

  private changeText = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => this.props.change(key, e.target.value);

  private getPreview(seoData: DefaultSeoContent): JSX.Element {
    return (
      <div style={{ border: '1px solid #ccc', borderRadius: 5, overflow: 'hidden' }}>
        <div style={{ borderBottom: '1px solid #ccc', padding: '5px 10px' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '0 0 30px', color: '#666', fontSize: 20, paddingTop: 1 }}><Icon type="home" /></div>
            <div style={{ borderRadius: 24, background: '#f0f3f4', padding: '5px 15px', color: '#999', flex: '1' }}>
              {'https://'}<span style={{ color: '#333' }}>{'www.google.com'}</span>{'/search?q=amazing_website'}
            </div>
          </div>
        </div>
        <div style={{ padding: '20px 30px' }}>
          <div style={{ maxWidth: 600 }}>
            <div style={{
              borderRadius: 2,
              boxShadow: '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)',
              fontFamily: 'Arial',
              fontSize: 16,
              height: 44,
              padding: '10px 15px'
            }}>
              <div style={{
                float: 'left',
                maxWidth: 400,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}>
                {seoData.focusKeyword.trim() ? seoData.focusKeyword : 'SEO'}
              </div>
              <div style={{ float: 'right' }}><Icon style={{ color: '#4285f4', fontSize: 20, paddingTop: 2 }} type="search" /></div>
              <div style={{ clear: 'both' }} />
            </div>
            <br />
            <div style={{
              color: '#1a0dab',
              fontFamily: 'Arial',
              fontSize: 18,
              maxWidth: 469,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {seoData.title.trim() ? seoData.title : 'Search engine optimization'}
            </div>
            <div style={{
              color: '#006621',
              fontFamily: 'Arial',
              fontSize: 14,
              maxWidth: 469,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {`https://example.com/Search_engine_optimization`}
            </div>
            <div style={{ color: '#545454', fontSize: 13, fontFamily: 'Arial', maxHeight: 38, overflow: 'hidden' }}>
              {seoData.description.trim() ? seoData.description : `
              Search engine optimization (SEO) is the process of affecting the online
              visibility of a website or a web page in a web search engine's unpaid
              results—often referred to as "natural", "organic", or "earned" results.
            `}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default BasicSeo;