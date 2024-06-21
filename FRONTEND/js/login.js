function log(){

    let user = document.getElementById("userName").value;
    let pass = document.getElementById("pwd").value;

    if(user=='Juan' && pass=='1234'){
        window.location.href = '/FRONTEND/Componentes/home.html'
    }else{
        alert('error')
    }
}