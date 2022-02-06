
// var cars = ["Opel", "Audi", "BMW"];

// // console.log(cars);

// var cars2 = Array.of("Opel", "Audi", "BMW")

// // console.log(cars2);

// var cars3 = new Array("Opel", "Audi", "BMW")

// console.log(cars3);

// var num1 = new Array(2,10)
// // console.log(num1);
// var num2 = new Array(10)
// console.log(num2);

/* var cars = ["Opel", "Audi",[1,2,true] ,"BMW"]

console.log(
    cars[0]
);

console.log(cars[2][2]); */

/* const cars = ["Opel", "Audi",[1,2,true] ,"BMW"]

cars[4] = 'Porsche'
console.log(cars);
//cars = []

console.log(cars);

// cars[cars.length] = 'Ferrari'
cars[10] = 'Ferrari'

console.log(cars[8]); */

// const cars = ["Opel", ,"Audi" ,,,,"BMW"]

// console.log(cars);


// const cars = ["Opel", "Audi", "BMW"];
// // const cars = 2

// console.log(typeof cars);
// console.log(cars instanceof Array);
// console.log(Array.isArray(cars));

//length
/* const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";

console.log(fruits)
console.log(fruits.length)
 */

//concat
/* const fruits = ["Banana", "Orange","Lemon"];
const vegetables = ['Broccoli','Celery','Parsley','Artichoke']

// console.log(fruits.concat(vegetables));
// console.log(fruits.concat('Fig',3,'Pear'));

console.log(''+fruits);
console.log(fruits.toString()); */

//sort

// const daltones = ['Joe','Jack','William','Avarel']

// console.log(daltones.sort());

// const num = [40, 100, 1, 5, 25, 10];

// console.log(num.sort()); //string olarak sıralar

// console.log(num.sort((a,b) => a - b));

// console.log(num.sort((a,b) => b - a));

// console.log(daltones.reverse()); //orjinali değiştirir

// console.log(daltones);


//push pop

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.push("Pears"));
// fruits.push("Pears");
// console.log(fruits);
// fruits.push("Pears" , "pineapple",2);
// console.log(fruits);



// console.log(fruits.pop());
// console.log(fruits.pop());
// console.log(fruits.pop());

// console.log(fruits);




//shift unshift

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const deleted = fruits.shift()
// console.log(deleted);
// console.log(fruits);

// const uns = fruits.unshift('Pears','fig',2,[1,2,'a'])
// console.log(uns);
// console.log(fruits);

//splice 

// var names = ["John", "Edward", "Victor"]
// var deleted = names.splice (1,2, "Mark", "James" , 'Onur')
// console.log({deleted});
// console.log(names);


//slice

// const months = ['Jan', 'March', 'April', 'June',"july"];

// const springs = months.slice(1,3)
// const springs1 = months.slice(-4,-2)
// const springs2 = months.slice(1,-2)
// const springs3 = months.slice(2,-7)

// console.log(springs);
// console.log(springs1);
// console.log(springs2);
// console.log(months);
// console.log(springs3);


//indexof lastindexof
// const colors = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];
// const x = colors.indexOf("Green", 3)
// console.log(x)



// const colors = ["Red", "Yellow", "Green", "Blue", "Green","Red","Yellow","Blue"];
// const last = colors.lastIndexOf("Blue", 6)
// console.log(last)

//splice 

var names = ["John", "Edward", "Victor"]
var deleted = names.splice (1,0, "Mark", "James" , 'Onur')
console.log({deleted});
console.log(names);