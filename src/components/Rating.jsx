import {AiFillStar} from "react-icons/all.js";

export const Rating = ({stars, description}) => {

    let star = []
    for(let i = 0; i < stars; i++) {
        star.push(<AiFillStar className="rating__icon" key={`star-${i}`}/>)
    }

    return (
        <div className="rating">
            <div>{star}</div>
            <p className="rating__description">{description}</p>
        </div>
    )
}