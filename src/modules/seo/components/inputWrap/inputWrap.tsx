import * as React from 'react';

import { Row } from 'antd';

interface Properties {
  title: string;
  children: JSX.Element;
}

const InputWrap = ({ title, children }: Properties) => (
  <Row style={{ marginBottom: 10 }}>
    <label>{title}</label>
    <div>{children}</div>
  </Row>
);

export default InputWrap;