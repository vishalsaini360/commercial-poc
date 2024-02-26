import React, { useState, Children, cloneElement } from 'react';

const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);

    const handleTryAgain = () => {
        setHasError(false);
    };

    const handleCatch = (error, errorInfo) => {
        // You can use your own error logging service here
    };

    if (hasError) {
        return (
            <main className="">
                <div className="">
                    <h1 className="">Error</h1>
                    <p className="">Oops, there is an error!</p>
                    <div className="">
                        <a onClick={handleTryAgain} className="">Go back home</a>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <>
            {Children.map(children, (child) =>
                cloneElement(child, { onError: handleCatch })
            )}
        </>
    );
};

export default ErrorBoundary;
