function randomArray(num_elements=10, min_value=100, max_value=200) {
    let myArray = [];
    for (i=0; i<num_elements; i++) {
        min, max = Math.ceil(min_value), Math.floor(max_value);;
        randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        myArray.push(randomNumber);
    }
    return myArray  
}

function randomArray2(num_elements=20, min_value=-100, max_value=100) {
    let myArray = [];
    for (i=0; i<num_elements; i++) {
        min, max = Math.ceil(min_value), Math.floor(max_value);;
        randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        myArray.push(randomNumber);
    }
    return myArray  
}