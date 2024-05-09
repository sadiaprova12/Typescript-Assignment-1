
function repeatString(insertString: string, readBack: number): string {
    let result = "";

    for (let i = 0; i < readBack; i++) {
        result += insertString;
    }
    return result;
}

const insertString = "Hello!";
const readBack = 3;

const result = repeatString(insertString, readBack);

console.log(result);
