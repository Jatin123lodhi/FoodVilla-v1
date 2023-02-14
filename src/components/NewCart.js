import React from "react";
import { useSelector } from "react-redux";
import { CND_IMG_URL } from "../constant";
import { clearCart, addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const NewCart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  //console.log(cartItems,'  cartItems')
  const dispatch = useDispatch();
  const handelClearCart = () => {
    // on click of btn -> dispatch an action (clearCart) ->
    //whichc will call dispatcher fun -> which will update the store
    dispatch(clearCart());
  };

  const handelAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handelRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  let totalCost = 0.00;
  let totalQuantity = 0;
  return (
    <>
      <div className="flex justify-between  ">
        <h1 className="text-2xl m-4 p-2 ">Cart Items</h1>
        {cartItems.length === 0 ? (
          <h3 className="m-2 mr-9 p-3 text-md ">Your Cart is empty</h3>
        ) : (
          <button
            onClick={handelClearCart}
            className="bg-orange-300 m-4 p-2 border rounded "
          >
            Clear Cart
          </button>
        )}
      </div>
      <div className="flex" >
        <div className="flex  flex-wrap justify-center m-2 p-2 w-3/4">
          {cartItems.map(({ item, quantity }) => (
            <div key={item.id} className="border w-72 p-5  m-3 shadow-lg" data-testid='cart-item'>
              {item.cloudinaryImageId && (
                <img
                  src={CND_IMG_URL + "/" + item.cloudinaryImageId}
                  alt="restaurantImg"
                  className="rounded"
                />
              )}
              {console.log(item, "  item key")}
              <h3 className="text-md m-2 px-2 text-center">{item.name}</h3>
              {/* <h3 className="text-sm">{item.description}</h3> */}
              {/* <h3 className="text-sm">Quantity : {quantity}</h3> */}
              <div className=" mt-2 flex justify-center">
                <button
                  onClick={() => handelRemoveItem(item)}
                  className="bg-slate-200 text-green-500 px-4 py-2 my-2 border hover:bg-lime-400 hover:text-white rounded"
                >
                  -
                </button>
                <span className="p-2 my-2 bg-slate-200 text-green-500 border  ">
                  {quantity}
                </span>
                <button
                  onClick={() => handelAddItem(item)}
                  className="bg-slate-200 text-green-500 px-4 py-2 my-2 border hover:bg-lime-400 hover:text-white rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-2 m-2 border">
          {cartItems.map((obj) => {
            totalCost += (obj.item.price  * obj.quantity) / 100;
            totalQuantity += obj.quantity;
            return (
              <div className="flex items-center justify-around">
                <div className=" text-sm m-2 p-2 w-1/2">{obj.item.name} </div>
                <div className="text-sm m-2 p-2">{obj.quantity}</div>
                <div className="text-sm m-2 p-2">₹{obj.item.price/100 * obj.quantity}</div>
              </div>
            );
          })}
          {cartItems.length!==0 &&
          <div className="flex items-center justify-around bg-green-200">
            <div className="font-bold m-1 p-2 w-1/2">Subtotal</div>
            <div className="text-sm m-1 p-1">{totalQuantity}</div>
            <div className="text-sm m-1 p-1">₹{totalCost}</div>
          </div>
          }
        </div>
      </div>
    </>
  );
};

export default NewCart;
