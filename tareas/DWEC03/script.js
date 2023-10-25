function openNewWindow() {
    //Abrir ventana emergente
    var windowWidth = 400;
    var windowHeight = 300;
    var left = (window.screen.width - windowWidth) / 2;
    var top = (window.screen.height - windowHeight) / 2;
    var options = "width=" + windowWidth + ",height=" + windowHeight + ",left=" + left + ",top=" + top;
    var subwindow = window.open("index1.html", "VentanaEmergente", options);
    //Actualizar datos
    var data = subwindow.document.getElementById('data');
    var site_url = subwindow.document.createElement('li');
    site_url.textContent = `URL completa: ${window.location}`;
    data.appendChild(site_url);
    // Enviar datos
    let datoAEnviar = document.getElementsByTagName('li');
    subwindow.window.opener.postMessage(datoAEnviar, '*');
}