import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { Footer } from "./src/components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./style.css";
// import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error.js";
import RestaurantMenu from "/src/components/RestaurantMenu";
import LoginForm from "./src/components/LoginForm";
import Profile from "./src/components/Profile.js";
import Shimmer from "./src/components/Shimmer.js";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import NewCart from "./src/components/NewCart"; 

// import InstaMart from "./src/components/InstaMart";
//Config driven UI
let InstaMart = lazy(() => import("./src/components/InstaMart"));
let About = lazy(() => import("./src/components/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Jatin Lodhi",
    email: "jatin@gmail.com",
  });
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

// we will do routing
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading Please wait ...</h1>}>
            <About />
          </Suspense>
        ),
        // element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/insta-mart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: "/NewCart",
        element: <NewCart />,
      },
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
