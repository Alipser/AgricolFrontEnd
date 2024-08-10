import { NavLink } from 'react-router-dom'

import './style.css'
function Home() {
    const ruta = "/assets"

    return (
        <>
            <main className="d-flex align-items-center">
                <section>
                    <img src="/assets/logo.png" alt=""></img>
                </section>
                <section className="formulario bg-light">
                    <h5 className="titulo-formulario">Inicia sesión como prefieras</h5>
                    <div className="contenedor-box-username" method="post">
                        <div className="username">
                            <img width="30px" src={`${ruta}/logo-facebook.png`} alt="facebook"></img>
                            <label>Continúa con Facebook</label>
                        </div>
                        <div className="username">
                            <img width="30px" src={`${ruta}/logo-google.png`} alt="google"></img>
                            <label>Continúa con Google</label>
                        </div>
                        <div className="username">
                            <img width="30px" src={`${ruta}/logo-mail.png`} alt="correo"></img>
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'active fw-bolder' : ''}`
                                }
                                to='/login'
                            >
                                <label>Continúa con tu correo</label>

                            </NavLink>

                        </div>
                    </div>
                    <div>
                        <p>Al ignresar e inciar sesión acpetas los terminos y condiciones de la pagina web Agricol.</p>
                    </div>
                    <NavLink
                        className="text-reset"
                        to='/registrate'
                    >
                        <button className="home-boton-registrar" > Registrate!</button>
                    </NavLink>

                </section>
                <section>
                    <img src={`${ruta}/lema.png`} alt=""></img>
                </section>
            </main>

        </>
    )
}

export default Home
