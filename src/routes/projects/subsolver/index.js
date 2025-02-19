import { Fragment } from 'preact';
import style from './style.css';
import { useState } from 'preact/hooks';

import ToggleSwitch from '../../../components/switches/toggle';
import { TextContainerChar, TextContainerLarge } from '../../../components/textcontainer';

const TranslationRing = ({orderedCipherData, substitutionAlphabet, setSubAlpha}) => {
    const makePushCharFunc = idx => char => {
        // make a copy
        const newSubAlpha = [...substitutionAlphabet];
        newSubAlpha[idx] = char;
        setSubAlpha(newSubAlpha);
    }

    const presetArray = [];
    const subAlphaInputs = []
    for (let i = 0; i < orderedCipherData.length; i++) {
        presetArray.push(<TextContainerChar presetLetter={orderedCipherData[i]} />);
        subAlphaInputs.push(<TextContainerChar pushChar={makePushCharFunc(i)} />);
    }
    return <div class={style.ring}>
        <div class={style.ringlayer}>
            {presetArray}
        </div>
        <div class={style.ringlayer}>
            {subAlphaInputs}
        </div>
    </div>
}

const SubSolver = () => {
    const [cipherText, setCipherText] = useState("");
    const cipherData = {};
    for (let i = 0; i < cipherText.length; i++) cipherData[cipherText[i]] = (cipherData[cipherText[i]] ?? 0) + 1;
    
    const [orderedCipherData, setCipherOrder] = useState(new Array(cipherText.length));
    const [substitutionAlphabet, setSubAlpha] = useState(new Array(orderedCipherData.length).fill(""));
    const [copyTextThrough, setTextMethod] = useState(false);

    const updateCipherText = (cipherText) => {
        setCipherText(cipherText);
        // sort cipher data by the following criteria: most to least frequent; where frequency equal, sort alphabetically.
        // then, map it into an array without freq. data.
        setCipherOrder(Object.entries(cipherData).sort((a, b) => a[1] === b[1] ? a[0].charCodeAt(0) - b[0].charCodeAt(0) : b[1] - a[1]).map(val => val[0]))
    }
    let plaintext = "";
    const converter = {}
    for (let i = 0; i < orderedCipherData.length; i++) {
        const charExistForConversion = !(substitutionAlphabet[i] === undefined || substitutionAlphabet[i].length === 0);
        converter[orderedCipherData[i]] = charExistForConversion ? substitutionAlphabet[i] : (copyTextThrough ? orderedCipherData[i] : " ");
    }
    for (let i = 0; i < cipherText.length; i++) {
        // occasional race condition where most recent char typed is undefined in converter?
        plaintext += converter[cipherText[i]] ?? (copyTextThrough ? cipherText[i] : " ");
        //plaintext = plaintext.replaceAll(orderedCipherData[i], substitutionAlphabet[i] ?? (copyTextThrough ? orderedCipherData[i] : " "));
    }
    const decipherEnabled = cipherText.length !== 0;

    return <>
        <p class={style.description}>This tool can aid with solving a ciphertext that has been enciphered with a substitution cipher.<br />
        Paste the ciphertext you would like to work with below!<br />
        <a href="https://en.wikipedia.org/wiki/Letter_frequency">Letter frequency</a> can be exploited due to ordering from most to least common.</p>
        <TextContainerLarge setExternalText={updateCipherText} lockable={true} />
        {decipherEnabled && <>
            <p class={style.switchText}>Copy text through <ToggleSwitch syncExternalState={setTextMethod} inText={true} /></p>
            <TranslationRing orderedCipherData={orderedCipherData} setSubAlpha={setSubAlpha} substitutionAlphabet={substitutionAlphabet} />
            <TextContainerLarge setInternalText={plaintext} readOnly={true} />
        </>}
    </>
}

export default SubSolver;