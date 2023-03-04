import { Component, h } from 'preact';
import { Link } from 'preact-router/match';
import { useEffect } from 'preact/hooks';
import style from './style.css';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {rerender: false}
	}
	render(props, {rerender}) {
		useEffect(() => {
			const resizeHandler = () => {
				this.setState({rerender: !rerender})
			}
			window.addEventListener('resize', resizeHandler)
			return () => {window.removeEventListener('resize', resizeHandler)}
		})
		return (
			<>
				<header class={style.header} hidden={screen.height === window.innerHeight}>
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
