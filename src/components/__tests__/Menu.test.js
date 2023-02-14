import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import NewCart from "../NewCart";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MENU_DATA),
  });
});

test("Add Items to cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
        <NewCart />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("menu")));
  const addBtn = body.getAllByTestId("add-btn");
  //   fireEvent.click(men);
  //console.log(addBtn[0], " ---addBtn");
  //console.log(body,' -----body')
  const itemCards = body.getAllByTestId("item-card");
  console.log(itemCards.length, "  ---length");
  console.log(addBtn.length, "  ---btn.length");
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);
  fireEvent.click(addBtn[2]);
  fireEvent.click(addBtn[3]);
  // fireEvent.click(addBtn[0]);
  // fireEvent.click(addBtn[0]);
  console.log(itemCards.length, "  ---length");
  console.log(addBtn.length, "  ---btn.length");
  const cartItem = body.getAllByTestId('cart-item');
  console.log(cartItem.length,'   cartitem length')
  // fireEvent.click(addBtn[2]);
  // fireEvent.click(addBtn[2]);
  // const cart = body.getByTestId("cart");
  // console.log(cart.innerHTML, "  cart");
  // expect(cart.innerHTML).toBe('Cart - 3 items');
});
