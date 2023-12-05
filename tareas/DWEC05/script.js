// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {

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

    // Función para convertir a mayúsculas los campos de Nombre y Apellidos
    function convertToUppercase(event) {
    	event.target.value = event.target.value.toUpperCase();
    }

	// VALIDACIÓN DE NOMBRE Y APELLIDOS
	function checkFullname() {
		if (nombre.value.trim() === '' || apellidos.value.trim() === '') {
			if (nombre.value.trim() === '') {
				nombre.focus();
				erroresContainer.innerHTML = 'Por favor, complete el campo: Nombre.';
				return false;
			} 
			
			if (apellidos.value.trim() === '') {
				apellidos.focus();
				erroresContainer.innerHTML = 'Por favor, complete el campo: Apellidos.';
				return false;
			} else {
				erroresContainer.innerText = ""
				return true;
			}
		}
	}

	// VALIDACIÓN DE EDAD
	function checkAge() {
		if (edad.value.trim() === '') {
			erroresContainer.innerHTML = 'Por favor, rellene el campo: Edad';
			edad.focus();
			return false;

		} else if (isNaN(edad.value)) {
			erroresContainer.innerHTML = 'Por favor, inserte un valor numérico';
			edad.focus();
			return false;
	
		} else if (!(edad.value > 0 && edad.value < 105)) {
			erroresContainer.innerHTML = 'Usted sólo puede tener 105 años como máximo, deje ya este mundo. Gracias.';
			edad.focus();
			return false;

		} else {
			erroresContainer.innerText = ""
			return true;
		}
	}


	// VALIDACIÓN NIF
	function checkNIF() {
		var nif_regex = /^\d{8}-?[a-zA-Z]$/;
		// ^ indica el comienzo del texto
		// \d{8} indica 8 dígitos
		// -? indica el guión. Puede llevar o no.
		// [a-zA-Z] indica una letra (mayúscula o minúscula)
		// $ indica el final del texto
		if (!nif_regex.test(nif.value)) {
			erroresContainer.innerText = 'El NIF no es válido. Debe seguir el formato correcto.';
			nif.focus();
			return false;
		} else {
			erroresContainer.innerText = ""
			return true;
		}
	}

	// VALIDACIÓN EMAIL
	function checkEmail() {
		var email_regex = /^[^\s@]+@[a-z]+\.(com|es)$/;
		// ^ indica el comienzo del texto
		// [^\s@]+ indica uno o más caracteres que no sean espacios en blanco ni el símbolo "@"
		// @[a-z] indica el arroba seguido de uno o más caracteres de la "a" a la "z" en minúscula
		// \. escapa el punto para poder determinar su uso
		// (com|es) indica las opciones disponibles a escoger. En este caso, "com" o "es"
		// $ indica el final del texto
		if (!email_regex.test(email.value)) {
			erroresContainer.innerText = 'El email no es válido. Debe seguir el formato correcto.';
			email.focus();
			return false;
		} else {
			return true;
		}
	}

	//VALIDACIÓN PROVINCIA
	function checkProvince() {
		if (provincia.value === "0"){
			erroresContainer.innerText = 'Debe seleccionar una de las dos provincias';
			provincia.focus()
			return false;
		} else {
			return true;
		}
	}

	//VALIDACIÓN FECHA
	function checkDate() {
		var fecha_regex = /^\d{2}-\d{2}-\d{4}$/;
		// ^ indica el comienzo del texto
		// \d{2} indica la presencia de dos dígitos
		// -\d{2} indica la presencia de dos dígitos precedidos de un guión
		// -\d{4} indica la presencia de cuatro dígitos precedidos de un guión
		// $ indica el final del texto
		if (!fecha_regex.test(fecha.value)) {
			erroresContainer.innerText = 'El formato de la fecha no es válido. Debe seguir la siguiente estructura: dd-mm-aaaa.';
			fecha.focus();
			return false;
		} else {
			erroresContainer.innerText = ""
			return true;
			}
	}

	//VALIDACIÓN HORA
	function checkHour() {					
		var hora_regex = /^\d{2}:\d{2}$/;
		// ^ indica el comienzo del texto
		// \d{2}:\d{2} indica la presencia de 2 dígitos separados por dos puntos
		// $ indica el final del texto
		if (!hora_regex.test(hora.value)) {
			erroresContainer.innerText = 'El formato de la hora no es válido. Debe seguir la siguiente estructura: hh:mm. ';
			hora.focus();
			return false;
		} else {
			erroresContainer.innerText = ""
			return true;
			}
	}

	//VALIDACIÓN TELÉFONO
	function checkPhone() {
		var telefono_regex = /^\d{9}$/;
		// ^ indica el comienzo del texto
		// \d{9} indica la presencia de 9 dígitos
		// $ indica el final del texto
		if (!telefono_regex.test(telefono.value)) {
			erroresContainer.innerText = 'Debe incluir un número de teléfono con 9 dígitos';
			telefono.focus();
			return false;
		} else {
			erroresContainer.innerText = ""
			return true;
		}
	}

    // Función para validar los campos del formulario
    function validarFormulario(event) {
		// Pedir confirmación de envío
		if (!checkFullname() || !checkAge() || !checkNIF() || !checkEmail() || !checkProvince() || !checkDate() || !checkPhone() || !checkHour()) {
			event.preventDefault(); // Evita el envío automático del formulario
		} else {
			confirm('¿Estás seguro de enviar el formulario?');
			event.target.submit();
		}


		// Incrementar el número de intentos y almacenarlo en una cookie
		let intentos = 1;
		if (document.cookie.includes('intentosEnvio')) {
			intentos = parseInt(getCookie('intentosEnvio')) + 1;
		}
		document.cookie = `intentosEnvio=${intentos}`;
	
		// Mostrar el número de intentos en el contenedor correspondiente
		intentosContainer.innerHTML = `Intento de Envíos del formulario: ${intentos}`;
    }
  
    // Obtener referencia al formulario
    const formulario = document.getElementById('formulario');
  
    // Agregar event listeners para los campos nombre y apellidos y envío del formulario.
    nombre.addEventListener('blur', convertToUppercase);
    apellidos.addEventListener('blur', convertToUppercase);
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
  