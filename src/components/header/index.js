import { Component, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

class Header extends Component {
	render() {
		return (
			<>
				<header class={style.header}>
					<h1>xtraea.com</h1>
					<nav>
						<Link href="/">Home</Link>
						<Link href="/projects">Projects</Link>
						<Link href="/portfolio">Portfolio</Link>
						<Link href="/docs">Documentation</Link>
					</nav>
				</header>
				<header />
			</>
		)
	}
}

export default Header;
