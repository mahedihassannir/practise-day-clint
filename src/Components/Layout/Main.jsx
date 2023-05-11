import React from 'react';
import { Outlet } from 'react-router-dom';
import Headerse from '../pages/Headers';

const Main = () => {
    return (
        <div>
            <Headerse></Headerse>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;