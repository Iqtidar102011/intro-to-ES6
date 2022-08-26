const student = {
    name: 'x ',
    age: 15,
    class: 'ten',
    marks: {
        math: 50,
        physics: 80,
        chemistry: 70
    }

}

// by dot notation
const math = student.marks.math;
console.log(math);

// by bracket
const physics = student['marks']['physics'];
console.log(physics);


// third way

const subject = 'chemistry';
const chemistry = student.marks[subject];
console.log(chemistry);