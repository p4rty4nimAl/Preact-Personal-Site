import {poems, contentMap} from './poems.js';
import ItemBrowser from "../../../components/itembrowser";

const PoemWrapper = () => {
    return <ItemBrowser 
        titles={poems}
        items={contentMap}
    />
}

export default PoemWrapper;