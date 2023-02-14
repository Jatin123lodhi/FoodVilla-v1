import { useState,useEffect } from "react";
import { ALL_RESTAURANT_URL } from "../constant";
const useRestaurant = (setFilteredRestaurants) => {
  const [allRestaurants,setAllRestaurants] = useState();
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(ALL_RESTAURANT_URL);
    // console.log(data, "   data inside getRestaurant");
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  //return all the restaurant data
  return allRestaurants;
};

export default useRestaurant;
