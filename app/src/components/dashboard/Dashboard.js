import { Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import './dashboard.css';
import DashHeader from './DashHeader';
import Sidebar from './Sidebar';

const Dashboard = () => {
    // const { auth } = useAuth();
    // const navRef = useRef();

    return (
        <div className='Dashboard'>
            <div className='Dashboard_Content'>
                <Sidebar />
                <DashHeader />
                <div className="Dashboard_Main">
                    <Outlet style={{gridArea: "main"}} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;