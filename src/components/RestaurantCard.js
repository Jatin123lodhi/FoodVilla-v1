import React from "react";
import { restaurantList, CND_IMG_URL } from "../constant";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  costForTwoString,
  avgRating,
  sla,
}) => {
  //fdfd
  const {user} = useContext(UserContext);
  return (
    <div className="border w-72 p-5 h-72 m-3">
      <img src={CND_IMG_URL + "/" + cloudinaryImageId} alt="restaurantImg" />
      <h3>{name}</h3>
      <h5 style={{ color: "gray" }}>{cuisines.join(", ")}</h5>
      <div className="flex justify-between">
        <h6> {avgRating} stars</h6>
        <h6> {sla?.deliveryTime} min</h6>
        <h6> {costForTwoString}</h6>
        {/* <h6>{user.name}-{user.email}</h6> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
