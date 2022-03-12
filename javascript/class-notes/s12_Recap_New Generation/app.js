// const myArr = Array.from('hello');
// console.log(myArr);

// const firstName = 'Barry';

// const arr = firstName.split('');
// console.log(arr);

// const person = {
//     name:'John',
//     birthYear: 1977,
//     location :{
//         city :'New York'
//     },
//     get age() {
//         return new Date().getFullYear()-this.birthYear;
//     },
//     set age(value){
//         this.birthYear=new Date().getFullYear-value;
//     }
// }

// console.log(person.age);

// person.age= 40;
// console.log(person.birthYear)



// const h1 = document.querySelector('h1');
// console.dir(h1)





// const hotel = {
//     brand: 'Hotel Clarusway',
//     categories: ['Spa', 'Swimming Pool', 'Resort'],
//     options: ['just stay', 'free breakfast', 'all inclusive'],
//     rooms: ['2-bed', '3-bed', '4-bed'],
//     receptionHours: {
//       mon: {
//         open: 8,
//         close: 22,
//       },
//       fri: {
//         open: 9,
//         close: 21,
//       },
//       sat: {
//         open: 10,
//         close: 20,
//       },
//     },
  
//     // book: function (obj) {
//     // console.log(obj)
//     book: function ({ arrival, departure, optionIndex = 0, roomIndex = 0 }) {
//       console.log(
//         `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
//       );
//     },
//   };


//   destructuring 

// console.log(hotel.brand);

/* const {brand, options} = hotel;
console.log(brand)

const {brand: hotelName, rooms} = hotel;

console.log('hotel name is', hotelName)

const { mon } = hotel.receptionHours;
// console.log(mon);

const { receptionHours: {mon: Monday}} = hotel
console.log(mon);


const { fri: {open:openingFriday, close:closingFriday}} = hotel.receptionHours

console.log(openingFriday, closingFriday)
 */

// reservation(arrival, departure, optionIndex = 0, roomIndex = 0){
//     console.log(
//       `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
//     );
//   },

//   hotel.reservation('11:00', '23:00', 0, 0);
//   hotel.book({
//       romIndex:0,
//       departure :'22:30',
//       optionIndex:1,
//       arrival:'09:00'
//   })

//   https://github.com/airbnb/javascript

// Array destructuring

// const date = [1970, 4, 20];

// const year =date[0];
// const month = date[1];
// const day = date[2];

// const [Year, Month, Day] = date;

// console.log(Day, Month, Year);

// const [year2, , day2]= date;
// console.log('year2:>>', year2)

// const nestedArray = [1,2,3,[4,5,6],7]

// const [first,second, third, [forth, fifth], seventh] =nestedArray
// console.log('fifth:>>', fifth);

// const note = {
//     id:1,
//     title:'My first note',
//     date:'25/04/1977',
// }

// for (let [key, value] of Object.entries(note)) {
//    console.log(key, value);
// }

// Object.entries(note).forEach(([key,value]) => {
//     console.log(key, value)
// })

// default parameters

// function greet(user = 'Guest'){
//     console.log(`Hello ${user}`);
// }

// greet('Matthew');
// greet();

//  spread operatör

// const hotel = {
//     brand: 'Hotel Clarusway',
//     categories: ['Spa', 'Swimming Pool', 'Resort'],
//     options: ['just stay', 'free breakfast', 'all inclusive'],
//     rooms: ['2-bed', '3-bed', '4-bed'],
//     receptionHours: {
//       mon: {
//         open: 8,
//         close: 22,
//       },
//       fri: {
//         open: 9,
//         close: 21,
//       },
//       sat: {
//         open: 10,
//         close: 20,
//       },
//     },
  
    // book: function (obj) {
    // console.log(obj)
//     book: function ({ arrival, departure, optionIndex = 0, roomIndex = 0 }) {
//       console.log(
//         `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
//       );
//     },
//   };

// let newHotel = { ...hotel };
// newHotel.brand = 'Hotel California'

// console.log(hotel.brand)
// console.log(newhHotel.brand, newHotel.brand)

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [ ...arr1, 11, ...arr2, 7,8,9]
console.log('arr3 :>>', arr3)

const arr7 = [33];
arr7.push(...arr1);
console.log(arr7)

const arr4 = arr1;
arr4.push(42);

console.log('arr4 :>>', arr4 )
console.log('arr1 :>>', arr1 )


const person = {
    firstName:'Barry',
    birthYear : 1977,
};

const newPerson = {
    ...person,
    firstName:'John',
    city :'NY',
};

console.log('person', person);
console.log('newPerson', newPerson);

// rest operatör

// function sum(n1, n2){
//     return n1 + n2;
// }

// console.log(sum(2,3,6,7,11));


// function sum(...numbers){
//     return n1 + n2;
// }

// console.log(sum(2,3,6,7,11));

function sum(...numbers){
    let total = 0;
   numbers.forEach(i => {
    total += i;
    });
    return total;
}

console.log(sum(1,2,6,7,9));

function sum(...numbers){
    let total = 0;
   numbers.forEach(i => {
    total = !isNaN(i) ?total + i : total;
    });
    return total
}

console.log(sum(1,2,6, "Mesut",7,9));



// nullish operatör

let temperature = 0 ;

let result = temperature || 'ERROR'

// const temStatus = `Temperature is ${temperature} ?? ERROR`

// console.log(temStatus)
