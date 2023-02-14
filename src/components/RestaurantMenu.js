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
    <div className="">
      <div className="flex border p-4 bg-slate-900">
        <div >
          <img
            src={CND_IMG_URL + restaurant?.cloudinaryImageId}
            alt="Food Image"
            style={{ width: "300px" }}
          />
        </div>
        <div className="p-1   text-white mx-8 w-full">
          <h1 className=" text-2xl">{restaurant?.name}</h1>
          <h4>{restaurant?.cuisines.join(", ")}</h4>
          <h4>
            {restaurant?.area} , {restaurant?.city}
          </h4>
          <div className="flex justify-center bg-slate-600 mt-3" >
            <h4 className="mx-2">{restaurant?.avgRating} stars </h4>
            <h4 className="mx-2"> {restaurant?.sla?.deliveryTime} min </h4>
            <h4 className="mx-2">{restaurant?.costForTwoMsg} </h4>
          </div>
        </div>
      </div>

      <div className="menu_div">
        <h1 className="text-center text-3xl my-4">Menu</h1>
        <ul data-testid='menu'>
          {Object.values(restaurant.menu.items).map((item) => {
            
            return <ItemsCard key={item.id} item= {item}  />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
