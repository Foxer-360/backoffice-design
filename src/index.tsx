import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Application from '@source/components/Application';
import registerServiceWorker from '@source/services/serviceWorker';

import '@source/styles/main.scss';

ReactDOM.render(
  <Application />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
