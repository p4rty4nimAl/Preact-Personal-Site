import style from './style.css';

import { Showcase } from '../../components/showcases'
import { Link } from 'preact-router/match';

const items = [
	{
		name: "Website Projects", 
		desc: "Here you can find all my web-based projects.",
		link: "/projects" 
	},
	{
		name: "Portfolio", 
		desc: "My projects that run elsewhere, working with different languages.",
		link: "/portfolio" 
	},
	{
		name: "Documentation", 
		desc: "Documentation of all my formally released projects, web-based or not.",
		link: "/docs" 
	}
];
export const Home = () => {
	return (
		<div class={style.home}>
			<p>Welcome! This site is a collection of tools, for me or anyone else who can make use of them. They may find aid in the <Link href="/docs">docs</Link>, of course.</p>
			<p>If you are, however, looking for something new to try, there are options below with varying degrees of effort and processor power required.</p>
			<Showcase item={items[0]} />
			<Showcase item={items[1]} />
			<Showcase item={items[2]} />
		</div>
	)
}

export default Home;
