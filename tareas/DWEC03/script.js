function openNewWindow() {
    var newWindow = window.open('', '', 'width=800,height=600,resizable=no');
  
    // Write content in the new window
    newWindow.document.write('<h1>Ejemplo de Ventana Nueva</h1>');
    newWindow.document.write('<b>Full URL:</b> ' + newWindow.location.href + '<br>');
    newWindow.document.write('<b>Protocol used:</b> ' + newWindow.location.protocol + '<br>');
    newWindow.document.write('<b>Browser Code Name:</b> ' + navigator.userAgent + '<br>');
  
    // Check if Java is available in the new window
    if (newWindow.navigator.javaEnabled()) {
      newWindow.document.write('Java IS available in this window.<br>');
    } else {
      newWindow.document.write('Java IS NOT available in this window.<br>');
    }
  
    // Open an iframe with the content of www.google.com at 800x600
    newWindow.document.write('<iframe src="https://www.bing.com" width="800" height="600"></iframe>');
  }
  