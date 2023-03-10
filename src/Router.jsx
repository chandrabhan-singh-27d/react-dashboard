import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

            ]
        }
    ])
    return ( 
        <div className="flex">
            <RouterProvider router={router}/>
        </div>
     );
}

export default Router;