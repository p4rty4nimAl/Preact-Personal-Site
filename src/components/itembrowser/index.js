import { useEffect, useState } from 'preact/hooks';
import style from './style.css';
import { Scroll } from '../../components/scroll/'

const ItemBrowser = (props) => {
    const {titles, items} = props;
    const [displayedDoc, setDoc] = useState();
    const [selectedButton, setSelectedButton] = useState();
    const formatForURL = url => url?.replace(/[():' ]/g, "");
    const changeMenu = title => {
        let doc = items[title];
        if (Array.isArray(doc)) {
            doc = doc.map((item, i) => [item, <br key={i} />]).flat();
        }
        setDoc(doc);
        setSelectedButton(title);
        window.location.href = `${window.location.href.split("#")[0]}#${formatForURL(title)}`;
    }
    useEffect(() => {
        if (typeof window === "undefined") return;
        // page load, therefore not SSR; nav to correct doc
        const doc = window.location.href.split("#")[1];
        if (!doc) {
            setDoc("This will display an item's contents when it is clicked.");
            return;
        }
        const docTitle = titles.find(({title}) => formatForURL(title) === doc).title;
        changeMenu(docTitle);
    }, []);
    return (
        <span class={style.container}>
            <div class={`${style.scrollable} ${style['items-list']}`}>
                <Scroll changeMenu={changeMenu} selectedButton={selectedButton}>
                    {titles}
                </Scroll>
            </div>
            <div class={style.scrollable}>{displayedDoc}</div>
        </span>
    );
}

export default ItemBrowser;