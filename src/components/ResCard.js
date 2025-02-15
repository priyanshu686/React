import { imglink } from "../utils/constants";


const ResCard = (props) =>{
    const {resobj} = props;
    const {cloudinaryImageId,name,cuisines,costForTwo,locality,avgRating} = resobj?.info || {};
    const {lastMileTravel} = resobj?.info?.sla || {};
    console.log(resobj);
    // let rating;
    // if(ratingV2 === '-'){
    //     rating = "NEW";
    // }
    // else{
    //     rating = ratingV2 + "Stars";
    // }
    return (
        <div className="res-card">
            <img className="res-img" alt="Restaurant-Image" src={`${imglink}${cloudinaryImageId}`} />

            <div className="res-name">
                <h3>{name}</h3>
                <p className="star-rate">{avgRating} Stars</p>
            </div>
            <div className="cuisine">
                {/* <p>{cuisines.map(cuisineItem => cuisineItem.name).join(', ')}</p> */}
                <p>{cuisines[0]+","+cuisines[1]}</p>
                <p>{costForTwo}</p>
            </div>
            <div className="address">
                <p>{locality}</p>
                <p>{lastMileTravel} km</p>
            </div>
        </div>
    )
}

export default ResCard;