import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CND_IMG_URL, RESTAURANT_MENU_URL } from "../constant";
import MenuShimmer from "./MenuShimmer";

const ItemsCard = ({ name, price, description, cloudinaryImageId }) => {
  return (
    <div className="menu_item_container">
      <div className="menu_items_card">
        <div style={{ width: "400px"  }}>
          <h4>{name}</h4>
          <h5>₹276.19 </h5>
          <p>{description}</p>
        </div>
        <div style={{ position: "relative"}}>
          <img src={CND_IMG_URL + cloudinaryImageId} alt="food image"/>
          <div style={{ position: "absolute", left: "50px", bottom: "10px" }}>
            <button >-</button>
            <span>0</span>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RestaurantMenu = () => {
  const param = useParams();
  const { resId } = param;
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    //API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    // console.log(RESTAURANT_MENU_URL + restaurantId)
    const data = await fetch(RESTAURANT_MENU_URL + resId);
    const json = await data.json();
    setRestaurant(json.data);
    //console.log(json);
  }
  //
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
        {/* {console.log(restaurant)} */}
        <ul>
          {Object.values(restaurant.menu.items).map((item) => {
            return <ItemsCard key={item.name} {...item} />;
            {
              /* return <li key={item.name}>{item.name}</li>; */
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
