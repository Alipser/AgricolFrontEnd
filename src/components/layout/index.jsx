import React from 'react';


const Layout =({ children }) => {

    return (
        <>
        <main className="d-flex align-items-center ">
                {children}
        </main>
        </>
    )

};

export default Layout;