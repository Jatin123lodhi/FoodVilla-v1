import React from "react";
import { restaurantList, CND_IMG_URL } from "../constant";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  costForTwoString,
  avgRating,
  sla,
}) => {
  //fdfd
  return (
    <div className="card">
      <img src={CND_IMG_URL + "/" + cloudinaryImageId} alt="restaurantImg" />
      <h3>{name}</h3>
      <h5 style={{ color: "gray" }}>{cuisines.join(", ")}</h5>
      <div style={{ display: "flex" }}>
        <h6 style={{ marginLeft: "0px" }}> {avgRating} stars</h6>
        <h6> {sla?.deliveryTime} min</h6>
        <h6> {costForTwoString}</h6>
      </div>
    </div>
  );
};

export default RestaurantCard;
