import React from 'react';
import './style.css';

const Layout =({ children }) => {

    return (
        <>
            <main className="layout">
                {children}
            </main>
        </>
    )

};

export default Layout;