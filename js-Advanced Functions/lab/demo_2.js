// function greet() {
//     console.log(this.name);
// }

// let person = { name: 'Alex' };
// let person2 = { name: 'Henry'}
// greet.call(person)


// const sharePersonalInfo = function (...activities) {
//     let info = `Hello, my name is ${this.name} and` +
//     + `I'm a ${ this.profession }.\n`;
//     info += activities.reduce((acc, curr) =>{
//         let el = `--- ${curr}\n`;
//         return acc + el;
//     }, "My hobbies are:\n").trim();
//     return info;
// }
// const firstPerson = { name: "Peter", professionP: "Fisherman" };
// console.log(sharePersonalInfo.call(firstPerson, 'biking', 'swimming', 'football'));

// const obj = {
//     name: 'Peter',
//     outher() {
//         console.log(this);
//         const inner = () => console.log(this); 
//         inner()
//     }
// }
// obj.outher();


// const firstPerson = {
//     name: "Peter",
//     prof: "Fisherman",
//     shareInfo: function () {
//         console.log(`${this.name} works as ${this.prof}`);
//     }
// };

// const secondPerson = { name: "George", prof: "Manager" };

// firstPerson.shareInfo.apply(secondPerson)

const x = 42; 
const getX = function () {
    return this.x;
}

const modulez = { x, getX };
const unboundGetX = modulez.getX;
console.log(unboundGetX());
const boundGetX = unboundGetX.bind(modulez);
console.log(boundGetX());

