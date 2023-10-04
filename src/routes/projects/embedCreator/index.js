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
    const {URLID, linkName} = props;
    let url = `https://api.xtraea.com/v1/embed?s=${URLID}`;
    if (linkName) url = `[${linkName}](${url})`;

    const copyLink = () => {
        if (typeof window === "undefined" || typeof navigator?.clipboard === "undefined") return;
        navigator.clipboard.writeText(url);
    }
    return (
        <>
            <div class={style.outputContainer}>
                <input class={`${style.textTag} ${style.output}`} readonly value={url} />
                <button onClick={copyLink} class={style.outputButton}>Copy to clipboard</button>
            </div>
        </>
    );
}

const EmbedCreator = () => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const [color, setColor] = useState();
    const [prevHeaders, setPrevHeaders] = useState({});

    const [linkname, setLinkname] = useState();
    const [outputURL, setOutput] = useState("...");

    const submit = () => {
        const headers = {title, description, image, color};
        // if (no previous headers) or (at least one is unique), pass check/make request
        if (typeof prevHeaders === 'undefined' || Object.entries(headers).some(([name, value] = ["", ""]) => prevHeaders[name] !== value)) fetch("https://api.xtraea.com/v1/embed", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(headers)
        }).then(response => response.json()).then(result => {
            setPrevHeaders(headers);
            setOutput(result.response);
        }).catch(() => {
            setOutput("..."); // default value
        });
        return;
    }
    return (
        <>
            <br />
            <p><Link href="/disclaimer">Disclaimer</Link></p>
            <p class={style.textDescription}>A tool to create custom link embeds on external sites that display link previews.<br /><br />
                Link name: on sites supporting <a href="https://en.wikipedia.org/wiki/Markdown">Markdown</a>, the link can be 'hidden' under custom text, as the word Markdown is here.<br />
                Title: The text at the top of an embed; can be clicked.<br />
                Description: Typically the text displayed under the title.<br />
                Image: Link to an image to embed into the external site. In some cases the link may need cleaning, such as if there is a '?' or a '#'. To clean the link, simply remove the '?'/'#' and anything that follows it.<br />
                Color: If the external site supports an accent color, this will set it. Enter as a hex code, without a '#' before it.<br />
                Note that all fields are limited to 500 characters.
            </p>
            <InputForm type="Link name" update={e => setLinkname(e.target.value)} />
            <InputForm type="Title" update={e => setTitle(e.target.value)} />
            <InputForm type="Description" update={e => setDescription(e.target.value)} />
            <InputForm type="Image" update={e => setImage(e.target.value)} />
            <InputForm type="Color" update={e => setColor(e.target.value)} />
            <br />
            <button class={style.submitButton} onClick={submit}>Generate embed link</button>
            <button class={style.submitButton} onClick={() => {
                setLinkname("᲼"); // invisible character
                submit(true);
            }}>Generate invisible embed link</button>
            <br /><br /><br />
            <OutputDisplay URLID={outputURL} linkName={linkname} />
        </>
    )
}

export default EmbedCreator;