import Login from "../../../src/Pages/Login/Login";
import LoginLayout from "../../Layout/LoginLayout";
import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Signup from "../../Pages/Login/Signup";

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
        path: "/services/:id",
        element: <Checkout />,
        loader: ({ params: { id } }) =>
          fetch(`http://localhost:15000/services/${id}`),
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
