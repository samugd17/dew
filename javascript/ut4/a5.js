function toSquareRoot(arr) {
    newArray = [];
    arr.forEach(element => {
    newArray.push(Math.sqrt(element))
    });

    return newArray
}