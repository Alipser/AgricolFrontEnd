import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const ruta = "/assets"
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <img className="logo-nav" width="50px" src={`${ruta}/logo-removebg.png`} alt="logo" />
                        <a className="navbar-brand" href="#">Agricol</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'active fw-bolder' : ''}`
                                      }
                                    to='/home'
                                >
                                    Incio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'active fw-bolder' : ''}`
                                      }
                                    to='/registrate'
                                >
                                    Registro
                                </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'active fw-bolder' : ''}`
                                      }
                                    to='/login'
                                >
                                    Iniciar Sesión
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;