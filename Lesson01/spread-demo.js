//
var oldArray = [ 19, 11, 12]
var newArray = [ 1, 2, ...oldArray, 3, 4, 5]
console.log(oldArray); // [19, 11, 12]
console.log(newArray) ;// [1, 2, 19, 11, 12, 3, 4, 5]
