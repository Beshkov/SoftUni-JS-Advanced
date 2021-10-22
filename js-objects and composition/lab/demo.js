
const person = {
    firstName: 'Peter',
    lastName: 'Jhonson',
    fullName() {
        return this.firstName + ' ' + this.lastName
    }
}
// console.log(person.fullName())

const getFullName = person.fullName;
// console.log(getFullName())
const anotherPerson = {
    firstName: 'Bob',
    lastName: 'Smit'
};

// anotherPerson.fullName = getFullName;
// console.log(anotherPerson.fullName());

/**
 * Object Composition
 */

let student = {
    firstName: 'Maria',
    lastName: 'Gilardo',
    age: 22,
    location: { lat: 42.698, lng: 23.322 }
}

// console.log(student);
// console.log(student.location.lat);

// other way of doing it 
let cityName = "Sofia";
let population = 1325744;
let country = "Bulgaria";
let town = { cityName, population, country };
// console.log(town)
town.location = { lat: 42.698, lng: 23.322 } // Composition is a powerful technique for code reuse and it can be considered at times supereior to OOP inheritance
// console.log(town)

/**
 * Nested Destruction
 */
const department = {
    name: "Engineering",
    data: {
        director: {
            name: 'John',
            position: 'Engineering Director'
        },
        employees: [],
        company: 'Quick Build'
    }
};

// Basicaly it deconstruct the object and extract the data into a variable the object is till intact.
const { data: { director } } = department;
// console.log(director)
const { data } = department;
// console.log(data);
department.data.director.name = 'what the fuck'
// console.log(department);
// console.log(data);


const employees = [
    { name: 'John', position: 'worker' },
    { name: 'Jane', position: 'secretary' },
];
const [{ name }] = employees;
// console.log(name); return the 1st instance of the name 

const company = {
    employees: ['Jane', 'Jhon', 'Sam', 'Suzanne'],
    name: 'Quick Build',
};

const { employees: [empName] } = company;
// console.log(empName);


function print() {
    console.log(`${this.name} is printing a page`);
}

function scan() {
    console.log(`${this.name} is scanning a document`);
}

const printer = {
    name: 'ACME Printer',
    print
};

const scanner = {
    name: 'Initech Scanner',
    scan
};

const copier = {
    name: 'ComTron Copier',
    print,
    scan
}

// copier.scan()


/**
 * Factory Functions
 */

function createRect(width, height) {
    const rect = {width, height};

    rect.getArea = () => {
        return rect.width * height;
    };
    return rect;
}

const cube = new createRect(5, 5)
// console.log(cube.getArea())
const box = createRect(10, 10)
// console.log(box.getArea())

