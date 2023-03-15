import { Component, h, createRef } from 'preact';
import style from './style.css';

class BackgroundCreator extends Component {
    constructor(props) {
        super(props);
        this.renderCanvas = this.renderCanvas.bind(this);
        this.background = createRef();
        this.canvas = createRef();
        // default state
        this.state = {
            width: screen.width,
            height: screen.height
        }
    }
    render(props, state) {
        return (
            <>
                <p class={style.description}>(BETA: It is guaranteed that issues are present.) This tool can create backgrounds (wallpapers) easily by adding layers, customising them until you are happy with how it looks, then finally right clicking and selecting "Save As".</p>
                <Controls renderCanvas={this.renderCanvas} canvasRef={this.canvas} passthroughRef={this.background} />
                Set output size: <br />
                x: <input onChange={this.sizeChanger("width")} type="number" /><br />
                y: <input onChange={this.sizeChanger("height")} type="number" />
                <span class={style.divider} style={`width: ${state.width}px`} />
                <canvas ref={this.canvas} />
            </>
        );
    }
    sizeChanger = (key) => {
        return (event) => {
            this.setState({[key]: +event.target.value});
        }
    }
    renderCanvas(controlsState) {
        //TODO: turn controlsState into renderable data; render
        const canvas = this.canvas.current?.getContext("2d");
        if (!canvas) return;
        canvas.canvas.width = this.state.width;
        canvas.canvas.height = this.state.height;
        canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
        for (const i in controlsState) {
            this.renderHelper.layers[i] = this.drawLayer(controlsState[i])
        }
        for (const layer in this.renderHelper.layers) {
            canvas.drawImage(this.renderHelper.layers[layer], 0, 0)
        }
        canvas.globalCompositeOperation = "destination-over";
        canvas.fillStyle = this.background.current?.value;
        canvas.beginPath();
        canvas.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);
        canvas.fill();
    }
    
    renderHelper = {
        layers: {},
        drawCircle: (ctx, x, y, radius) => {
            ctx.arc(x, y, radius, 0, Math.PI * 2);
        },
        randX: (radius) => {
            return Math.floor(Math.random() * (this.state.width + radius + 1)) - radius;
        },
        randY: (radius) => {
            return Math.floor(Math.random() * (this.state.height + radius + 1)) - radius;
        },
        getRadius: (mode, value, offset) => {
            switch (mode) {
                case '0': {
                    return value;
                }
                case '1': {
                    let smaller = Math.min(value, offset);
                    let bigger = Math.max(value, offset);
                    return smaller + Math.floor(Math.random() * (bigger - smaller))
                }
                case '2': {
                    const randOffset = Math.floor(Math.random() * (offset + 1));
                    if (Math.random() > 0.5) {
                        return value + randOffset;
                    } 
                    return value - randOffset;
                }
            }
        }
    }
    drawLayer(values) {
        const rh = this.renderHelper;
        const drawnLayer = document.createElement("canvas");
        drawnLayer.width = this.state.width;
        drawnLayer.height = this.state.height;
        const ctx = drawnLayer.getContext("2d");
        const circleLayers = [];
        const genNewLayer = () => {
            const newCanvas = document.createElement('canvas');
            newCanvas.height = this.state.height;
            newCanvas.width = this.state.width;
            return newCanvas;
        }
        function drawRandomCircles() {
            const circles = [];
            const limit = 100;
            for (let count = 0; count < values.amount; count++) {
                let radius, x, y;
                let attempts = 0;
                do {
                    radius = rh.getRadius(values.size.mode, values.size.value, values.size.offset);
                    x = rh.randX(radius);
                    y = rh.randY(radius);
                    attempts++;
                    if (attempts > limit) break;
                } while (circles.some(c => {
                    return Math.sqrt((c.x - x) ** 2 + (c.y - y) ** 2) < c.radius + radius;
                }));
                if (attempts <= limit) {
                    circleLayers[count] = genNewLayer();
                        let circleCtx = circleLayers[count].getContext("2d");
                        // draw base
                        circleCtx.beginPath();
                        rh.drawCircle(circleCtx, x, y, radius);
                        circleCtx.fill();
                    if (!values.innerTransparent) {
                        // draw gradient
                        let fuckey = 3/4;
                        circleCtx.globalCompositeOperation = "source-in"
                        let gradient = circleCtx.createRadialGradient(x, y, radius * fuckey, x, y, radius * fuckey * 2)
                        gradient.addColorStop(0, values.baseColor);
                        gradient.addColorStop(1, values.shadow);

                        circleCtx.fillStyle = gradient;
                        circleCtx.fillRect(0, 0, circleCtx.canvas.width, circleCtx.canvas.height);
                    }
                    circles.push({x, y, radius});
                }
            }
            for (const i in circleLayers) {
                const circle = circleLayers[i]
                ctx.drawImage(circle, 0, 0)
            }
        }
    
        ctx.fillStyle = values.baseColor;
        if (values.innerTransparent) {
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.globalCompositeOperation = 'destination-out';
        }
        drawRandomCircles();

        return drawnLayer;
    }
}

