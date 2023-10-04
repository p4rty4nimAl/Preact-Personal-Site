import style from './style.css'
import { useState } from 'preact/hooks';

export const Scroll = (props) => {
    const {children, changeMenu, selectedButton} = props;
    const [isHidden, setHidden] = useState(false)
    const childNodes = !isHidden ? 
        children.map((child, index) => <ScrollEntry highlight={selectedButton === child.title} key={index} onclick={() => changeMenu(child.title)} title={child.title} />)
        : undefined;
    document.querySelector(':root').style.setProperty("--sw", isHidden ? "0%" : "25%");
    return (<>
        <button class={`${style['collapse-control']} ${isHidden ? style.collapsed : ""}`} onClick={() => {setHidden(!isHidden)}}>V</button>
        <div class={style.divider} />
        {childNodes}
    </>)
}
const ScrollEntry = (props) => {
    const {title, onclick, highlight} = props;
    return <>
        <button class={`${style.entry} ${highlight ? style.selected : ""}`} onClick={onclick}>{title}</button>
        <span class={style.after} />
    </>
}