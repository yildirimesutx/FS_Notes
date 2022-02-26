console.log('» index.js is running');

// const person = {
//   firstName: 'Barry',
//   lastName: 'Mitchell',
//   birthYear: 1977,
//   skills: ['JS', 'AWS', 'Docker', 'Python'],
//   employed: true,
// };

// console.log(person);
console.log(person.firstName);
// console.log(person['birthYear']);

// console.log(person.midName);
// console.log(person['2022']);

// let year = 2022;
// console.log(person[year]);
// console.log(person.year);
/* 
let tag = 'Year';
console.log(person['birth' + tag]);
person.birthYear = 1979;
person.firstNmae = 'Adam';
console.log(person);
const comments = [
  {userName: 'Mark', comment: 'very good', likes: 99},
  {userName: 'John', comment: 'bla bla bla', likes: 2},
] */

// for (const key of Object.keys(person)) {
//   //Object.values()
//   console.log(key);
// }

// for (const [key, value] of Object.entries(person)) {
//   console.log(`${key} :->: ${value}`);
// }

// Methods

const person = {
    firstName: 'Barry',
    lastName: 'Mitchell',
    birthYear: 1977,
    skills: ['JS', 'AWS', 'Docker', 'Python'],
    employed: true,
    calcAgeBad : function(bYear) {
       return 2022-bYear;
    },
    calcAgeBad(){
        this.age = 2022 -this.birthYear;
        return 
    }
  };

  console.log(person.calcAgeBad())