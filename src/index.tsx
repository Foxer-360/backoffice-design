import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import * as ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router';
import { client as graphqlClient } from './services/graphql';
import browserHistory from './services/history';
import registerServiceWorker from './services/serviceWorker';

import AppModule from './modules/app';
import SeoModule from './modules/seo';

import 'antd/dist/antd.css';
import './styles/main.scss';

ReactDOM.render(
	<ApolloProvider client={graphqlClient}>
		<Router history={browserHistory}>
			<div style={{ padding: 30 }}>
				<Switch>
					<Route path="/seo" component={SeoModule} />
					<Route path="/" component={AppModule} />
				</Switch>
			</div>
		</Router>
	</ApolloProvider>,
	document.getElementById('root') as HTMLElement
);

registerServiceWorker();
