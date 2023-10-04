import { Router } from 'preact-router';
import './style';

import Header from './components/header';

// Code-splitting is automated for `routes` directory
import Home from './routes/home';
import Projects from './routes/projects';
    import Pinger from 'async!./routes/projects/pinger';
    import Ciphers from './routes/projects/ciphers'; // cant async an object!!
    import PoemWrapper from 'async!./routes/projects/poems';
    import BackgroundCreator from 'async!./routes/projects/backgroundcreator';
    import BGRefactor from 'async!./routes/projects/bgrefactor';
    import EmbedCreator from 'async!./routes/projects/embedCreator';
    import EmbedBrowser from 'async!./routes/projects/embedBrowser';
    import Disclaimer from 'async!./routes/disclaimer';
    import BackgroundCreator2 from 'async!./routes/projects/bgref2';
import Portfolio from "./routes/portfolio";
import Docs from "./routes/docs";
import Error from './routes/error';
import { useState } from 'preact/hooks';

const Routes = <Router>
    <Home path="/" />
    <Projects path="/projects/" />
        <Pinger path="/projects/mcserverping" />
        <Ciphers.Weezd path='/projects/0090C4/' />
        <Ciphers.Bipher path='/projects/bipher/' />                    
        <Ciphers.CaesarVariation path='/projects/caesarVariation/' />
        <Ciphers.CRC path='/projects/continuousRegisterCipher/' />
        <Ciphers.HashKeyCipher path='/projects/hashKeyCipher/' />
        <Ciphers.KCRC path='/projects/keyedCRC/' />
        <Ciphers.HKCRCR path='/projects/hCRCRework/' />
        <Ciphers.Weezd2 path='/projects/K0090C4/' />
        <Ciphers.Keysmash path='/projects/keysmashCipher/' />
        <PoemWrapper path='/projects/poetry/' />
        <BackgroundCreator path='/projects/backgroundcreator/' />
        <BGRefactor path='/projects/testing' />
        <BackgroundCreator2 path="/projects/testing2" />
        <EmbedCreator path='/projects/embedCreator' />
        <EmbedBrowser path='/projects/embedBrowser' />
    <Portfolio path="/portfolio/" />
    <Docs path="/docs/" />
    <Disclaimer path="/disclaimer/" />

    <Error default />
</Router>

const App = () => {
    return (
        <div id="app">
            <Header />
            Routes
        </div>
    )
}

export default App;
