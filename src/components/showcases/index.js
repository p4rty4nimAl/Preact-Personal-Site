import { Component, h } from 'preact';
import style from './style.css';

import { Link } from 'preact-router/match';
import Searchbar from '../searchbar';

class Showcases extends Component {
	constructor(props) {
		super(props);
		const showcaseWidgets = props.items.filter(item => !item.hidden)
            .map(item => {
                return <Showcase item={item} key={item.link} />
            });
		this.state = {showcaseWidgets};
	}

	render() {
        // style written like that due to the '-' in the name
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
		const showcaseWidgets = items.filter(item => item.keywords.includes(query))
            .map(item => <Showcase item={item} key={item.link} />);
		this.setState({showcaseWidgets});
	}
}
export const Showcase = (props) => {
	const {item} = props;
	const {name, desc, link} = item;
	return (
		<span class={style.showcase}>
			<span class={style.header}>{name}</span>
			<span class={style.desc}>{desc}</span>
			<Link class={style.link} href={link}><button>Go!</button></Link>
		</span>
	)
}

export default Showcases;