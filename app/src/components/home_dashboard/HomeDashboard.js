import { Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import '../dashboard/dashboard.css';

import Sidebar from "../dashboard/Sidebar";
import HomeHeader from "./HomeHeader";

const Dashboard = () => {
    // const { auth } = useAuth();
    // const navRef = useRef();

    return (
        <div className='Dashboard'>
            <div className='Dashboard_Content'>
                <Sidebar />
                <HomeHeader/>
                <div className="Dashboard_Main">
                    <Outlet style={{gridArea: "main"}} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;