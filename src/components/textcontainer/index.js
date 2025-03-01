import style from './style.css';
import { useState } from 'preact/hooks';

export const TextContainerLarge = (props) => {
    const {lockable, setExternalText, setInternalText, readOnly} = props;
    const [isLocked, _setLocked] = useState(false);
    const setLocked = state => lockable && _setLocked(state);

    return <div class={style.ciphercontainer}>
        <textarea cols="80" rows="12" onPaste={() => setLocked(true)} onKeyUp={e => setExternalText(e?.target?.value)} readOnly={isLocked || readOnly} value={setInternalText} /><br /><br />
        {isLocked && <button onClick={() => setLocked(false)}>Unlock</button>}
    </div>
}
export const TextContainerChar = (props) => {
    const {presetLetter, pushChar} = props;
    return <div class={style.ciphercontainer}>
        <textarea maxLength="1" class={style.small} cols="1" rows="1" onKeyUp={e => pushChar(e?.target?.value)} readOnly={!!presetLetter} value={presetLetter} /><br /><br />
    </div>
}