import { useState } from 'preact/hooks';
import style from './style.css';
import { Link } from 'preact-router';

const InputForm = (props) => {
    const {type, update} = props;

    return (
        <>
            <div class={style.inputTag}>
                <span class={style.descriptionTag}>{type}: </span>
                <textarea maxlength="500" rows="1" class={style.textTag} onChange={update} placeholder="optional..." />
            </div>
            <br />
        </>
    )
}
const OutputDisplay = (props) => {
    const {URLID} = props;
    const url = `https://api.xtraea.com/v1/embed?s=${URLID}`

    const copyLink = () => {
        if (typeof window === "undefined" || typeof navigator?.clipboard === "undefined") return;
        navigator.clipboard.writeText(url);
    }
    return (
        <>
            <div class={style.outputContainer}>
                <button onClick={copyLink} class={style.outputButton}>Copy to clipboard</button>
                <p class={`${style.textTag} ${style.output}`} >{url}</p>
            </div>
        </>
    );
}

const EmbedCreator = () => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const [color, setColor] = useState();
    const [outputURL, setOutput] = useState("...");
    const [prevHeaders, setPrevHeaders] = useState({});

    const submit = () => {
        const request = new XMLHttpRequest;
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                const responseJSON = JSON.parse(request.responseText);
                setOutput(responseJSON.response);
            }
        }
        request.open("POST", "https://api.xtraea.com/v1/embed");

        const headers = {title, description, image, color};
        let valuesValid = false;
        for (const [name, value] of Object.entries(headers)) {
            if (value && prevHeaders && prevHeaders[name] !== value) valuesValid = true;
        }
        if (valuesValid) {
            request.send(JSON.stringify(headers));
            setPrevHeaders(headers);
        }
        return;
    }
    return (
        <>
            <br />
            <p><Link href="/disclaimer">Disclaimer</Link></p>
            <p class={style.textDescription}>A tool to create custom link embeds on external sites that display link previews.<br /><br />
                Title: The text at the top of an embed; can be clicked.<br />
                Description: Typically the text displayed under the title.<br />
                Image: Link to an image to embed into the external site. In some cases the link may need cleaning, such as if there is a '?' or a '#'. To clean the link, simply remove the '?'/'#' and anything that follows it.<br />
                Color: If the external site supports an accent color, this will set it. Enter as a hex code, without a '#' before it.
            </p>
            <InputForm type="Title" update={e => setTitle(e.target.value)} />
            <InputForm type="Description" update={e => setDescription(e.target.value)} />
            <InputForm type="Image" update={e => setImage(e.target.value)} />
            <InputForm type="Color" update={e => setColor(e.target.value)} />
            <br />
            <button class={style.submitButton} onClick={submit}>Generate embed link</button>
            <br /><br /><br />
            <OutputDisplay URLID={outputURL} />
        </>
    )
}

export default EmbedCreator;