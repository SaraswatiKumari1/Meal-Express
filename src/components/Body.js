import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search for your favorite meals here...</div>
      <div className="restaurant-container">
        {console.log(resList)}
        {resList.map((restaurant) => {
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