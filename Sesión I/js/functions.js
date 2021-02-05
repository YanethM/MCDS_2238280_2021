function capturaValores() {
    /* Capturar el valor del campo input utilizando: Value */
    const nombreUser = document.getElementById("user_name").value;
    const lastname1 = document.getElementById("lastname").value;
    const lastname2 = document.getElementById("lastname1").value;
    const age = document.getElementById("user_age").value;
    const emailUser = document.getElementById("email_user").value;
    /* Escribir en el elemento utilizando innerHTML: 
     <h1></h1>
     <label></label>
     <p></p>
     <output></output>*/
    document.getElementById("s1").innerHTML = `Ha iniciado sesión como ${nombreUser} ${lastname1} ${lastname2}`;
    document.getElementById("s2").innerHTML = `Edad del usuario ${age} años`;
    document.getElementById("s3").innerHTML = `Ha recibido un correo de bienvenido en su cuenta ${emailUser}`;

}