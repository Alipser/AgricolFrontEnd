import { NavLink } from 'react-router-dom';
import './style.css'
function Login() {
    const ruta = "/assets"

    return (
        <>
            <main className="d-flex align-items-center">
                <section>
                    <img src="/assets/logo.png" alt=""></img>
                </section>

                <section className="formulario bg-light">
                    <h5 className="titulo-formulario">Inicia sesión con tu correo</h5>
                    <div className="contenedor-box-username" method="post">
                        <div>
                        </div>
                        <div className="username">

                            <img width="30px" src={`${ruta}/logo-mail.png`} alt="correo" />
                            <input type="email" placeholder="Tucorreo@mail.com" prequired />

                        </div>
                        <div className="username" >

                            <img width="30px" src={`${ruta}/contrasena.png`} alt="contraseña" />
                            <input type="password" placeholder="Contraseña" required />
                        </div>
                    </div>

                    <div>
                        <p>Al ignresar e inciar sesión acpetas los terminos y condiciones de la pagina web Agricol.</p>
                    </div>
                    <NavLink
                        to='/comprador'
                    >
                         <button className="boton-registrar" type="submit">inciar sesión </button>
                    </NavLink>


                   
                </section>

                <section>
                    <img src={`${ruta}/lema.png`} alt=""></img>
                </section>
            </main>

        </>
    )
}

export default Login
