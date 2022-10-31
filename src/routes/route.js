import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Delete from "../pages/Delete";
import DonorList from "../pages/DonnorList";
import Home from "../pages/Home";
import RegisterDonor from "../pages/RegisterDonor";
import Update from "../pages/Update";


export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: ([
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register/donor',
                element: <RegisterDonor />,
            },
            {
                path: '/donors',
                loader: () => fetch('https://bloodfind-server.vercel.app/donors'),
                element: <DonorList />
            },
            {
                path:'/update',
                element:<Update/>
            },
            {
                path:'/delete',
                element:<Delete/>
            },
        ])
    }
])