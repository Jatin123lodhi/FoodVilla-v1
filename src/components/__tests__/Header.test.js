import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";
test("logo should load on rendering header", () => {
  //Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //console.log(header)  we got this
  
  //check for logo
  const logo = header.getAllByTestId("logo");
  //console.log(logo);
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("online status should be green on rendering header", () => {
    //Load header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const onlineStatus = header.getByTestId("online-status"); 
    //console.log(onlineStatus.innerHTML)
    //console.log(onlineStatus[0].innerHTML);
    expect(onlineStatus.innerHTML).toBe("✅");
  });

  
test("Cart should have 0 items on rendering header", () => {
    //Load header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const cart = header.getByTestId("cart"); 
    // console.log(cart.innerHTML);
    expect(cart.innerHTML).toBe("Cart - 0 items");
  });