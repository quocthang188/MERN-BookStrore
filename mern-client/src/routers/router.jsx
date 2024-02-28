import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/singleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRouter from "../PrivateRoute/PrivateRouter";
import Logout from "../components/Logout";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/shop',
            element: <Shop/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/blog',
            element: <Blog/>
        },
        {
          path: '/book/:id',
          element: <SingleBook/>,
          loader: ({params}) => fetch(`http://localhost:3000/book/${params.id}`)
        }
      ]
    },
    {
      path:"/admin/dashboard",
      element: <DashboardLayout/>,
      children: [
        {                                          
          path: "/admin/dashboard",
          element:  <PrivateRouter><Dashboard/></PrivateRouter>
        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadBook/>
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageBook/>
        },
        {
          path: "/admin/dashboard/edit-book/:id",
          element: <EditBook/>,
          loader: ({params}) => fetch(`http://localhost:3000/book/${params.id}`)
        }
      ]
      
    },
    {
      path:'/sign-up',
      element: <SignUp/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/logout',
      element: <Logout/>
    }
  ]);

export default router