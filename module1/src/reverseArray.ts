function reverseArray(array: string | any[]) {
    var reversedArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}
     // Sample 1:
    var insertArray = ["apple", "banana", "cherry"];
    var outputArray = reverseArray(insertArray);
       console.log(outputArray);
     //sample 2:
     var insertArray1 = [10, 20, 30];
     var outputArray1 = reverseArray(insertArray1);
        console.log(outputArray1); 
