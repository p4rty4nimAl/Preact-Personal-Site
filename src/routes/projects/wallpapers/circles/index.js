import { useEffect, useRef, useState } from 'preact/hooks';
import style from './style.css';
import { Fragment } from 'preact';

const CirclesCreator = () => {
    const [width, setWidth] = useState(screen?.width ?? 1920);
    const [height, setHeight] = useState(screen?.height ?? 1080);
    const [color, setColor] = useState("#000000");
    const outputCanvas = useRef();

    const canvasRenderer = {
        validStates: [],
        renderedCanvases: [],
        add: (validState) => {
            canvasRenderer.validStates.push(validState);
        },
        clear: () => canvasRenderer.validStates = [],
        composeCanvases: () => {
            const canvas = outputCanvas.current;
            if (!canvas) return;
            canvas.height = height;
            canvas.width = width;
            const drawable = canvas?.getContext("2d");
            drawable.clearRect(0, 0, width, height);
            drawable.fillStyle = color;
            drawable.beginPath();
            drawable.fillRect(0, 0, width, height);
            drawable.fill();
            canvasRenderer.renderedCanvases = [];
            canvasRenderer.validStates.forEach(value => canvasRenderer.renderIndividualLayer(value));
            canvasRenderer.renderedCanvases.forEach(value => drawable.drawImage(value, 0, 0));
        },
        renderIndividualLayer: ({baseColor, shadow, innerTransparent, amount, size}) => {
            const canvas = document.createElement("canvas");
            canvas.height = height;
            canvas.width = width;
            const ctx = canvas.getContext("2d");
            //BIG RENDER FUNCTION
            const rh = {
                layers: {},
                drawCircle: (x, y, radius, ctx) => ctx.arc(x, y, radius, 0, Math.PI * 2),
                rand: (radius, max) => Math.floor(Math.random() * (+max + +radius + 1)) - +radius,
                getRadius: ({mode, value, offset}) => {
                    switch (mode) {
                        case '0': {
                            return +value;
                        }
                        case '1': {
                            const smaller = Math.min(value, offset);
                            const bigger = Math.max(value, offset);
                            return smaller + Math.floor(Math.random() * (bigger - smaller));
                        }
                        case '2': {
                            const randOffset = Math.floor(Math.random() * (+offset + 1));
                            if (Math.random() > 0.5) {
                                return +(value) + randOffset;
                            } 
                            return +(value) - randOffset;
                        }
                    }
                }
            };
            const genNewLayer = () => {
                const newCanvas = document.createElement('canvas');
                newCanvas.height = height;
                newCanvas.width = width;
                return newCanvas;
            }
            const createGradient = (gradient, colorStart, colorEnd) => {
                gradient.addColorStop(0, colorStart);
                gradient.addColorStop(0.999, colorEnd);
                gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
            }
            //TODO: draw them properly (pretty much just fix the gradient)
            const drawRandomCircles = () => {
                const scalar = 3/2;
                const circles = [];
                const limit = 100;
                for (let count = 0; count < amount; count++) {
                    let radius, x, y;
                    let attempts = 0;
                    do {
                        radius = rh.getRadius(size);
                        x = rh.rand(radius, width);
                        y = rh.rand(radius, height);
                        attempts++;
                        if (attempts > limit) break;
                    } while (circles.some(c => Math.sqrt((c.x - x) ** 2 + (c.y - y) ** 2) < (c.radius + radius) * scalar));
                    if (attempts <= limit) {
                        // add valid circle right away
                        circles.push({x, y, radius});
                        // define layers, contexts
                        const circleLayer = genNewLayer();
                        const gradientLayer = genNewLayer();
                        const circleCtx = circleLayer.getContext("2d");
                        const gradientCtx = gradientLayer.getContext("2d");
                        const gradient = gradientCtx.createRadialGradient(x, y, radius * scalar / 2, x, y, radius * scalar);
                        // create circle canvas
                        circleCtx.fillStyle = baseColor;
                        circleCtx.beginPath();
                        rh.drawCircle(x, y, radius, circleCtx);
                        circleCtx.fill();
                        // create gradient canvas
                        createGradient(gradient, innerTransparent ? shadow : baseColor, innerTransparent ? baseColor : shadow);
                        gradientCtx.fillStyle = gradient;
                        gradientCtx.fillRect(0, 0, width, height);

                        if (innerTransparent) {
                            const operation = ctx.globalCompositeOperation;
                            // cut out circle
                            ctx.globalCompositeOperation = "xor";
                            ctx.drawImage(circleLayer, 0, 0);
                            // add gradient over what remains
                            ctx.globalCompositeOperation = "source-atop";
                            ctx.drawImage(gradientLayer, 0, 0);
                            ctx.globalCompositeOperation = operation;
                        } else {
                            ctx.drawImage(circleLayer, 0, 0);
                            ctx.drawImage(gradientLayer, 0, 0);
                        }
                    }
                }
            }
            ctx.fillStyle = baseColor;
            if (innerTransparent) {
                ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.globalCompositeOperation = 'destination-out';
            }
            drawRandomCircles();
            canvasRenderer.renderedCanvases.push(canvas);
        }
    }

    return (
        <>
            <p class={style.description}>(BETA: It is guaranteed that there is work to be done.) This tool can create backgrounds (wallpapers) easily by adding layers, customising them until you are happy with how it looks, then finally right clicking and selecting "Save As".</p>
            <Controls canvasRenderer={canvasRenderer} />
            Set output size: <br />
            {/*TODO: reorder / restructure / restyle */}
            Background colour: <input value={color} onChange={e => setColor(e.target.value)} type="color" /><br />
            x: <input value={width} onChange={e => setWidth(+e.target.value)} type="number" /><br />
            y: <input value={height} onChange={e => setHeight(+e.target.value)} type="number" /><br />
            <button onClick={canvasRenderer.composeCanvases} type="button">Render</button>
            <span class={style.divider} style={`width: ${width}px`} />

            <canvas ref={outputCanvas} />
        </>
    )
}
const Controls = (props) => {
    const {canvasRenderer} = props
    const [controlsList, setControlsList] = useState([]);
    const createNewLayerState = () => {
        const newList = [...controlsList, {
            baseColor: "#000000",
            shadow: "#000000",
            innerTransparent: false,
            amount: "5",
            size: {
                mode: "0",
                value: "100",
                offset: "0"
            }
        }];
        setControlsList(newList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(createNewLayerState, []);
    canvasRenderer.clear();
    return (
        <span class={style.controlsContainer}>
            {controlsList.map((value, index) => {
                canvasRenderer.add(value);
                return (
                    <Fragment key={index}>
                        <LayerControl currentConfig={value} updateConfig={(newConfig) => {
                            setControlsList(controlsList.map((value, i) => index !== i ? value : newConfig));
                        }} />
                        {index !== 0 ? <button onClick={() => {
                            setControlsList(controlsList.filter((value, i) => i !== index));
                        }}>X</button> : null}
                    </Fragment>
                );
            })}
            <button onClick={createNewLayerState}>Add new layer (placed on top)</button>
        </span>
    )
}
const LayerControl = ({currentConfig, updateConfig}) => {
    const {baseColor, shadow, innerTransparent, amount, size} = currentConfig;
    const changeValue = (key) => (event) => updateConfig(Object.assign(currentConfig, {[key]: event.target.value}));
    const changeTransparency = (event) => updateConfig(Object.assign(currentConfig, {innerTransparent: event.target.checked}));
    const changeSize = (key) => (event) => {
        const newSizeObj = Object.assign(currentConfig.size, {[key]: event.target.value});
        updateConfig(Object.assign(currentConfig, {size: newSizeObj}));
    }
    return (
        <span class={style.layerControl}>
            <input value={baseColor} onChange={changeValue("baseColor")} type="color" />
            <input value={shadow} onChange={changeValue("shadow")} type="color" />
            <input value={innerTransparent} onChange={changeTransparency} type="checkbox" />
            <input value={amount} onChange={changeValue("amount")} type="range" min="1" max="10" step="1" />
            <select value={size.mode} onChange={changeSize("mode")} >
                <option value="0">Absolute</option>
                <option value="1">Range</option>
                <option value="2">Cluster</option>
            </select>
            <input value={size.value} onChange={changeSize("value")} type="number" />
            <input value={size.offset} onChange={changeSize("offset")} type="number" disabled={size.mode === "0"} />
        </span>
    )
}

export default CirclesCreator;