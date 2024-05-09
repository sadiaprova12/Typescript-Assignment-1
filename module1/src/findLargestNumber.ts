
function findLargestNumber(numbers: string | any[]) {
    var largestNumber = numbers[0];

    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }
    return largestNumber;
}

var numbers = [10, 5, 8, 20, 3];

var largestNumber = findLargestNumber(numbers);

console.log(largestNumber); 
