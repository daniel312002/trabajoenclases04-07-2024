// Añade un evento 'submit' al formulario con ID 'clienteForm'
document.getElementById('clienteForm').addEventListener('submit', function(event) {
    // Previene el comportamiento por defecto del formulario
    event.preventDefault();
    
    // Obtiene los valores de los campos del formulario
    let cedula = document.getElementById('cedula').value;
    let apellidos = document.getElementById('apellidos').value;
    let nombres = document.getElementById('nombres').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let correo = document.getElementById('correo').value;
    
    // Valida los campos de cédula, teléfono y correo electrónico
    if (!validateCedula(cedula) || !validateTelefono(telefono) || !validateCorreo(correo)) {
        showAlert("Por favor, ingresa datos válidos.", "error"); // Muestra un mensaje de error si la validación falla
        return;
    }
    
    // Crea un objeto 'cliente' con los datos del formulario
    let cliente = {
        cedula: cedula,
        apellidos: apellidos,
        nombres: nombres,
        direccion: direccion,
        telefono: telefono,
        correo: correo
    };
    
    // Guarda el objeto 'cliente' en el almacenamiento local (localStorage)
    localStorage.setItem('cliente', JSON.stringify(cliente));
    showAlert("Datos guardados exitosamente", "success"); // Muestra un mensaje de éxito
});

// Añade un evento 'click' al botón con ID 'newPageButton' para redirigir a una nueva página
document.getElementById('newPageButton').addEventListener('click', function() {
    window.location.href = 'nuevapagina.html'; // Redirige a 'nuevapagina.html'
});

// Función para validar la cédula (debe contener 10 dígitos)
function validateCedula(cedula) {
    let cedulaRegex = /^[0-9]{10}$/;
    return cedulaRegex.test(cedula);
}

// Función para validar el teléfono (debe contener entre 7 y 10 dígitos)
function validateTelefono(telefono) {
    let telefonoRegex = /^[0-9]{7,10}$/;
    return telefonoRegex.test(telefono);
}

// Función para validar el correo electrónico (formato estándar de correo electrónico)
function validateCorreo(correo) {
    let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correoRegex.test(correo);
}

// Función para mostrar una alerta con un mensaje y tipo (éxito o error)
function showAlert(message, type) {
    const alertBox = document.getElementById('alert'); // Obtiene el elemento de alerta
    alertBox.textContent = message; // Establece el mensaje de la alerta
    alertBox.className = 'alert'; // Restablece la clase del elemento de alerta
    if (type === 'success') {
        alertBox.classList.add('success'); // Añade la clase 'success' si el tipo es éxito
    } else {
        alertBox.classList.remove('success'); // Remueve la clase 'success' si el tipo es error
    }
    alertBox.style.display = 'block'; // Muestra la alerta
    setTimeout(() => {
        alertBox.style.display = 'none'; // Oculta la alerta después de 3 segundos
    }, 3000);
}
