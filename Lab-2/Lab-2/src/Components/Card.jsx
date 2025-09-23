export default function Card(props){
    return (
    <div className="Card-Component">
        <img src={props.image} alt="" width="100px" />
        <h2>{props.location}</h2>
        <h4>{props.name}</h4>
        {props.rating >= 4.0 ? <p className="ratingGreen">{props.rating} ★</p> : <p className="ratingRed">{props.rating} ★</p>}
        <p className="rate">{props.rate}</p>

    </div>
    );
}