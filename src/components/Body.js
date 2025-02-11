import data from '../utils/LiveData.js';
import ResCard from './ResCard.js';
import { useState } from 'react';


const Body = () =>{
    const [list,setlist] = useState(data);
    return (
        <div className="distanceBody">
         <button onClick={()=>{
            const filterdata = list.filter((res) => res.info.ratingNew.ratings.DELIVERY.ratingV2 > 4.3);
            setlist(filterdata)}}> Top Rated Restaurant</button>

        <button onClick={()=>{
            const filterdata = list.filter((res) => res.info.ratingNew.ratings.DELIVERY.ratingV2 === '-');
            setlist(filterdata)}}> New Restaurant</button>
        <div className="res-container">
            {
                list.map(restaurent => <ResCard key={restaurent.info.resId} resobj={restaurent} />)
            }
        </div>
        </div>
    );
}

export default Body;