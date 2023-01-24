// import { restaurantList } from ".src/constant";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurant from "./useRestaurant";
import useIsOnline from "../utils/useIsOnline"; 
const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  const allRestaurants = useRestaurant(setFilteredRestaurants);
  const isOnline = useIsOnline();
  if(!isOnline){
    return <h1>No internet, please check your connection</h1>
  }
  return  !allRestaurants ? (
    <Shimmer />
  ) : (
    <>
      <div className="search_container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            className="search_input"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search_btn"
            onClick={() => {
              //need to filter the data
              const data = filterData(searchText, allRestaurants);
              // update the state - restaurants
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
