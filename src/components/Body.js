import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const arr = useState([]);
  const listOfRestaurant = arr[0];
  const setlistOfRestaurant = arr[1];
  //const [listOfRestaurant, setFilteredResList] = useState(resList);
  const [filteredResList, setFilteredResList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    //console.log("data: ", json);
    //console.log("Restaurants list->",json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    //Optional Chaining
    setlistOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    //console.log("json: ", json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //console.log("listOfRestaurant: ", listOfRestaurant);
  };

  //Conditional Rendering
  // if(listOfRestaurant.length === 0) {
  //     return <Shimmer />;
  // }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for restaurant, cuisine or a dish..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="search-btn" onClick={() => {
            //Filter the restaurant cards and update the UI
            //Data from input box is needed
            const filteredList = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            setFilteredResList(filteredList);
            console.log("searchText: ", searchText);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3,
            );
            setlistOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {/*{console.log(listOfRestaurant)} */}
        {filteredResList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
