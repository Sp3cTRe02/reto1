var persona = {
    nombre : '',
    apellido : '',
    correo : '',
    dni : '',
    asignaturas : ['DWC','DWS','...']
}

function logear(){
    const email = document.getElementById("email").value 
    const pass = document.getElementById("password").value

    const password = 'admin123'
    // Verificar si la contraseña es 'admin123'
    if (pass == password){
        window.location.href = 'datos.html'
    }else {
        alert('Contraseña incorrecta. Inténtalo de nuevo.')
    }
}

function mostrarPersona(){
    console.log(persona)
}
function guardar(){
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const correo = document.getElementById("correo").value
    const dni = document.getElementById("dni").value

    persona.nombre = nombre
    persona.apellido = apellido
    persona.correo = correo
    persona.dni = dni
}

