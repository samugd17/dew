function randomArray(num_elements=10, min_value=100, max_value=200) {
    let myArray = [];
    for (i=0; i<num_elements; i++) {
        min = Math.ceil(min_value);
        max = Math.floor(max_value);
        randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        myArray.push(randomNumber);
    }
    return myArray  
}