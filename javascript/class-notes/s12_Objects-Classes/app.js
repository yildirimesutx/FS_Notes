// const person = {
//     firstName : 'Barry',
//     lastName : 'Mitchell',
//     birthYear : 1977,
//     skills : ['JS', 'AWS', 'Docker', 'Python'],
//     employed : true,
// };

// console.log(person);

// console.log(person.firstName)
// console.log(person['birthYear']);

// console.log(person.midName);
// console.log(person['2022']);

// let year = 2022;
// console.log(person.year);
// console.log(person[year]);

// let tag = 'Year';

// console.log(person['birth' + tag])

// person.birthYear = 1979;

// person.midName = 'Adam';

// person.firstName = 'Mesut';

// console.log(person);

// const comments = [
//     {userName: 'Mark', comment: 'very good', likes:99}
//     {userName:'John', comment: 'bla bla', likes:2},
// ]

// for (const key of Object.keys(person)) {
//     console.log(key)
// }

// for (const key of Object.values(person)) {
//     console.log(key)
// }

// for (const [key, value] of Object.entries(person)) {
//     console.log(`${key} :-->: ${value}`);
    
// }

// * Methods

// const person = {
//     firstName : 'Barry',
//     lastName : 'Mitchell',
//     birthYear : 1977,
//     skills : ['JS', 'AWS', 'Docker', 'Python'],
//     employed : true,

// //    calcAgeBad : function(bYear){
// //        return 2022-bYear;
// //    },

// //    calcAge(){
// //        return 2022 - this.birthYear;
// //    },


//     calcAge() {
//     this.age = 2022 - this.birthYear;
//     return this.age;
// },

// };

// // 
// console.log(person.calcAge()) 
// console.log(person.age)

//  ! THİS examples {} https://www.javascripttutorial.net/javascript-this/


// const calcAge = function (birthYear) {
//     console.log('Regular Function in Global Scope');
//     console.log(this);
//     console.log(2022 - birthYear);

// };

// calcAge(1977)

// const calcAgeArrow = (birthYear) =>{
//     console.log('Arrow Function in Global Scope');
//     console.log(this);
//     console.log(2022 - birthYear);

// };
// calcAgeArrow(1980)

// const teacher = {
//     birthYear: 1985,
//     calcAge() {
//       console.log('Regular Function in Object');
//       console.log(this);
//       console.log(2022 - this.birthYear);
//     },
//     calcAgeArrow: () => {
//         console.log('Arrow Function in Object');
//         console.log(this);
//         console.log(2022 - this.birthYear);
//       },

//       calcAgeDelayed() {
//         setTimeout(function () {
//           console.log('Regular Function in setTimeout');
//           console.log(this)
//           this.calcAge();
//         }, 2000);
//       },

//       calcAgeDelayedArrow: function () {
//         setTimeout(() => {
//           console.log('Arrow Function in setTimeout');
//           console.log(this);
//           this.calcAge();
//         }, 2000);
//       },
// }

// teacher.calcAge();
// teacher.calcAgeArrow();
// teacher. calcAgeDelayed();
// teacher.calcAgeDelayedArrow();


// const student = {
//     birthYear:1995,
// };

// student.calcAge = teacher.calcAge;

// student.calcAge();

// const myFunc = teacher.calcAge;

// myFunc();

let anObject = {
    firstName: 'John',
    age:30,
    isMarried:false,
    introduce:()=>{
        return `${this.firstName} is ${this.age} years old.`;
    },
    
    introduce2:function () {
        return `${this.firstName} is ${this.age} years old.`;
    },
    
}

console.log(anObject.introduce());
console.log(anObject.introduce2());
