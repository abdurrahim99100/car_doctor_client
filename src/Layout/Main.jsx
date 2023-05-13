import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Pages/Shard/Header/Nav';
import Footer from '../Pages/Shard/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;