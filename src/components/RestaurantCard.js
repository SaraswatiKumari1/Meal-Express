import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla} = resData?.info;
  //console.log("name: ", name);
  //console.log("cuisines: ", cuisines);
  //console.log("rating: ", avgRating);
  //console.log("costText: ", costForTwo);
  //console.log("image: ", cloudinaryImageId);
  //console.log("resData: ", resData?.distance);
  return (
    <div className="restaurant-card">
      <img className="restaurant-card-image" src={CDN_URL+cloudinaryImageId} alt="restaurant-card-image" />
      <div className="restaurant-info">
        <h3>{name}</h3>    
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;