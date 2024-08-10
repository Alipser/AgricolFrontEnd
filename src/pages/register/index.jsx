import './style.css';
import { useState, useRef } from 'react';



import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function Register() {
    const ruta = "/assets";
    const [validated, setValidated] = useState(false);
    const formRef = useRef(null);
    const [checkValue, setCheckValue] = useState(null);
    const [equalsPassword, setEqualsPassword] = useState(false)

    function handlePasswordChange(){
        const form = formRef.current;
        if (form.querySelector('#floatingInputContrasena').value !== form.querySelector('#floatingInputContrasena2').value) {
             
            setEqualsPassword(true);
            return;
        }
        setEqualsPassword(false);
        form.classList.remove('was-validated');
        return
    }

    const handleSubmit = (event) => {
        const form = formRef.current;
        console.log(form)
        const tipoPersona = document.querySelector('#personaSelect').value;
        console.log(checkValue);
         
        if (tipoPersona === "") {
            form.classList.add('was-validated');
            document.querySelector("#exampleModal > div > div > div.modal-header > button").click();
            setValidated(false);
            return;
        }

        if (checkValue === null) {
            form.classList.add('was-validated');
            document.querySelector("#exampleModal > div > div > div.modal-header > button").click();
            setValidated(false);
            return;
        }

        console.log(form.querySelector('#floatingInputContrasena').value)
        console.log(form.querySelector('#floatingInputContrasena2').value)
         

        if (form.querySelector('#floatingInputContrasena').value !== form.querySelector('#floatingInputContrasena2').value) {
             

            setEqualsPassword(true);
            setValidated(false);
            document.querySelector("#exampleModal > div > div > div.modal-header > button").click();
            return;
        }


        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
            event.preventDefault();
            event.stopPropagation();
            document.querySelector("#exampleModal > div > div > div.modal-header > button").click();
            return;
        }

        setEqualsPassword(false); 
        form.classList.add('was-validated');
        debugger
        register(form);
        setValidated(true);
    };



    function register(form) {
        debugger
        const nuevoUsuario = {
            idusuario: form.querySelector('#floatingInputId').value,
            nombre : form.querySelector('#floatingInputNombre').value,
            apellido : form.querySelector('#floatingInputApellido').value,
            direccion : form.querySelector('#floatingInputDireccion').value,
            email : form.querySelector('#floatingInputCorreo').value,
            usuario : form.querySelector('#floatingInputUsername').value,
            contrasena : form.querySelector('#floatingInputContrasena').value,
            rolId: parseInt(checkValue)
        };

        console.log(JSON.stringify(nuevoUsuario));
        debugger

        fetch("http://localhost:8080/api/v1/agricol/auth/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoUsuario)
        })
            .then(response => {
                if (!response.ok) {
                    response.json();                    
                    throw new Error("Network response was not ok ");
                }
                return response.json();
            })
            .then(data => {
                console.log("Success:", data);
                
                window.location.href = '/login';
            })
            .catch(error => {
                console.error("Error:");
            });
    };

    return (
        <main className="d-flex register-main">
            <section className="register-formulario bg-light">
                <Form className="register-contenedor-box-username needs-validation" ref={formRef} validated={validated} noValidate>

                    <FloatingLabel controlId="floatingInputNombre" label="Nombre: " className="form-floating border border-secondary mb-3 w-75 border-0">
                        <Form.Control required type="text" placeholder="" defaultValue="" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInputApellido" label="Apellido: " className="form-floating border border-secondary mb-3 w-75 border-0">
                        <Form.Control required type="text" placeholder="" defaultValue="" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInputCorreo"
                        label="Email: "
                        className="form-floating border border-secondary mb-3 w-75 border-0"
                    >
                        <Form.Control
                            required
                            type="email"
                            placeholder=""
                            defaultValue=""
                        >
                        </Form.Control>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInputUsername" label="Usuario: " className="form-floating border border-secondary mb-3 w-75 border-0">
                        <Form.Control required type="text" placeholder="" defaultValue="" />
                    </FloatingLabel>

                    <select id="personaSelect" className="form-select border border-secondary w-50 border-0" aria-label="Default select example" required>
                        <option defaultValue value="">Persona</option>
                        <option value="natural">Natural</option>
                        <option value="juridica">Jurídica</option>
                    </select>

                    <fieldset className="border border-secondary">
                        <label>Usuario: </label>
                        <input type="checkbox" value="1" checked={checkValue === "1"}
                            onChange={() => setCheckValue("1")} /> Comprador
                        <input type="checkbox" value="2" checked={checkValue === "2"}
                            onChange={() => setCheckValue("2")} /> Vendedor
                        <input type="checkbox" value="3" checked={checkValue === "3"}
                            onChange={() => setCheckValue("3")} /> Comprador/Vendedor
                    </fieldset>

                    <FloatingLabel controlId="floatingInputId" label="Nit/Cedula: " className="form-floating border border-secondary mb-3 w-75 border-0">
                        <Form.Control required type="text" placeholder="" defaultValue="" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInputDireccion" label="Dirección: " className="form-floating border border-secondary mb-3 w-75 border-0">
                        <Form.Control required type="text" placeholder="" defaultValue="" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInputContrasena" label="Contraseña: " className="form-floating border border-secondary mb-3 w-75 border-0">
                        <Form.Control required type="password" onChange={handlePasswordChange} placeholder="" defaultValue="" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInputContrasena2" label="Contraseña: " className="form-floating border border-secondary mb-3 w-75  border-0">
                        <Form.Control isInvalid={equalsPassword} onChange={handlePasswordChange}  required type="password" placeholder="" defaultValue="" />
                        <Form.Control.Feedback className='border-0' type="invalid">
                            {equalsPassword ? "Contraseñas no coinciden." : ""}
                        </Form.Control.Feedback>
                    </FloatingLabel>

                    <div className="w-75">
                        <p>Al registrarte aceptas los términos y condiciones de la página web Agricol.</p>
                    </div>

                    <button className="register-boton-registrar" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"> Registrate!</button>
                </Form>
            </section>

            <section className="register-contenedorImagenes">
                <img id="imagenLogomain" src={`${ruta}/logo.png`} alt="" />
                <img id="imagenSlogan" src={`${ruta}/lema.png`} alt="" />
            </section>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Todos Los campos son válidos</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Si acepta se creará un nuevo usuario con sus datos y será notificado a su correo.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button id="acepto" type="button" className="btn btn-primary" onClick={handleSubmit}>Acepto</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Register;