import { useState } from 'preact/hooks';
import style from './style.css';


const Pinger = () => {
    const [rawAddress, setAddress] = useState();
    const [output, setOutput] = useState();
    const [playerList, setPlayerList] = useState();
    const request = new XMLHttpRequest;
    
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const responseJSON = JSON.parse(request.responseText);
            const playerCount = responseJSON.players.max === 0 ? "Invalid IP/Server offline!" : `${responseJSON.players.now}/${responseJSON.players.max} players online!`;
            const playerList = responseJSON.players.sample.map(player => player.name)
            setOutput(playerCount);
            setPlayerList(playerList);
        }
    }
    const gather = () => {
        // 25565 == Minecraft: JE default port
        const [address, port = 25565] = rawAddress.split(":");
        request.open("GET", `https://api.xtraea.com/v0/minecraft_server_status?ip=${address}&port=${port}`);
        request.send();
    }

    return (
        <span class={style.pinger}>
            <p>Enter the server's address (and port, if applicable): </p><br />
            <input onChange={event => setAddress(event.target.value)} type="text" /><br />
            <button onclick={gather}>Click to ping the server for information!</button><br />
            <p>The results will be displayed below: </p>
            <DisplayOutput output={output} playerList={playerList} />
        </span>
    )
}
//TODO: maybe make into player cards? have skin head shown? + fits with theme of site
//TODO: move into components; does it really belong here? - cant exactly be reused
const DisplayOutput = (props) => {
    const {output, playerList} = props;
    let linkArray = [];
        for (let i = 0; i < playerList?.length; i++) {
            // drop entries injected by server software to advertise
            if (playerList[i].includes("§")) continue;
            linkArray.push(
                <>
                    <a href={`https://namemc.com/profile/${playerList[i]}`}>{playerList[i]}</a>
                    <br />
                </>
            );
        }
    return (
        <>
            <p>{output}</p>
            <p>{linkArray}</p>
        </>
    )
}
export default Pinger;