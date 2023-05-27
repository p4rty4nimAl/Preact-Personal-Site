import style from './style.css'

export const Scroll = (props) => {
    const {children, changeMenu, selectedButton} = props;
    const childNodes = children.map((child, index) => <ScrollEntry highlight={selectedButton === child.title} key={index} onclick={() => changeMenu(child.title)} title={child.title} />);
    return <>{childNodes}</>
}
const ScrollEntry = (props) => {
    const {title, onclick, highlight} = props;
    return <button class={`${style.entry} ${highlight ? style.selected : ""}`} onclick={onclick}>{title}</button>
}