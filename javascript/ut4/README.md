# Actividades prácticas unidad de trabajo 4

#### Actividad 1. 
Crear una función que genere un array aleatorio, usando 3 parámetros: número de elementos (por defecto 10, valor mínimo del elemento (por defecto 100), valor máximo (por defecto 200)).

#### Actividad 2. 
Usando la función del ejercicio 1, generar un array aleatorio de 20 elementos entre 20 y 100 y luego ordenarlo.

#### Actividad 3. 
Crear una función que mezcle los elementos de un array en orden aleatorio. Probar con el array ordenado creado en el ejercicio anterior.

#### Actividad 4. 
Modifica la función de la actividad 1 para recorrer un array aleatorio de 15 elementos entre -10 y 20, de tal modo que para cada elemento x, se cree un nuevo array de la siguiente forma:

x <= -5: Eliminar el primer elemento del array.
-5 < x <= 0: Eliminar el último elemento del array.
0 < x <=  10: Añadir x al principio del array.
10 < x <=  10: Añadir x al final del array.

Mostrar un mensaje de texto para cada número indicando el valor de x, la operación realizada (eliminar o añadir, al principio o al final), el número añadido/eliminado y el tamaño del array tras realizar la operación, así como el array resultante.

#### Actividad 5. 
Crear una función que acepte un array y devuelva otro array con la raíz cuadrada de cada elemento. Probar con un array aleatorio de 20 números entre 60 y 100.

#### Actividad 6. 
Crear una función que devuelva el valor máximo y mínimo del array, e indique el índice de estos valores (si el valor se repite, informar sólo sobre la primera vez que aparezca). Probar con un array aleatorio de 20 números entre -100 y 100.

#### Actividad 7. 
Crear un array de 50 números aleatorios enteros aleatorios entre 10 y 20. Para cada elemento, informar si es la primera vez que aparece, o si se trata de un elemento repetido.

#### Actividad 8. 
Modificar el ejercicio anterior para que si el número ya existía, nos indique cuántas veces había aparecido con anterioridad.

#### Actividad 9. 
Realizar una función en JS que dado un DNI (comprobar que es un número entre 0 y 99999999), devuelva la letra asociado al mismo. Esta letra se calcula como el módulo (resto) de la división del número del DNI entre 23, y a partir del resto se escoge una de las siguientes letras según la posición: TRWAGMYFPDXBNJZSQVHLCKET. Por ejemplo, para el DNI 12345678, al dividir entre 23 se obtiene como resto 14, por lo que le corresponde la letra 'Z', siendo el DNI correcto 12345678Z.

#### Actividad 10. 
Emplea una función recursiva para generar la sucesión de Fibonacci.

#### Actividad 11. 
Vamos a crear un programa en JavaScript para gestionar una base de datos de coches en un concesionario. Cada coche estará representado por su modelo, color, matrícula y año. Deberás crear una serie de funciones para agregar coches, eliminar coches y mostrar información sobre los coches en la base de datos.

Instrucciones:

- Crea una función constructora llamada Coche que acepte los siguientes parámetros: modelo, color, matricula y ano. Esta función deberá crear objetos coche con estas propiedades.
- Crea una base de datos de coches utilizando un objeto JavaScript llamado coches. Este objeto será un almacén de coches, donde la clave será la matrícula del coche y el valor será un objeto coche.
- Crea una función llamada agregarCoche que permita agregar un coche a la base de datos.
- Crea una función llamada eliminarCoche que permita eliminar un coche de la base de datos.
- Crea una función llamada mostrarTodosLosCoches que muestre en la consola la información de todos los coches en la base de datos, incluyendo modelo, color, matrícula y año.