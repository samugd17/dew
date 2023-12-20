/*****CREACIÓN TABLA*****/ 
const zonaDibujo = document.getElementById('zonadibujo');
const rows = 30;
const columns = 30;
const cellSize = 10;
const table = document.createElement('table');
table.setAttribute('border', '1');
table.setAttribute('cellspacing', '0');
table.setAttribute('cellpadding', '0');

// Crearción de filas y celdas
for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < columns; j++) {
        const cell = document.createElement('td');
        cell.style.width = cellSize + 'px';
        cell.style.height = cellSize + 'px';
        cell.style.backgroundColor = 'white'; // Color inicial de la celda
        row.appendChild(cell);
    }
    table.appendChild(row);
}
// Agregar la tabla al elemento zonadibujo
zonaDibujo.appendChild(table);


/*****LÓGICA PINCEL*****/
const colors = document.querySelectorAll('#paleta td');
const cells = document.querySelectorAll('#zonadibujo td');
let selectedColor = '';
let drawing = false;

// Seleccionar color
colors.forEach((color) => {
    color.addEventListener('click', function() {
        // Borrar la clase 'seleccionado' de todos los colores
        colors.forEach((c) => c.classList.remove('seleccionado'));
        // Agregar la clase 'seleccionado' solo al color escogido
        this.classList.add('seleccionado');
        // Obtener el color seleccionado
        selectedColor = window.getComputedStyle(this).getPropertyValue('background-color');
    });
});

// Función para pintar sobre las celdas al pasar el ratón por encima
function colorCells(c) {
    if (drawing) {
        c.target.style.backgroundColor = selectedColor;
    }
}

// Agregar evento de click a las celdas para iniciar o detener el coloreado
cells.forEach((cell) => {
    cell.addEventListener('mousedown', () => {
        drawing = !drawing; // Invierte el estado del pincel
        if (drawing) {
            cell.style.backgroundColor = selectedColor; // Pintar la celda donde se hizo clic
            document.getElementById('pincel').innerText = 'PINCEL ACTIVADO';
        } else {
            document.getElementById('pincel').innerText = 'PINCEL DESACTIVADO';
        }
    });

    cell.addEventListener('mouseover', colorCells); // Evento para pintar al mover el ratón sobre las celdas
});


/*****BOTÓN BORRAR DIBUJO*****/
const removeBtn = document.createElement('button');
removeBtn.textContent = 'Borrar dibujo'; // Añadimos el texto que tendrá el botón
removeBtn.addEventListener('click', removeColors);
table.parentNode.insertBefore(removeBtn, table.nextSibling); // Insertamos el botón justo después de la tabla

// Función para borrar el dibujo
function removeColors() {
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
}


