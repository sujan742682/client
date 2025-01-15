

import {
   HomeLayout,
   AddJob,
   Admin,
   AllJobs,
   DashboardLayout,
   DeleteJobs,
   EditJob,
   Error,
   Landing,
   Login,
   Profile,
   Register,
   Stats
} from './pages'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
const router=createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>
      },
      {
        path:'register',
        element:<Register/>,
      },
      {
        path:'login',
        element:<Login/>,
      },
      {
        path:'dashboard',
        element:<DashboardLayout />,
      },
    ],
  },
])
const App = () => {
  return <RouterProvider router={router}/>
}

export default App