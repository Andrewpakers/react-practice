import React from "react";
import { createBrowserRouter,
  RouterProvider, } from "react-router-dom";
import ErrorPage from "../error-page";
import App from "../App";
import TaskApp from '../task-app/task-app';
import CvClassComponents from '../cv-class-components/cv-class-components';
import CvFunctionComponents from '../cv-function-components/cv-function-components';
import MemoryGame from '../memory-game/memory-game';
import ShoppingCart from "../shopping-cart/shopping-cart";
import Cart from "../shopping-cart/components/cart";
import Storefront from "../shopping-cart/components/storefront";

const router = createBrowserRouter([
  {
    path: '/',
    element:<App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/task-app',
    element:<TaskApp />
  },
  {
    path: '/cvclass',
    element:<CvClassComponents />
  },
  {
    path: '/cvfunction',
    element:<CvFunctionComponents />
  },
  {
    path: '/memory-game',
    element:<MemoryGame />
  },
  {
    path: '/shopping-cart',
    element:<ShoppingCart />,
    children: [
      {
        path: "/shopping-cart/cart",
        element: <Cart />,
      },
      {
        path: "/shopping-cart",
        element: <Storefront />,
      },
    ],
  },
]);

const RouteSwitch = () => {
  return (
    <RouterProvider router={router} />
 /*   <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/task-app" element={<TaskApp />} />
        <Route path="/cvclass" element={<CvClassComponents />} />
        <Route path="/cvfunction" element={<CvFunctionComponents />} />
        <Route path="/memory-game" element={<MemoryGame />} />
      </Routes>
    </BrowserRouter> */
  );
};

export default RouteSwitch;