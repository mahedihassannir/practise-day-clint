import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Blog from "../pages/Blog";
import Checkout from "../pages/Checkout";


let router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "Blog",
                element: <Blog></Blog>
            },
            {
                path: "Login",
                element: <Login></Login>
            },
            {
                path: "Register",
                element: <Register></Register>
            },
            {
                path: `checkout/:id`,
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`http://localhost:5000/total/${params.id}`)
            }

        ]
    }
])



export default router