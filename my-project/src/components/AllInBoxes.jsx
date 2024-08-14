import React, { useEffect, useState } from 'react';
import UserRightBar from '../components/UserRightBar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import List from '../components/List.jsx';

const AllInboxes = () => {
    const [oneboxData, setOneboxData] = useState([]);

    // Fetch the list of emails
    useEffect(() => {
        const token = localStorage.getItem('authToken'); // Retrieve the token

        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`, // Include the token in the header
                'Content-Type': 'application/json'
            },
            redirect: 'follow'
        };

        fetch("https://hiring.reachinbox.xyz/api/v1/onebox/list", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result); // Check the result in the console
                setOneboxData(result.data);
                console.log(result.data); // Check what's being set in the state
            })
            .catch(error => console.error('Error fetching onebox list:', error));
    }, []);
    
    return (
        <>
            <div className='container'>
                <Sidebar />
                <List threads={oneboxData} />
                {/* Pass the fetched data to List component */}
                <UserRightBar />
            </div>
        </>
    );
};

export default AllInboxes;
