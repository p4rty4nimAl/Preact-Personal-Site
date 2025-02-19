import { docs } from './docs.js';
import ItemBrowser from '../../components/itembrowser/index.js';

import text from '../projects/text.js'

const DocWrapper = () => {
    return <ItemBrowser 
        titles={text.map((element, id) => ({title: element.name, id, desc: docs[element.name]}))}
        items={docs}
    />
}

export default DocWrapper;
