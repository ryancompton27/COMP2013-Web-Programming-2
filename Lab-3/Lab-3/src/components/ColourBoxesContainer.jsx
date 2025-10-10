import ColorBox from "./ColourBox";
export default function ColorBoxContainer({colors}){

    return(
    <div className="ColorBoxContainer">
       
       {colors.map(() => (
        <div className="ColorBox">
          <ColorBox colors={colors}/>
        </div>
      ))}
    </div>
    );
}