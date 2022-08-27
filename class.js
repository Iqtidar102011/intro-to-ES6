// class -- syntactic sugar
// class name : start with xapital letter,
// class: template for making objects

// declaring a class : class Classname{

// };
class Instructor {
    name;
    designation = 'instructor'
    team = 'web team'
    location;
    // assigning new values to the property/key
    // * use constructor keyword
    // constructor(property name to be assigned as parameters){

    // }

    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)

    }
    releaseModule(time) {
        console.log(`please relase module at ${time}`)

    }


}

// creating objects from class 
// give a name
// write new keyword 
// call as a function

const x = new Instructor('jhankar', 'Dhaka');
console.log(x);

// using the methods(functions)inside class

x.createQuiz(60);
x.releaseModule('10 pm');