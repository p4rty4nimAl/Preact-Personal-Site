import style from './style.css';
import { useState } from 'preact/hooks';

const ToggleSwitch = (props) => {
    const {syncExternalState, inText, invertColor} = props;
    const [isToggled, setToggled] = useState(false);
    const changeToggleState = () => {
        setToggled(!isToggled);
        syncExternalState(!isToggled);
    }

    return <label class={style.ToggleSwitch}>
        <input class={`${style.checkbox} ${invertColor ? style.invert : ""}`} type="checkbox" onClick={changeToggleState} checked={isToggled} />
        <span class={`${style.slide} ${inText ? style.inP : ""} ${invertColor ? style.invert : ""}`} />
    </label>
}

export default ToggleSwitch;