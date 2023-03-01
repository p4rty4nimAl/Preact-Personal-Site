import { Component, h } from 'preact';
import { createRef } from 'preact'
import style from './style.css';

class Pinger extends Component {
    constructor(props) {
        super(props);
        this.address = createRef();
        this.output = createRef();
    };

    render() {
        return (
            <span class={style.pinger}>
                <p>Enter the server's address (and port, if applicable): </p><br />
                <input ref={this.address} type="text" /><br />
                <button onclick={() => this.gather()}>Click to ping the server for information!</button><br />
                <p>The results will be displayed below: </p>
                <DisplayOutput ref={this.output}/>
            </span>
        );
    };
    gather() {
        let address = this.address.current.value;
        let port;
        let playerCount;
        if (address.includes(":")) {
            port = address.split(":")[1];
            address = address.split(":")[0];
        } else port = 25565; // default Minecraft: JE port
        const request = new XMLHttpRequest;
        request.open("GET", `https://mcapi.us/server/status?ip=${address}&port=${port}`);
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                const responseJSON = JSON.parse(request.responseText);
                if (responseJSON.players.max === 0) {
                    playerCount = "Invalid IP/Server offline!";
                } else {
                    playerCount = `${responseJSON.players.now}/${responseJSON.players.max} players online!`;
                }
                let playerList = [];
                for (let i = 0; i < responseJSON.players.sample.length; i++) {
                    playerList.push(responseJSON.players.sample[i].name);
                }
                this.output.current.setState({output: playerCount, playerList: playerList});
            }
        }
        request.send();
    };
}

//TODO: maybe make into player cards? have skin head shown? + fits with theme of site
//TODO: move into components; does it really belong here? - cant exactly be reused
class DisplayOutput extends Component {
    render(props, state) {
        let linkArray = [];
        for (let i = 0; i < state.playerList?.length; i++) {
            if (state.playerList[i].includes("§")) continue;
            linkArray.push(
                <>
                    <a href={`https://namemc.com/profile/${state.playerList[i]}`}>{state.playerList[i]}</a>
                    <br />
                </>
            );
        }
        return (
            <>
                <p>{state.output}</p>
                <p>{linkArray}</p>
            </>
        )
    }
}
export default Pinger;