function printData(){
    document.write("<h1>TAREA DWEC03</h1><hr/>")
    let fullName = prompt("Nombre y apellidos: ");
    let birthDate = new Date(prompt("Introduzca su fecha de nacimiento (YYYY-MM-DD): "));
    
    let actualDate = new Date();
    let years = actualDate.getFullYear() - birthDate.getFullYear();
    let actualMonth = actualDate.getMonth();
    let birthMonth = birthDate.getMonth();

    document.write('<p>Buenos días ' + fullName + '<br><br>')
    document.write('<p>Tu nombre tiene ' + fullName.length + ' caracteres, incluidos espacios' + '<br><br>')
    document.write('La primera letra A de tu nombre está en la posición: ' + fullName.toLowerCase().indexOf('a') + '<br><br>')
    document.write('La última letra A de tu nombre está en la posición: ' + fullName.toLowerCase().lastIndexOf('a') + '<br><br>')
    document.write('Tu nombre menos las 3 primeras letras es: ' + fullName.slice(3) +'<br><br>')
    document.write('Tu nombre todo en mayúsculas es: ' + fullName.toUpperCase() + '<br><br>')
    if (actualMonth < birthMonth || (actualMonth === birthMonth && actualDate.getDate() < birthDate.getDate())) {
        years--;
      }
    document.write('Tu edad es: ' + years + ' años. ' + '<br><br>')
    document.write('Naciste un feliz ' + birthDate.getDate() + '/' + birthMonth + ' del año ' + birthDate.getFullYear() + '.' + '<br><br>')
    document.write('El coseno de 180 es: ' + Math.cos(180) + '<br><br>')
    document.write('El número mayor de (34,67,23,75,35,19) es: ' + Math.max(34,67,23,75,35,19) + '<br><br>')
    document.write('Ejemplo de número al azar: ' + Math.random() + '<br><br>')      
}