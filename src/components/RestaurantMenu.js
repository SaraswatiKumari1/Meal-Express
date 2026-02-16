import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import menu from "../utils/restaurantMenuData";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log("resId: ", resId);

  useEffect(() => {
    //API call to get the menu of the restaurant using the resId
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    //Get the resId from the URL
    //const resId = window.location.pathname.split("/")[2];
    //API call to get the menu of the restaurant using the resId
    // const data = await fetch(
    //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4384489&lng=77.0407101&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
    // );
    // const json = await data.json();
    // console.log("Menu data: ", json);
    //const data = await fetch(
    // "https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=233329&catalog_qa=undefined&submitAction=ENTER";
    //);

    // const json = await data.json();
    // console.log(json);
    setResInfo(menu);
    console.log("Menu data: ", menu.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log("itemCards: ", itemCards);
  //const dish = carousel?.cards || [];
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
