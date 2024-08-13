import { NavLink } from 'react-router-dom';

import './style.css';

const Footer = () => {
    const ruta = "/assets"
    return (
        <>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div className="me-5 d-none d-lg-block">
                        <span>Conectate con nosotros a traves de redes sociales:</span>
                    </div>

                    <div className="d-flex gap-3">
                        <div>
                            <a href="" className="text-reset">
                                <box-icon type='logo' name='linkedin-square'></box-icon>
                            </a>
                        </div>
                        <div>
                            <a href="" className="text-reset">
                                {/* <box-icon name='github' type='logo' ></box-icon> */}
                            </a>
                        </div>
                    </div>

                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 footer-img-box">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <img src={`${ruta}/logo-removebg.png`} alt="" />
                                </h6>
                                <p>
                                    El campo colombiano a un click.
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Links
                                </h6>
                                <p>
                                    <NavLink
                                        className="text-reset"
                                        to='/home'
                                    >
                                        Incio
                                    </NavLink>
                                </p>
                                <p>
                                <NavLink
                                        className="text-reset"
                                        to='/registrate'
                                    >
                                        Registrarse
                                    </NavLink>
                                </p>
                                <p>
                                <NavLink
                                        className="text-reset"
                                        to='/login'
                                    >
                                        Inciar Sesión
                                    </NavLink>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> Medellin, Colombia</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 57 3157003322</p>
                            </div>

                        </div>

                    </div>
                </section>



            </footer>
        </>
    )
}

export default Footer;