import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class AppModule extends Component {

	public render(): JSX.Element {
		return (
			<Link
				style={{
					background: '#eee', 
					display: 'inline-block',
					margin: 15,
					padding: '15px 30px'
				}}
				to={'/seo'}
			>
				{'SEO'}
			</Link>
		);
	}

}

export default AppModule;
