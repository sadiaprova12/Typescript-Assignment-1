function isRecentBook(book: { title?: string; author?: string; publishedYear: any; }) {
    var currentYear = new Date().getFullYear();
    var yearsDifference = currentYear - book.publishedYear;
    return yearsDifference <= 5;
}

var book1 = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022
};

var isRecent = isRecentBook(book1);
console.log(isRecent);
