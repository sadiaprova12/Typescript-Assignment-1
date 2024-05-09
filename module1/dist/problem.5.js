function calculateAverageGrade(students) {
    var totalGrade = students.grades.reduce(function (total, grade) {
        return total + grade;
    }, 0);
    var averageGrade = totalGrade / students.grades.length;
    return averageGrade;
}
var student1 = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90]
};
var averageGradeForBob = calculateAverageGrade(student1);
console.log(averageGradeForBob);
