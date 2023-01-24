import React, { Suspense, lazy } from "react";
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
// import InstaMart from "./src/components/InstaMart";
//Config driven UI
let InstaMart = lazy(() => import("./src/components/InstaMart"));
let About = lazy(()=> import("./src/components/About"));
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
        element: <Suspense fallback={<h1>Loading Please wait ...</h1>}><About /></Suspense>,
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
          <Suspense fallback={<Shimmer/>}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
