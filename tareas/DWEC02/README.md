## Ejercicio 1. 
### Realizar una pequeña aplicación en JavaScript que muestre lo siguiente:

- Tabla de multiplicar del 7.

- Tabla de sumar del 8.

- Tabla de dividir del 9.

Utilizar tres tipos distintos de bucles que hay en JavaScript (para cada número un tipo de bucle diferente).

## Ejercicio 2. 
### Sabiendo que cuando desplazamos 1 bit a la derecha dividimos un entero por 2 y cuando lo desplazamos a la izquierda estamos multiplicando por 2; configurar tu web para que también imprima el resultado de las siguientes operaciones empleando desplazamiento de bits:

125 / 8 =

40 x 4=

25 / 2=

10 x 16=

## Ejercicio 3. 
### Dado el siguiente código de una calculadora simple:

```html
<h1>Calculadora Simple</h1>
    <br/>
    <form>
        <label for="numero1">Número 1:
            <input type="number" style="text-align:center" id="numero1" name="numero1" required>
        </label>
            <br/><br/>
        <label for="numero2">Número 2:
            <input type="number" style="text-align:center" id="numero2" name="numero2" required>
        </label>
            <br/><br/>
        <div>
            <button type="button" onclick="sumar()">+</button>
            <button type="button" onclick="restar()">-</button>
            <button type="button" onclick="multiplicar()">&times;</button>
            <button type="button" onclick="dividir()">÷</button>
        </div>
    </form>

    <p>Resultado: <input type="text" style="text-align:center" id="resultado" readonly></p>

    <script>
        function sumar() {
            // Obtener los valores de los números ingresados
            var numero1 = parseFloat(document.getElementById("numero1").value);
            var numero2 = parseFloat(document.getElementById("numero2").value);
            // Realizar la multiplicación
            var resultado = (numero1 + numero2).toFixed(2);
            // Mostrar el resultado en la caja de texto
            document.getElementById("resultado").value = resultado;
        }
        function restar() {
            // Obtener los valores de los números ingresados
            var numero1 = parseFloat(document.getElementById("numero1").value);
            var numero2 = parseFloat(document.getElementById("numero2").value);
            // Realizar la multiplicación
            var resultado = (numero1 - numero2).toFixed(2);
            // Mostrar el resultado en la caja de texto
            document.getElementById("resultado").value = resultado;
        }
        function multiplicar() {
            // Obtener los valores de los números ingresados
            var numero1 = parseFloat(document.getElementById("numero1").value);
            var numero2 = parseFloat(document.getElementById("numero2").value);
            // Realizar la multiplicación
            var resultado = (numero1*numero2).toFixed(2);
            // Mostrar el resultado en la caja de texto
            document.getElementById("resultado").value = resultado;
        }
        function dividir() {
            // Obtener los valores de los números ingresados
            var numero1 = parseFloat(document.getElementById("numero1").value);
            var numero2 = parseFloat(document.getElementById("numero2").value);
            // Realizar la multiplicación
            var resultado = (numero1/numero2).toFixed(2);
            // Mostrar el resultado en la caja de texto
            document.getElementById("resultado").value = resultado;
        }
    </script>
```

Se pide:

    Modificar el código proporcionado para agregar condicionales if que manejen las operaciones matemáticas según el botón que se presione.

    También, modificar el código para usar un condicional switch en lugar de múltiples if para manejar las operaciones matemáticas.

    Comentar el código y asegurarse de que esté bien indentado para una mayor claridad y presentación.