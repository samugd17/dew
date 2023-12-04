// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {

    // Función para convertir a mayúsculas los campos de Nombre y Apellidos
    function convertirAMayusculas(event) {
      event.target.value = event.target.value.toUpperCase();
    }
  
    // Función para validar los campos del formulario
    function validarFormulario(event) {
      event.preventDefault(); // Evitar el envío automático del formulario
  
      // Obtiene referencias a los elementos del formulario
      const nombre = document.getElementById('nombre');
      const apellidos = document.getElementById('apellidos');
      const edad = document.getElementById('edad');
      const nif = document.getElementById('nif');
      const email = document.getElementById('email');
      const provincia = document.getElementById('provincia');
      const fecha = document.getElementById('fecha');
      const telefono = document.getElementById('telefono');
      const hora = document.getElementById('hora');
      const erroresContainer = document.getElementById('errores');
      const intentosContainer = document.getElementById('intentos');
  
      // Validación de Nombre y Apellidos
      if (nombre.value.trim() === '' || apellidos.value.trim() === '') {
        erroresContainer.innerHTML = 'Por favor, complete los campos Nombre y Apellidos.';
        if (nombre.value.trim() === '') {
          nombre.focus();
        } else {
          apellidos.focus();
        }
        return;
      }
  
      // Otras validaciones similares para cada campo (Edad, NIF, Email, Provincia, Fecha, Teléfono, Hora)
  
      // Incrementar el número de intentos y almacenarlo en una cookie
      let intentos = 1;
      if (document.cookie.includes('intentosEnvio')) {
        intentos = parseInt(getCookie('intentosEnvio')) + 1;
      }
      document.cookie = `intentosEnvio=${intentos}`;
  
      // Mostrar el número de intentos en el contenedor correspondiente
      intentosContainer.innerHTML = `Intento de Envíos del formulario: ${intentos}`;
  
      // Pedir confirmación de envío
      const confirmacion = confirm('¿Estás seguro de enviar el formulario?');
      if (confirmacion) {
        // Si se confirma, enviar el formulario
        event.target.submit();
      } else {
        // Si se cancela, no enviar el formulario
        return;
      }
    }
  
    // Obtener referencia al formulario
    const formulario = document.getElementById('formulario');
  
    // Agregar event listeners para los campos Nombre y Apellidos
    document.getElementById('nombre').addEventListener('blur', convertirAMayusculas);
    document.getElementById('apellidos').addEventListener('blur', convertirAMayusculas);
  
    // Agregar event listener para el evento submit del formulario
    formulario.addEventListener('submit', validarFormulario);
  });
  
  // Función para obtener el valor de una cookie por su nombre
  function getCookie(nombre) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(nombre + '=')) {
        return cookie.substring(nombre.length + 1);
      }
    }
    return '';
  }
  