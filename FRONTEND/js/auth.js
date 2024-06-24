// Ejecutamos la siguiente logica al cargar el html.
document.addEventListener('DOMContentLoaded', ()=>{

    // Obtenemos del localStorage el token.
    const token = localStorage.getItem('token');

        // Le agregamos un evento click al boton cerrar sesion.
        document.getElementById('btnLogOff').addEventListener('click', ()=> {

            // Al clickear se eliminara del localStorage el token.
            localStorage.removeItem('token');

        })

})