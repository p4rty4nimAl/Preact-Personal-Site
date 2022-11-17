import { Component } from 'preact';
import style from './style.css';

import { Link } from 'preact-router/match';

class Portfolio extends Component { 
	
	render() {
		return (
			<div class={style.portfolio}>
				<p>portfolio</p>
			</div>
		);
	}
}

export default Portfolio;
