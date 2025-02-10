


const ResCard = (props) =>{
    const {resobj} = props;
    const {image,name,cuisine,costText,locality} = resobj?.info;
    const{ratingV2} = resobj?.info?.ratingNew?.ratings?.DELIVERY;
    const {distance} = resobj;
    let rating;
    if(ratingV2 === '-'){
        rating = "NEW";
    }
    else{
        rating = ratingV2 + "Stars";
    }
    return (
        <div className="res-card">
            <img className="res-img" alt="Restaurant-Image"  src={image.url}/>
            <div className="res-name">
                <h3>{name}</h3>
                <p className="star-rate"> {rating}</p>
            </div>
            <div className="cuisine">
                {/* <p>{resobj.info.cuisine.map(cuisineItem => cuisineItem.name).join(', ')}</p> */}
                <p>{cuisine[0].name},{cuisine[1].name}</p>
                <p>{costText.text}</p>
            </div>
            <div className="address">
                <p>{locality.name}</p>
                <p>{distance}</p>
            </div>
        </div>
    )
}

export default ResCard;