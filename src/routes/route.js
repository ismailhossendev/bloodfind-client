import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
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
                loader: () => fetch('http://localhost:5000/donors'),
                element: <DonorList />
            },
            {
                path:'/update',
                element:<Update/>
            }
        ])
    }
])