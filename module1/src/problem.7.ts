function logString(parameter: string | number) {
    if (typeof parameter === 'string') {
        console.log(parameter);
    } else {
        console.error("Error: Input is not a string.");
    }
}

       logString("Hello, TypeScript!");
       logString(42);
