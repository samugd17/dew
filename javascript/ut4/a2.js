function sortedArray(num_elements=20, min_value=20, max_value=100) {
    let myArray = [];
    for (i=0; i<num_elements; i++) {
        min = Math.ceil(min_value);
        max = Math.floor(max_value);
        randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        myArray.push(randomNumber);
    }
    myArray.sort()
    return myArray  
}