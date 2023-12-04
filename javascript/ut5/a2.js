let general_score = 0;
let form = document.getElementById("cuestionario");

function checkboxAnswer() {
    let fruitCount = 0;

    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].checked) {
            if (form.elements[i].value === "manzana") {
                fruitCount++;
            }

            if (form.elements[i].value === "fresa") {
                fruitCount++;
            }
        }
    }

    let fruit_score = 0;
    if (fruitCount === 1) {
        fruit_score = 0.5;
    } else if (fruitCount === 2) {
        fruit_score = 1;
    }

    general_score += fruit_score;
    document.getElementById("r1").innerHTML = `Has sacado una puntuación de ${fruit_score}`;
    finalScore(); // Actualiza la puntuación general sin mostrarla
}


function radioAnswer() {
    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].checked == true) {
            if (form.elements[i].value == "rojo") {
                var color_score = 1;
            }
            else {
                var color_score = 0;
            }
        }
    }
    general_score += color_score;           
    document.getElementById("r2").innerHTML = `Has sacado una puntuación de ${color_score}`;
    finalScore();
}

function selectAnswer() {
    let selectedOption = document.getElementById("diasSemana").value;
    let day_score = selectedOption === "jueves" ? 1 : 0;

    general_score += day_score;
    document.getElementById("r3").innerHTML = `Has sacado una puntuación de ${day_score}`;
    finalScore();
}


function finalScore() {
    document.getElementById("rf").innerHTML = `Has sacado una puntuación de ${general_score}`;
}

// Obtiene botones de comprobación de las preguntas
var btnCheckbox = document.querySelector('#cuestionario fieldset:nth-of-type(1) button');
var btnRadio = document.querySelector('#cuestionario fieldset:nth-of-type(2) button');
var btnSelect = document.querySelector('#cuestionario fieldset:nth-of-type(3) button');
var btnFinalScore = document.getElementById("general-score");

// Agrega un evento click al botón de comprobación de la pregunta 1
btnCheckbox.addEventListener('click', function() {
  checkboxAnswer();
});

btnRadio.addEventListener('click', function() {
    radioAnswer();
  });

btnSelect.addEventListener('click', function() {
  selectAnswer();
});

btnFinalScore.addEventListener('click', function() {
    finalScore();
  });