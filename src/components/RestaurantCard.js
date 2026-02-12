const RestaurantCard = (props) => {
  const {resData} = props;
  const { name, cuisine, rating, image, costText} = resData?.info;
  console.log("name: ", name);
  console.log("cuisine: ", cuisine);
  console.log("rating: ", rating?.aggregate_rating);
  console.log("costText: ", costText?.text);
  console.log("image: ", image);
  console.log("resData: ", resData?.distance);
  return (
    <div className="restaurant-card">
      <img className="restaurant-card-image" src={image?.url} alt="restaurant-card-image" />
      <div className="restaurant-info">
        <h3>{name}</h3>    
        <h4>{cuisine.map((c) => c.name).join(", ")}</h4>
        <h4>{rating?.aggregate_rating}</h4>
        <h4>{costText?.text}</h4>
        <h4>{resData?.distance}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;