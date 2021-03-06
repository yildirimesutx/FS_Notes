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

// let anObject = {
//     firstName: 'John',
//     age:30,
//     isMarried:false,
//     introduce:()=>{
//         return `${this.firstName} is ${this.age} years old.`;
//     },
    
//     introduce2:function () {
//         return `${this.firstName} is ${this.age} years old.`;
//     },
    
// }

// console.log(anObject.introduce());
// console.log(anObject.introduce2());


// ! CLASS STRUCTURE

// class Pet {
//     constructor(name, age){
//         this.name = name;
//         this.age;
//     }

//     walk() {
//         console.log('Im walking');
//     }
//     speak() {
//         return 'I like humans';
//     }
// }


// class Cat extends Pet {
//     #weight = 55; //gizli tanımlama
//     constructor(name, age, color) {
//         super(name, age) ;
//         this.color= color;
//     }

//     speak() {
//         let prevMsg = super.speak();
//         prevMsg +=' and I like to meow'
//         // return prevMsg;
//         return this.#weight; //class içinde gizli özelliği veriyor
//     }

// }

// const muezza = new Cat('Müezza', 2, 'grey')
// console.log(muezza);
// muezza.walk();
// console.log(muezza.speak());

// console.log(muezza.weight); // burada verilen ifadesyi tanımsı zyapıyor

// console.dir(Pet)
// const myPet = new Pet('Ruby', 3)
// myPet.walk()
// console.log(myPet); 

//  ! prototypes

function Pet(name, age){
    this.name = name;
    this.age= age;
}  
Pet.prototype.walk = function (){
        console.log('Im walking');
}

Pet.prototype.speak= function() {
    return 'I like humans';
}

const myPet2 = new Pet('Karabas', 4);

console.log(myPet2)


function Cat(name, age, color) {
    this.name =name;
    this.age =age;
    this.color = color;
}

Cat.prototype=Object.create(Pet.prototype)
const pisi = new Cat('Pisi', 1, 'yellow')
console.log(pisi)
pisi.walk();

// const arr = [1,2,3];

// console.log(arr.__proto__)

