// import { restaurantList } from ".src/constant";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurant from "../utils/useRestaurant";
import useIsOnline from "../utils/useIsOnline";
import UserContext from "../utils/UserContext";
import Crousal from "./Crousal";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const allRestaurants = useRestaurant(setFilteredRestaurants);
  const isOnline = useIsOnline();
  if (!isOnline) {
    return <h1>No internet, please check your connection</h1>;
  }
  const { user, setUser } = useContext(UserContext);
  return !allRestaurants ? (
    <Shimmer />
  ) : (
    <>
      
      <div className="border-solid p-3 m-3">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            data-testid = 'search-input'
            type="text"
            className="p-1 mx-5 w-96 border-slate-300 border rounded"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            data-testid = "search-btn"
            className="bg-green-500 px-2 mx-3 rounded text-white"
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
      <Crousal/>
      <div className="flex flex-wrap justify-center" data-testid="restaurant-list">
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
