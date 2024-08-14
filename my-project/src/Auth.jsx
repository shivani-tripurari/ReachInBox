import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthHandler = () => {
    const navigate = useNavigate();

    useEffect(() => {
        
        // Extract the token from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
            // Store the token in localStorage
            localStorage.setItem('authToken', token);

            // Redirect to the home page or another appropriate page
            navigate('/home');
        } else {
            // If no token, redirect to login
            navigate('/');
        }
    }, [navigate]);

    return null;
};

export default AuthHandler;
