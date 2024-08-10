import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';

import Register from '../register';
import Registerd from '../register2';
import Home from '../home';
import Login from '../login';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import Comprador from '../comprador';



const AppRoutes = () => {

    let routes = useRoutes([
        {
            path: '/',
            element: <Navigate to="/home" />
        },
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/registrate',
            element: <Register />
        },
        {
            path: '/comprador',
            element: <Comprador />
        },
        {
            path: '/prueba',
            element: <Registerd />
        },

    ])

    return routes;
}

function App() {


    return (
        <BrowserRouter>
            <header>
                <NavBar />
            </header>

            <AppRoutes />

            <Footer />
        </BrowserRouter>
    )
}

export default App
