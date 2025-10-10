import { useState } from "react";


export default function ColorBox({colors}){

    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

    const [colorBox, setColor] = useState(getRandomColor);
    

    return(
    <div className="ColorBox" style={{backgroundColor: colorBox}}>
        <button className="ColorBoxButton" onClick={() => {
            setColor(getRandomColor())
        }}
        >
        </button>
        
    </div>
    );
}