import { Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import '../dashboard/dashboard.css';

import UserSidebar from "./UserSidebar";
import UserHeader from "./UserHeader"

const Dashboard = () => {
    // const { auth } = useAuth();
    // const navRef = useRef();

    return (
        <div className='Dashboard'>
            <div className='Dashboard_Content'>
                <UserSidebar />
                <UserHeader/>
                <div className="Dashboard_Main">
                    <Outlet style={{gridArea: "main"}} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;