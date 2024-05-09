function repeatString(insertString, readBack) {
    var result = "";
    for (var i = 0; i < readBack; i++) {
        result += insertString;
    }
    return result;
}
var insertString = "Hello!";
var readBack = 3;
var result = repeatString(insertString, readBack);
console.log(result);
