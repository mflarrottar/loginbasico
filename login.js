const usuarios = [
    {
        id:1,
        name: 'Mateo',
        user: 'mflarrottar',
        password: '1234',
    },
    {
        id:2,
        name: 'jhon',
        user: 'dairo',
        password: '2468',
    },

]
let user = document.getElementById("mail");
let password = document.getElementById("clave");
let boton = document.getElementById("btn1");

boton.addEventListener("click", (e) =>{
    e.preventDefault();

    const usuarioInput = user.value;
    const passwordInput = password.value;

    const foundUser = usuarios.find((usuario) => usuario.user === usuarioInput && usuario.password 
    === passwordInput);

    if (foundUser) {
        alert ("Inicio de sesion exitoso hpta");
        
      
    } else {
        alert ("Los datos son incorrectos kcorro");
    }
})