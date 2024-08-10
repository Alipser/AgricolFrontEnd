class Usuario {
    constructor(nombre, apellido, email, contrasena, direccion, rolId) {
        this.nombre = nombre;
        this.email = email;
        this.contrasena = contrasena;
        this.rolId = rolId;
        this.direccion = direccion;
        this.apellido = apellido;
        this.telefono = "3157703322"
    }
}

const formulario = document.querySelector("form");
const nombre = document.querySelector("#floatingInputNombre");
const apellido = document.querySelector("#floatingInputApellido");
const direccion = document.querySelector("#floatingInputDireccion");
const correo = document.querySelector("#floatingInputCorreo");
const usuario = document.querySelector("#floatingInputUsuario");
const id = document.querySelector("#floatingInputId");
const contrasena = document.querySelector("#floatingInputContraseña");
const contrasena2 = document.querySelector("#floatingInputContraseña2");
const botonacepto = document.querySelector("#acepto");

let options = document.querySelectorAll("#root > main > section.register-formulario.bg-light > form > fieldset > input[type=checkbox]")  
let idValor = 0


options.forEach(posibility => {
    posibility.addEventListener("click", event => {
        idValor = parseInt(posibility.value);
        if (posibility.checked) {
            options.forEach(otherCheckbox => {
                if (otherCheckbox !== posibility) {
                    otherCheckbox.checked = false;
                }
            });
        }
        
       
    });
});


window.addEventListener("click", ()=>{
    
});




