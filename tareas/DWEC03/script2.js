function printData(){
    document.write("<h1>TAREA DWEC03</h1><hr/>")
    let fullName = prompt("Nombre y apellidos: ");
    let day = prompt("Introduzca su dia de nacimiento: ");
    let month = prompt("Introduzca su mes de nacimiento: ");
    let year = prompt("Introduzca su año de nacimiento: ");
    let actualDate = new Date();

    document.write('<p>Buenos días ' + fullName + '<br><br>')
    document.write('<p>Tu nombre tiene ' + fullName.length + ' caracteres, incluidos espacios' + '<br><br>')
    document.write('La primera letra A de tu nombre está en la posición: ' + fullName.toLowerCase().indexOf('a') + '<br><br>')
    document.write('La última letra A de tu nombre está en la posición: ' + fullName.toLowerCase().lastIndexOf('a') + '<br><br>')
    document.write('Tu nombre menos las 3 primeras letras es: ' + fullName.slice(3) +'<br><br>')
    document.write('Tu nombre todo en mayúsculas es: ' + fullName.toUpperCase() + '<br><br>')
    document.write('Tu edad es: ' + actualDate.getFullYear() - year + ' años. ' + '<br><br>')
    document.write('Naciste un feliz ' + day + '/' + month + ' del año ' + year + '.' + '<br><br>')
    document.write('El coseno de 180 es: ' + Math.cos(180) + '<br><br>')
    document.write('El número mayor de (34,67,23,75,35,19) es: ' + Math.max(34,67,23,75,35,19) + '<br><br>')
    document.write('Ejemplo de número al azar: ' + Math.random() + '<br><br>')      
}