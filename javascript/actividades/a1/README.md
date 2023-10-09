# Actividad 1. 
#### _Observa el siguiente código:_

  ```js
  var arr=[1,2,3,4];

  for(var i=0; i < arr.length; i++) {console.log(arr[i]);}

  for(var i=0, len=arr.length; i < len; ++i) {console.log(arr[i]);}
  ```

1. ¿Muestran la misma información el primer y el segundo bucle? ¿Cuál es la diferencia entre los mismos?

    Si, ambos códigos devuelven el mismo resultado ya que hacen exactamente lo mismo, un bucle "for" recorriendo la lista e imprimiendo cada número de la misma. Las únicas diferencias entre los dos, es que en el segundo, el valor de _arr.lenght_ es asignado a una variable llamada len y la acción que tiene que realizar _i_, tiene un primer lugar los dos sumatorios. En este caso, el orden de los factores no altera el producto.

2. ¿Qué muestra el siguiente código? 

```js
arr.forEach(function(i){console.log(i)});
```
Este código sigue mostrando la misma información que el caso anterior.

3. ¿Y el siguiente?

```js
 for (i of arr) {console.log(i);}
 ```

Al igual que en el códio precedente, se sigue mostrando la misma información.

4. ¿Hay diferencia con el siguiente?

 ```js
 for (i in arr){console.log(i);}
 ```

En este código observamos una diferencia en el uso de la sentencia "for". Antes empleábamos la sentencia _for ... of_, la cual muestra los valores de una colección. En este caso sólo los números. Sin embargo la semtecia _for ... in_, muestra el indice y la propiedad en sí.