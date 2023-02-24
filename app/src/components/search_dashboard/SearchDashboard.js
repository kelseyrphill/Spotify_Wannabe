import { Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import '../dashboard/dashboard.css';

import UserHeader from "./SearchHeader"
import Sidebar from "../dashboard/Sidebar";

const Dashboard = () => {
    // const { auth } = useAuth();
    // const navRef = useRef();

    return (
        <div className='Dashboard'>
            <div className='Dashboard_Content'>
                <Sidebar />
                <UserHeader/>
                <div className="Dashboard_Main">
                    <Outlet style={{gridArea: "main"}} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;