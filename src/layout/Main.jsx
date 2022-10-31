import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../componets/Header';

const Main = () => {
    return (
        <div className='bg-gray-800 h-screen'>
            <Header />
            <Outlet />
        </div>
    );
};

export default Main;