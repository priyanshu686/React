import data from '../utils/LiveData.js';
import ResCard from './ResCard.js';
const Body = () =>{
    return (
        <div className="distanceBody">
        <div className="search-bar">Search</div>
        <div className="res-container">
            {
                data.map(restaurent => <ResCard key={restaurent.info.resId} resobj={restaurent} />)
            }
        </div>
        </div>
    );
}

export default Body;