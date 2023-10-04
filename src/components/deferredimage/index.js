import { useState } from "preact/hooks";
import style from './style';

const DeferredImage = ({color, width, height, link}) => {
    const [clicked, loadImage] = useState(false);
    return (
        <span 
            class={style.container} 
            style={`width: ${width}px; height: ${height}px;`} 
            children={clicked ? (
                <img 
                    width={width} 
                    height={height} 
                    src={`${link}`} 
                />
            ) : (
                <button 
                    style={`background-color: #${color};`}
                    class={style.imgbutton} 
                    onclick={() => loadImage(true)}
                >Click to load image.</button>
            )} 
        />
    )

}

export default DeferredImage;