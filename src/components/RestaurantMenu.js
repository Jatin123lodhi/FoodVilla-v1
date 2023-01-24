import { useParams } from "react-router-dom";
import { CND_IMG_URL } from "../constant";
import MenuShimmer from "./MenuShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemsCard from "./ItemsCard";

const RestaurantMenu = () => {
  const param = useParams();
  const { resId } = param;
  const  restaurant  = useRestaurantMenu(resId);
  
  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant_menu">
      <div className="menu_card">
        <div style={{ marginLeft: "5%" }}>
          <img
            src={CND_IMG_URL + restaurant?.cloudinaryImageId}
            alt="Food Image"
            style={{ width: "300px" }}
          />
        </div>
        <div className="menu_title_div">
          <h1 style={{ color: "white" }}>{restaurant?.name}</h1>
          <h4>{restaurant?.cuisines.join(", ")}</h4>
          <h4>
            {restaurant?.area} , {restaurant?.city}
          </h4>
          <div style={{ display: "flex" }}>
            <h4 style={{ marginLeft: "0px" }}>{restaurant?.avgRating} stars</h4>
            <h4
              style={{
                borderLeft: "2px solid grey",
                borderRight: "2px solid grey",
                padding: " 0px 8px",
              }}
            >
              {restaurant?.sla?.deliveryTime} min
            </h4>
            <h4>{restaurant?.costForTwoMsg} </h4>
          </div>
        </div>
      </div>

      <div className="menu_div">
        <h1 style={{ textAlign:"center" }}>Menu</h1>
        <ul>
          {Object.values(restaurant.menu.items).map((item) => {
            return <ItemsCard key={item.name} {...item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
