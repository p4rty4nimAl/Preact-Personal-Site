import './style';
import { Component } from 'preact';
import { Router } from 'preact-router';

import Header from './components/header';

// Code-splitting is automated for `routes` directory
import Home from './routes/home';
import Projects from './routes/projects';
    import Ciphers from './routes/projects/ciphers';
    import Poems from './routes/projects/poems';
import Portfolio from "./routes/portfolio";
import Docs from "./routes/docs";
import Error from './routes/error';

class App extends Component {
    render() {
        return (
            <div id="app">
                <Header />
                <Router>
                    <Home path="/" />
                    <Projects path="/projects/" />
                        <Ciphers.Weezd path='/projects/0090C4/' />
                        <Ciphers.Bipher path='/projects/bipher/' />                    
                        <Ciphers.CaesarVariation path='/projects/caesarVariation/' />
                        <Ciphers.CRC path='/projects/continuousRegisterCipher/' />
                        <Ciphers.KCRC path='/projects/keyedCRC/' />
                        <Ciphers.HKCRCR path='/projects/hCRCRework/' />
                        <Ciphers.Weezd2 path='/projects/K0090C4/' />
                        <Ciphers.Keysmash path='/projects/keysmashCipher/' />
                        <Poems.Index path='/projects/poetry/' />
                            <Poems.Igno path='/projects/poetry/Ignorance/' />
                            <Poems.Smep path='/projects/poetry/someoneElsesPanopticon/' />
                            <Poems.Yanwe path='/projects/poetry/nothingWithoutMe/' />
                            <Poems.Mnop path='/projects/poetry/moonlitOverpass/' />
                    <Portfolio path="/portfolio/" />
                    <Docs path="/docs/" />

                    <Error default />
                </Router>
            </div>
        )
    }
    
};

export default App;
