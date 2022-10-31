import React from 'react';
import Delete from './Delete';
import RegisterDonor from './RegisterDonor';
import Update from './Update';

const Home = () => {
    return (
        <div>
            <RegisterDonor/>
            <Update/>
            <Delete/>
        </div>
    );
};

export default Home;