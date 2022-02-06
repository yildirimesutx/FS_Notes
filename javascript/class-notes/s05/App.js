// console.log('hello')

// sayHi();


// function sayHi(){
//     console.log('Hello');
// }

// function sayHi2(name){
//     return name
//     console.log(object);
// }

// console.log(sayHi2('Matthew'));

// console.log(typeof sayHi2());


// console.log(typeof sayHi());

// let userName = 'Münir'

// function sayHi(name = 'New User'){
//     console.log(`Hello ${name}`);
// }
// sayHi();
// sayHi(userName);
// sayHi('Mark')

// console.log(add100(23, 12));

// function add100(num1, num2 = 0){
//     return num1+num2
// }

// console.log(square(4));

// let square = function(a){return a*a};

// console.log(square(3));


// let adder = new Function ('a','b', 'return a+b');

// console.log(adder(2,6));

// console.log(typeof adder);


// let sum = function(a,b){ return a+b;};

// let addTwo = function (num1){
//     return sum(+num1,2)
// }

// console.log(addTwo(5));
// console.log(addTwo('4'));

/* //shortcut tanımlama
function sayHello(name = 'New User'){
    
    name && console.log(`Hello ${name}`);
    // 1 && 3 =>3
}

sayHello('mark')
sayHello()
 */

//Fonksiyon kendi verilen değeri değiştirmeyecek


/* function square(num1){
    num1 *= num1
    // myNum = num1 * num1; //globali bozar istenmeyen durum
    // return myNum;
    return num1;
}

let myNum = 4;

console.log(square(myNum));
console.log(myNum); */


let student = {};

student.name = 'Mesut'

function sayHi3(student){
    console.log(`Hello! ${student.name} from entry point`);
    student.name = 'Zeynep';
    student.lastname = 'özgür';
    console.log(`Hello! ${student.name} inside function`);
    student = {name : "Leon"};
    console.log(`Hello! ${student.name} inside function`);
}

sayHi3(student)
console.log(`Hello! ${student.name} from outside`); 
console.log(`Hello! ${student.lastname} from outside`); 
