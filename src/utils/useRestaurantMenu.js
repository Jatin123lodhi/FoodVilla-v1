import { useEffect, useState } from "react";
import {RESTAURANT_MENU_URL} from "../constant.js";
const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(RESTAURANT_MENU_URL + resId);
    const json = await data.json();
    setRestaurant(json.data);
  }
  // returning the data of restaurant of given resId
  return restaurant;
};

export default useRestaurantMenu;
