// Espera a que todo el contenido de la página se haya cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene los datos del cliente desde el almacenamiento local y los parsea de JSON a un objeto
    let datosCliente = JSON.parse(localStorage.getItem('cliente'));
    // Obtiene el elemento donde se mostrarán los datos del cliente
    let datosDiv = document.getElementById('datosCliente');
    
    // Verifica si hay datos del cliente guardados
    if (datosCliente) {
        // Si hay datos, los muestra en el div 'datosCliente'
        datosDiv.innerHTML = `
            <p><strong>Cédula:</strong> ${datosCliente.cedula}</p>
            <p><strong>Apellidos:</strong> ${datosCliente.apellidos}</p>
            <p><strong>Nombres:</strong> ${datosCliente.nombres}</p>
            <p><strong>Dirección:</strong> ${datosCliente.direccion}</p>
            <p><strong>Teléfono:</strong> ${datosCliente.telefono}</p>
            <p><strong>Correo Electrónico:</strong> ${datosCliente.correo}</p>
        `;
    } else {
        // Si no hay datos, muestra un mensaje indicando que no hay datos guardados
        datosDiv.innerHTML = '<p>No hay datos guardados.</p>';
    }
});
