import { CND_IMG_URL } from "../constant";
const ItemsCard = ({ name, description, cloudinaryImageId }) => {
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

export default ItemsCard;