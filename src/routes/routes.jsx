import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import EditProfile from "../pages/EditProfile";
import ToyDetails from "../pages/ToyDetails";
import AllToys from "../pages/AllToys";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys";
import AddToys from "../pages/AddToys";
import EditToy from "../pages/EditToy";

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
                path: '/my-toys',
                element: <PrivateRoute><MyToys /></PrivateRoute>
            },
            {
                path: '/add-toys',
                element: <PrivateRoute><AddToys /></PrivateRoute>
            },
            {
                path: '/edit-toys/:id',
                element: <PrivateRoute><EditToy /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://electro-kidz-server.vercel.app/all-toys/${params.id}`)
            },
            {
                path: '/toyDetails/:id',
                element: <PrivateRoute><ToyDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://electro-kidz-server.vercel.app/all-toys/${params.id}`)
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