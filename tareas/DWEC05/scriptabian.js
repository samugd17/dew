document.addEventListener("DOMContentLoaded", function () {
    var intentos = 0;

    var nombre = document.querySelector('input[name="nombre"]');
    var apellidos = document.querySelector('input[name="apellidos"]');
    var edad = document.querySelector('input[name="edad"]');
    var nif = document.querySelector('input[name="nif"]');
    var email = document.querySelector('input[name="email"]');
    var provincia = document.querySelector('select[name="provincia"]');
    var fecha = document.querySelector('input[name="fecha"]');
    var telefono = document.querySelector('input[name="telefono"]');
    var hora = document.querySelector('input[name="hora"]');
    var formulario = document.getElementById("formulario");
    var contenedorerrores = document.getElementById("errores");
    var contenedorintentos = document.getElementById("intentos");

    function punto3() {
        if (!(document.activeElement === nombre || document.activeElement === apellidos)) {
            nombre.value = nombre.value.toUpperCase();
            apellidos.value = apellidos.value.toUpperCase();
        }
    }

    function punto4() {
        if (nombre.value.trim() === "" || apellidos.value.trim() === "") {
            enseñarerror("Los campos 'Nombre' y 'Apellidos' no pueden estar en blanco.");
            if (nombre.value.trim() === "") {
                nombre.focus();
            } else {
                apellidos.focus();
            }
            return false;
        }
        return true;
    }

    function punto5() {
        if (edad.value.trim() === "") {
            enseñarerror("El campo 'edad' no puede estar en blanco.");
            return false;
        }
        else {
            var valoredad = edad.value.trim();
            var regexedad = /^\d+$/; // Para este ejemplo solo estamos pidiendo que sea uno o más numeros, no hay mucho misterio.
            if (!regexedad.test(valoredad) || parseInt(valoredad) < 0 || parseInt(valoredad) > 105) {
                enseñarerror("La edad debe ser un número entre 0 y 105.");
                edad.focus();
                return false;
            }
        }
        return true;

    }

    function punto6() {
        if (nif.value.trim() === "") {
            enseñarerror("El campo 'nif' no puede estar en blanco.");
            return false;
        }
        else {
            var valorNIF = nif.value.trim();
            var regexNIF = /^\d{8}-[a-zA-Z]$/; // Para este ejemplo estamos pidiendo 8 números y tienen que ir seguidos de un "-" y una letra de la a-z ya sea mayúscula o minúscula.
            if (!regexNIF.test(valorNIF)) {
                enseñarerror("El formato del NIF no es válido");
                nif.focus();
                return false;
            }
        }
        return true;
    }

    function punto7() {
        if (email.value.trim() === "") {
            enseñarerror("El campo 'email' no puede estar en blanco.");
            return false;
        }
        else {
            var valoremail = email.value.trim();
            var regexemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // En este caso estamos pidiendo caracteres de la a-z minúscula o mayúscula o números o ., -, _ y con el "+"
            // indicamos que deben ser uno o más, después forzamos el "@" y se repite lo anterior teniendo en cuenta que otra vez debe ser uno o más,
            // Por último escapamos el punto y decimos que solo pueden haber entre 2 y 4 caracteres de entre la a-z minúscula o mayúscula.
            if (!regexemail.test(valoremail)){
                enseñarerror("El formato del correo electrónico no es válido.");
                email.focus();
                return false;
            }
        }  
        return true;
    }

    function punto8() {
        var selectedprovincia = provincia.options[provincia.selectedIndex].value
        if (selectedprovincia === "0") {
        enseñarerror("Seleccione una provincia.");
        provincia.focus();
        return false;
        }
        return true;
    }

    function punto9() {
        if (fecha.value.trim() === "") {
            enseñarerror("El campo 'fecha' no puede estar en blanco.");
            return false;
        }

        else {
            var valorfecha = fecha.value.trim();
            var regexfecha = /^\d{2}[\/-]\d{2}[\/-]\d{4}$/ // Con este ejemplo estamos cogiendo dos numeros para después pasar a escapar una "/" o un "-"
            // vuelve a pasar lo mismo que lo anterior y volvemos a escapar y por último ponemos cuatro dígitos.
            if (!regexfecha.test(valorfecha)) {
                enseñarerror("El formato de la fecha no es válido.");
                fecha.focus();
                return false;
            }
        }
        return true;
    }

    function punto10() {
        if (telefono.value.trim() === "") {
            enseñarerror("El campo 'telefono' no puede estar en blanco.");
            return false;
        }
        else {
            var valortelefono = telefono.value.trim();
            var regextelefono = /^\d{9}$/
            if (!regextelefono.test(valortelefono)) {
                enseñarerror("El formato del teléfono no es válido.");
                telefono.focus();
                return false;
            }
        }
        return true;
    }

    function punto11() {
        if (hora.value.trim() === "") {
            enseñarerror("El campo 'hora' no puede estar en blanco.");
            return false;
        }
        else  {
            var valorhora = hora.value.trim();
            var regexhora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/ // En este caso estamos pidiendole que nos de de 0 a 1 en el primer digito dado 
            // que la hora puede ser desde las 00-19 y continua desde 20-23. Después de los dos puntos el primer digito puede ir desde 0-5 y el segundo de 0-9.
            if (!regexhora.test(valorhora)) {
                enseñarerror("El formato de la hora no es válido.");
                hora.focus();
                return false;

            }
        }
        return true;
    }

    function enseñarerror(mensaje) {
        contenedorerrores.innerHTML = mensaje;
    }

    function enviarformulario(matraca) {
        if (!punto4() || !punto5() || !punto6() || !punto7() || !punto8() || !punto9() || !punto10() || !punto11()) {
            matraca.preventDefault();  
            intentos += 1;
            document.cookie = `tries=` + encodeURIComponent(intentos)
            var intentosfinales = document.cookie.split(';')[0].split('=')[1]
        
            contenedorintentos.innerHTML = "Intento de Envíos del formulario: " + intentosfinales;
        }

        var confirmacion = confirm("¿Desea enviar el formulario?");
        if (!confirmacion) {
            matraca.preventDefault();  
        }
    }

   
    nombre.addEventListener("blur", function () {
        punto3();
    });

    apellidos.addEventListener("blur", function () {
        punto3();
    });

    formulario.addEventListener("submit", enviarformulario);
});