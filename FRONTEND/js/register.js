function register() {
    let email = document.getElementById('emailAddress').value;
    let pass = document.getElementById('pwd').value;
    let passConfirm = document.getElementById('pwdConfirm').value;
    
    let regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gim;


    if (!regexEmail.test(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    if (!regexPass.test(pass)) {
        alert('La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula y un número.');
        return;
    }

    if (pass !== passConfirm) {
        alert('Las contraseñas no coinciden. Por favor, asegúrate de ingresar la misma contraseña en ambos campos.');
        return;
    }

    // Si todas las validaciones pasan, mostrar el modal de éxito
    $('#myModal').modal('show');
}

function btnBack(){
    
    window.location.href = '/FRONTEND/index.html'

}