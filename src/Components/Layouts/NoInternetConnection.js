import React, { useEffect, useState } from 'react';

const NoInternetConnection = ({ children }) => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const handleOnlineStatusChange = () => {
            setIsOnline(navigator.onLine);
        };

        const handleCleanup = () => {
            window.removeEventListener('online', handleOnlineStatusChange);
            window.removeEventListener('offline', handleOnlineStatusChange);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('online', handleOnlineStatusChange);
            window.addEventListener('offline', handleOnlineStatusChange);

            return handleCleanup;
        }
    }, []);

    return (
        <div>
            {isOnline ? (
                children
            ) : (
                <div>
                    <h1>No Internet Connection</h1>
                    <p>Please check your network connection and try again.</p>
                </div>
            )}
        </div>
    );
};

export default NoInternetConnection;