class Controls extends Component {
    constructor(props) {
        super(props);
        // default state
        this.state = {
            nextID: 0,
            controlsList: [],
            controlStates: {}
        }
        this.addNewControl(false)
    }
    render({canvasRef, passthroughRef}, {controlsList}) {
        return (
            <span class={style.controlsContainer}>
                Background colour: <input ref={passthroughRef} type="color" />
                {controlsList}
                <button onClick={() => this.addNewControl(true)}>Add new layer (on top)</button>
            </span>
        )
    }
    sendState(state, ID) {
        this.setState(prevState => {
            prevState.controlStates[ID] = state;
            return prevState;
        }, () => {
            this.props.renderCanvas(this.state.controlStates);
        })
        
    }
    removeControl(controlID) {
        const updatedList = this.state.controlsList.filter(element => element.props.id !== controlID);
        let newStates = this.state.controlStates;
        delete newStates[controlID];
        this.setState({controlsList: updatedList, controlStates: newStates}, () => {
            this.props.renderCanvas(this.state.controlStates);
        });
    }
    addNewControl(deletable) {
        const item = <LayerControl key={this.state.nextID} id={this.state.nextID} parent={this} noDelete={!deletable} />;
        this.setState(prevState => ({
            nextID: prevState.nextID + 1,
            controlsList: [...prevState.controlsList, item]
        }));   
    }
}

class LayerControl extends Component {
    constructor(props) {
        super(props);
        // default state
        this.state = {
            baseColor: "#000000",
            shadow: "#000000",
            innerTransparent: false,
            amount: 5,
            size: {
                mode: "0", // absolute, range, cluster
                value: 100,
                offset: 0 // acts as 2nd value in range, cluster
            }
        }
    }
    removeSelf() {
        this.props.parent.removeControl(this.props.id);
    }
    valueUpdate = {
        innerTransparent: (event) => this.setState({innerTransparent: event.target.checked}), // cannot be .value as weird checkbox impl details
    }
    changeValue = (key) => {
        return (event) => {
            this.setState({[key]: event.target.value});
        }
    }
    changeSize = (key) => {
        return (event) => {
            const newSize = {...this.state.size, [key]: event.target.value};
            this.setState({size: newSize});
        }
    }
    render({parent, id, noDelete}, state) {
        parent.sendState(state, id);
        let xButton;
        if (!noDelete) {
            xButton = <button onClick={() => {this.removeSelf()}}>Delete</button>;
        }
        return (
            <span class={style.layerControl}>
                <input onChange={this.changeValue("baseColor")} type="color" />
                <input onChange={this.changeValue("shadow")} type="color" />
                <input onChange={this.valueUpdate.innerTransparent} disabled type="checkbox" />
                <input onChange={this.changeValue("amount")} type="range" min="1" max="10" value={state.amount} step="1" />
                <select onChange={this.changeSize("mode")} >
                    <option value="0" selected>Absolute</option>
                    <option value="1">Range</option>
                    <option value="2">Cluster</option>
                </select>
                <input onChange={this.changeSize("value")} type="number" />
                <input onChange={this.changeSize("offset")} type="number" disabled={state.size.mode == 0} />
                {xButton}
            </span>
        )   
    }
}

export default BackgroundCreator;