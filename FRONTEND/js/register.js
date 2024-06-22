const register = async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('firstName').value;
    const apellido = document.getElementById('lastName').value;
    const correo = document.getElementById('emailAddress').value;
    const generoInputs = document.getElementsByName('genero');
    let genero;

    for (const input of generoInputs) {
        if (input.checked) {
            genero = input.value;
            break;
        }
    }
    const contrasenia = document.getElementById('pwd').value;
    const contraseniaConfirm = document.getElementById('pwdConfirm').value;

    // Validaciones
    if (contrasenia !== contraseniaConfirm) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    let regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gim;

    if (!regexEmail.test(correo)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    if (!regexPass.test(contrasenia)) {
        alert('La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula y un número.');
        return;
    }

    // Realizar petición al servidor
    const peticion = await fetch('http://localhost:3000/register', {
        method: 'POST',
        body: JSON.stringify({ NombreUsuario: nombre, ApellidoUsuario: apellido, Email: correo, Genero: genero, Contrasenia: contrasenia }),
        headers: {
            'Content-type': 'application/json'
        }
    });

    const respuesta = await peticion.json();

    if (!peticion.ok) {
        alert(respuesta.msg);
    } else {
        alert(respuesta.msg);
        window.location.href = '/FRONTEND/Componentes/iniciarSesion.html';
    }
};

const form = document.getElementById('form');
form.addEventListener('submit', register);