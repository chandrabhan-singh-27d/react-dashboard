import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/LoginUser"
import Register from "./pages/RegisterUser";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <HomePage />
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router} />
    );
}

export default Router;