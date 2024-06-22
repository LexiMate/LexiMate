// function log(){

//     let user = document.getElementById("userName").value;
//     let pass = document.getElementById("pwd").value;

//     if(user=='Juan' && pass=='1234'){
//         window.location.href = '/FRONTEND/Componentes/home.html'
//     }else{
//         alert('error')
//     }
// }

const form = document.getElementById('form');

const login = async (e) => {
    e.preventDefault();

    const emailUsuario = document.getElementById('userEmail').value; // Obtén el valor del campo de correo electrónico
    const contrasenia = document.getElementById('pwd').value; // Obtén el valor del campo de contraseña

    const datosUsuario = { Email: emailUsuario, Contrasenia: contrasenia }; // Construye el objeto con los datos del usuario

    try {
        const peticion = await fetch('http://localhost:3000/login', {
            method: "POST",
            body: JSON.stringify(datosUsuario), // Convierte el objeto datosUsuario a JSON
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const respuesta = await peticion.json();

        if (!peticion.ok) {
            alert(respuesta.msg);
        } else {
            alert(respuesta.msg);
            localStorage.setItem('token', respuesta.token);
            window.location.href = '/FRONTEND/Componentes/home.html';
        }
    } catch (error) {
        console.error('Error al intentar iniciar sesión:', error);
        alert('Hubo un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
    }
};

form.addEventListener('submit', login);
