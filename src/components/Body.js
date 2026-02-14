import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";

const Body = () => {

    const arr = useState(resList);
    const listOfRestaurant = arr[0];
    const setFilteredResList = arr[1];
  //const [listOfRestaurant, setFilteredResList] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
            const filteredList = listOfRestaurant.filter((res) => res.info.rating?.aggregate_rating > 4);
            setFilteredResList(filteredList);
        }}>
            Top Rated Restaurants</button>
        </div>
      <div className="restaurant-container">
        {/*{console.log(listOfRestaurant)} */}
        {listOfRestaurant.map((restaurant) => {
            return <RestaurantCard
              key={restaurant.info.resId}
              resData={restaurant}
           />;    
        })}
        </div>  
    </div>
  );
};

export default Body;