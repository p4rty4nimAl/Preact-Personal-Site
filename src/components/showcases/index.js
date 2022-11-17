import { Component, h } from 'preact';
import style from './style.css';

import { Link } from 'preact-router/match';
import Searchbar from '../searchbar';

class Showcases extends Component {
	constructor(props) {
		super(props);
		let showcaseWidgets = [];
		for (let showcase of props.items) {
			showcaseWidgets.push(
				<Showcase item={showcase} key={showcase.link} />
			);
		}
		this.state = {showcaseWidgets: showcaseWidgets};
	}

	render() {
		return (
			<div class={style["showcase-container"]}>
				<Searchbar parent={this} />
				<div>
					{this.state.showcaseWidgets}
				</div>
			</div>
		)
	}
	search(query, items) {
		query = query.toLowerCase();
		let searchedShowcases = [];
		for (let showcase of items) {
			if (showcase.keywords.includes(query)) {
				searchedShowcases.push(<Showcase item={showcase} key={showcase.link}/>);
			}
		}
		this.setState({showcaseWidgets: searchedShowcases});
	}
}
export class Showcase extends Component {
	render() {
	    return (
            <span class={style.showcase}>
                <span class={style.header}>{this.props.item.name}</span>
                <span class={style.desc}>{this.props.item.desc}</span>
				<Link class={style.link} href={this.props.item.link}><button>Go!</button></Link>
            </span>
	    )
	}
}

export default Showcases;