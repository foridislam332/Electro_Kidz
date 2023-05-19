import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import EditProfile from "../pages/EditProfile";
import ToyDetails from "../pages/ToyDetails";
import AllToys from "../pages/AllToys";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/all-toys',
                element: <AllToys />
            },
            {
                path: '/toyDetails/:id',
                element: <ToyDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/all-toys/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            },
            {
                path: '/editProfile',
                element: <EditProfile />
            }
        ]
    },
    {
        path: '*',
        element: <h1>404 page not found</h1>
    }
])

export default routes;