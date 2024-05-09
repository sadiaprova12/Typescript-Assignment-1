
function filterEvenNumbers(numbers: string | any[]) {

    var evenNumbers = [];

    for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i];
        
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}
var numbers = [1, 2, 3, 4, 5, 6];

var evenNumbers = filterEvenNumbers(numbers);

console.log(evenNumbers);
