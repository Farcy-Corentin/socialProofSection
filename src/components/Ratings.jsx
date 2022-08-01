import {ratingsData} from "../data/ratingsData.js";
import {Rating} from "./Rating.jsx";

export const Ratings = () => {
    return (
        <div className="ratings">
            {ratingsData && ratingsData.map(({id, stars, description}) => (
              <Rating key={id} stars={stars} description={description}/>
            ))}
        </div>
    )
}