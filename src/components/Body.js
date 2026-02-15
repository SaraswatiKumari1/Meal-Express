import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const arr = useState([]);
    const listOfRestaurant = arr[0];
    const setFilteredResList = arr[1];
  //const [listOfRestaurant, setFilteredResList] = useState(resList);
  useEffect(() => {
    fetchData();
  }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //console.log("data: ", json);
        //console.log("Restaurants list->",json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        //Optional Chaining
        setFilteredResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log("json: ", json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log("listOfRestaurant: ", listOfRestaurant);
    };


    //Conditional Rendering
    // if(listOfRestaurant.length === 0) {
    //     return <Shimmer />;
    // }
    
  return listOfRestaurant.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
            const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.3);
            setFilteredResList(filteredList);
        }}>
            Top Rated Restaurants</button>
        </div>
      <div className="restaurant-container">
        {/*{console.log(listOfRestaurant)} */}
        {listOfRestaurant.map((restaurant) => {
            return <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant}
           />;    
        })}
        </div>  
    </div>
  );
};

export default Body;