
const getTopStudents = (students, threshold ) => {
    let topStudents = students.filter(student => (
        student.grades.reduce((acc, curr) => 
            acc + curr)/student.grades.length >= threshold
    ))
    
    let sortedTop = topStudents.map(st => st.name);

    return sortedTop.sort();
}

const students = [
    { name: "Alice", age: 20, grades: [85, 60, 58] },
    { name: "Bob", age: 21, grades: [75, 80, 78] },
    { name: "Liong", age: 19, grades: [95, 62, 98] },
    { name: "Diana", age: 22, grades: [88, 85, 90] }
];

let higherMarks = getTopStudents(students, 80);
console.log(higherMarks);
