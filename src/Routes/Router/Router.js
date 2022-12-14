import Login from "../../../src/Pages/Login/Login";
import LoginLayout from "../../Layout/LoginLayout";
import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Signup from "../../Pages/Login/Signup";
import Orders from "../../Pages/Orders/Orders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            {" "}
            <Orders />
          </PrivateRoute>
        ),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            {" "}
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params: { id } }) =>
          fetch(`https://genius-car-server-ruby.vercel.app/services/${id}`),
      },
    ],
  },
  {
    path: "",
    element: <LoginLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
