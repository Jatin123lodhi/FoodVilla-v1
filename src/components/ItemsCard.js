import { useDispatch, useSelector } from "react-redux";
import { CND_IMG_URL } from "../constant";
import { addItem,removeItem } from "../utils/cartSlice";

import store from "../utils/store";
const ItemsCard = ({ item }) => {
  const { name, description, cloudinaryImageId,price } = item;
  //console.log(item,' item');
  //console.log(cloudinaryImageId, ' image id')
  const dispatch = useDispatch();
  const handelAddItem = () => {
    dispatch(addItem(item));
  };
  const handelRemoveItem = ()=>{
    dispatch(removeItem(item));
  }
  // using selector we want to read the items list, so it will give items array ->
  //-> based on id we can check how many counts are there of that item

  const cartItem = useSelector((store) => store.cart.items);

  // console.log(cartItem, " cartItemArray---");
  let quantity = 0;
  cartItem.map((obj) => {
    if (obj.item.id === item.id) {
      quantity = obj.quantity;
    }
  });
  return (
    <div className="flex justify-center p-3 " data-testid='item-card'>
      <div className="flex min-w-[320px] p-2 border ">
        <div style={{ width: "400px" }}>
          <h4 className="text-lg">{name}</h4>
          <h5>₹{price/100} </h5>
          <p className="text-md mt-5">{description}</p>
        </div>
        <div className="p-2  w-52">
          {cloudinaryImageId && (
            <img
              className="w-52 mb-2 rounded"
              src={CND_IMG_URL + cloudinaryImageId}
            />
          )}

          <div className=" justify-center flex">
            {quantity === 0 ? (
              <button
                data-testid='add-btn'
                className="bg-slate-200 text-green-500 px-4 py-2 m-2 border hover:bg-lime-400 hover:text-white rounded"
                onClick={() => handelAddItem()}
              >
                Add Items
              </button>
            ) : (
              <>
                <button onClick={() => handelRemoveItem()} className="bg-slate-200 text-green-500 px-4 py-2 my-2 border hover:bg-lime-400 hover:text-white rounded">
                  -
                </button>
                <span className="p-2 my-2 bg-slate-200 text-green-500 border  ">
                  {quantity}
                </span>
                <button data-testid='add-btn' onClick={() => handelAddItem()} className="bg-slate-200 text-green-500 px-4 py-2 my-2 border hover:bg-lime-400 hover:text-white rounded">
                  +
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
