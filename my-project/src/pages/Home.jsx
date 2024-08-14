import React from 'react';
import './login.css';
import UserRightBar from '../components/UserRightBar.jsx';
import Sidebar from '../components/Sidebar.jsx';

const Home = () => {
    return (
        <>
            <div className='container'>
                <Sidebar />
                <UserRightBar />
            </div>
        </>
    );
};

export default Home;
