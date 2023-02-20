import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
// import Background from '@/assets/images/background.png'

const Dashboard: React.FC = () => {
    useEffect(() => {
        document.documentElement.style.setProperty("--position-left-noti", "0");
    }, []);
    const location = useLocation();

    return (
        <div className="auth-layout">
            <Outlet />
        </div>
    );
};

export default Dashboard;
