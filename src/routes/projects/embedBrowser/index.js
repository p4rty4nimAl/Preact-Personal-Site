import { Link } from "preact-router";
import { useState, useEffect } from "preact/hooks";
import DeferredImage from "../../../components/deferredimage";
import style from './style.css';

const fetchData = (page, items) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({}), 10000);
        fetch(`https://api.xtraea.com/v1/embed/list?page=${page}&items=${items}`).then(result => {
            resolve(result.json());
        }).catch(() => reject({}));
    });
}
// const fetchData = (page, items) => await (await fetch(`https://api.xtraea.com/v1/embed/list?page=${page}&items=${items}`)).json();

const getTimeUntilExpiry = time => new Date(new Date(time + 7 * 24 * 60 * 60 * 1000) - new Date());

const EmbedBrowser = () => {
    const [fetchedData, setData] = useState({});
    const [pageTotal, setPageTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemCount, setItemCount] = useState(9);
    const [loaded, setLoaded] = useState(0);

    // load things
    useEffect(() => {
        (async () => {
            const response = await fetchData(currentPage, itemCount);
            setPageTotal(response.pages);
            setData(response.embeds);
            setLoaded(Object.entries(response).length > 0 ? 1 : -1)
        })();
    }, [currentPage, itemCount]);

    const controls = <EmbedControls 
        pageTotal={pageTotal}
        currentPage={currentPage} setPage={setCurrentPage}
        itemCount={itemCount} setItemCount={setItemCount}
    />
    return (
        <>
            <p><Link href="/disclaimer">Disclaimer</Link></p>
            {controls}
            {loaded ? <EmbedPage displayData={fetchedData} loadState={loaded} /> : <div class={style.loader} />}
            {pageTotal > 1 ? controls : ""}
            <footer />
        </>
    )
}
const EmbedPage = (props) => {
    const {displayData, loadState} = props;
    if (!displayData) return loadState === 1 ? <p>No embeds!</p> : <p>Unable to access service!</p>
    const embeds = [];
    for (const [id, value] of Object.entries(displayData)) {
        if (getTimeUntilExpiry(value.time) > 0) embeds.push(
            <EmbedDisplay 
                key={id}
                ID={id}
                value={value}
            />
        )
    }
    /*const embeds = Object.entries(displayData).filter(([, value]) => getTimeUntilExpiry(value.time) > 0).map(
        ([id, value]) => 
        <EmbedDisplay 
            key={id}
            ID={id}
            value={value}
        />
    )*/ // other way to make embeds list? not sure about speed, though
    return (
        <span class={style["embed-page"]}>{embeds}</span>
    )
}
const EmbedControls = (props) => {
    const {pageTotal, currentPage, itemCount} = props;
    const {setPage, setItemCount} = props;
    return (
        <span class={style.embedInput}>
            Items: <input class={style.embedInput} rows="1" cols="2" type="number" value={itemCount} onChange={e => setItemCount(e.target.value)} />
            <button class={style.embedPrev} disabled={currentPage <= 1} onclick={() => setPage(page => page - 1)}>&lt;</button>
            Current Page: {currentPage}
            <button class={style.embedNext} disabled={pageTotal <= currentPage} onclick={() => setPage(page => page + 1)}>&gt;</button>
        </span>
    )
}
const EmbedDisplay = (props) => {
    const {ID, value: {time, title, description, image, color}} = props;
    const copyLink = (id) => {
        return () => {
            if (navigator?.clipboard) navigator.clipboard.writeText(`https://api.xtraea.com/v1/embed?s=${id}`);
        }
    }
    const validateImage = (link) => {
        if (!link) return false;
        const fileEndArray = ["jpg", "png", "jpeg", "webp"];
        const splitLink = link.split(".");
        for (const i of fileEndArray) {
            if (splitLink[splitLink.length - 1] === i) return true;
        }
        return false;
    }

    const getExpiryFormatted = (time) => {
        const times = ["d", "h", "m", "s"];
        const timeUntilExpiry = getTimeUntilExpiry(time);
    
        const days = Math.floor(timeUntilExpiry.getTime() / (24 * 60 * 60 * 1000));
        const remainingMilliseconds = timeUntilExpiry.getTime() % (24 * 60 * 60 * 1000);
        const hours = Math.floor(remainingMilliseconds / (60 * 60 * 1000));
        const minutes = timeUntilExpiry.getMinutes();
        const seconds = timeUntilExpiry.getSeconds();
    
        const timeValues = [days, hours, minutes, seconds];
    
        return timeValues.map((value, index) => value !== 0 ? ` ${value}${times[index]}` : '').filter(value => value !== '');
    }
    
    return (
        <span class={style.displayContainer} style={`--t: #${color};`}>
            <span class={style.imageAlign}>
                <textarea readOnly class={style.displayTitleText}>{title}</textarea>
                {validateImage(image) ? <DeferredImage width={100} height={100} link={image} /> : ""}
            </span>
            <textarea readOnly class={style.displayDescText}>{description}</textarea>
            <button class={style.displayButton} onclick={copyLink(ID)}><p>Copy embed link</p></button>
            <p class={style.displayID}>ID: {ID} - Expires in: {getExpiryFormatted(time)}</p>
        </span>
    )
}


export default EmbedBrowser;