import style from './style.css';

import { Link } from 'preact-router/match';
import Searchbar from '../searchbar';
import { useState } from 'preact/hooks';

const Showcases = ({items}) => {
    const [showcaseWidgets, setShowcaseWidgets] = useState(items.map(item => <Showcase item={item} key={item.link} />));

    const search = query => { 
        //const showcaseWidgets = items.filter(item => item.keywords.includes(query.toLowerCase()))
        //    .map(item => <Showcase item={item} key={item.link} />);
        const showcaseWidgets = [];
        for (let i = 0; i < items.length; i++) if (items[i].keywords.includes(query.toLowerCase())) showcaseWidgets.push(<Showcase item={items[i]} key={items[i].link} />); 
        setShowcaseWidgets(showcaseWidgets);
    };
    
    // style written like that due to the '-' in the name
    return <>
        <header class={style.spacer} />
        <div class={style["showcase-container"]}>
            <Searchbar searchFunction={search} />
            <div>
                {showcaseWidgets}
            </div>
        </div>
    </>
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