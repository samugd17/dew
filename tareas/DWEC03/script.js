function openNewWindow() {
    var newWindow = window.open('', '', 'width=800,height=600,resizable=no');
  
    // Write content in the new window
    newWindow.document.write('<h3>Ejemplo de Ventana Nueva</h3>');
    newWindow.document.write('Full URL: ' + newWindow.location + '<br>');
    newWindow.document.write('Protocol used: ' + newWindow.location.protocol + '<br>');
    newWindow.document.write('Browser Code Name: ' + navigator.userAgent + '<br>');
  
    // Check if Java is available in the new window
    if (newWindow.navigator.javaEnabled()) {
      newWindow.document.write('Java IS available in this window.<br>');
    } else {
      newWindow.document.write('Java IS NOT available in this window.<br>');
    }
  
    // Open an iframe with the content of www.google.com at 800x600
    newWindow.document.write('<iframe src="https://www.google.com" width="800" height="600"></iframe>');
  }
  