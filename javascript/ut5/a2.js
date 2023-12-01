let general_score = 0;
let form = document.getElementById("cuestionario");

function checkboxAnswer() {
    let fruit_score = 0;

    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].checked) {
            if (form.elements[i].name === "manzana") {
                fruit_score += 0.5;
            }
            if (form.elements[i].name === "fresa") {
                fruit_score += 0.5;
            }
        }
    }
    general_score += fruit_score;
    document.getElementById("r1").innerHTML = `Has sacado una puntuación de ${fruit_score}`;
}



function radioAnswer() {
    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].checked == true) {
            if (form.elements[i].name == rojo) {
                var color_score = 1;
            }
            else {
                var color_score = 0;
            }
        }
    }
    general_score += color_score           
    return document.write(`Has sacado una puntuación de ${color_score}`);
}

function selectAnswer() {
    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].value == "Jueves") {
            var day_score = 1;
        }
        else {
            var day_score = 0;
        }       
    }
    general_score += day_score           
    return document.write(`Has sacado una puntuación de ${day_score}`);
}