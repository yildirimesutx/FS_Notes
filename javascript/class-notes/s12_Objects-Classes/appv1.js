const person = {
    name: "John",
    birthyearr:1977,
    location: {
        city:"New York",
    },
    get age(){
        return new Date().getFullYear()-this.birthyearr;
    },
    set age(value){
        this.birthyearr = new Date().getFullYear()- value;
    },
};
console.log(person.age);
console.log(person.birthyearr);//1977
person.age = 40;//bu şekilde kullanınca doğum tarihini değiştirmiş oluyoruz eğer çalıştırırsak koduımuz doğum tarihi 1982 oluyor
console.log(person.birthyearr);//1982

const hotel = {
    brand: 'Hotel Clarusway',
    categories: ['Spa', 'Swimming Pool', 'Resort'],
    options: ['just stay', 'free breakfast', 'all inclusive'],
    rooms: ['2-bed', '3-bed', '4-bed'],
    receptionHours: {
      mon: {
        open: 8,
        close: 22,
      },
      fri: {
        open: 9,
        close: 21,
      },
      sat: {
        open: 10,
        close: 20,
      },
    },
  
    reservation(arrival, departure, optionIndex = 0, roomIndex = 0){
      console.log(
        `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
      );
    },
    //burada function parametresi olarak object kullanıyoruz
    book: function ({ arrival, departure, optionIndex = 0, roomIndex = 0 }) {
      console.log(
        `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
      );
    },
};
//normalde hotel objectinin içindeki bir property i çağırıken şu şekilde kullanıyoruz;
console.log(hotel.brand);
// eğer biz objectin ismini kullnamadan ulaşmak istiyosak aşağıdaki şekilde kullanıyoruz:
//! destructuring
//=>Bir object'in içinde bir çok property olabilir. Object içerisinden tek tek çağırmak yerine, en çok ihtiyacımız olanları belirleyip onları ayrı bir değişkene atamış oluyoruz.
//syntax
const {brand,options}=hotel;//süslü parantez içine alacağımız propertyleri yazıyoruz sırası önemli değil
console.log(brand); 
console.log(options);
const {rooms:hotelrooms}=hotel;//kendi istedigimiz bir isimle variable atamasi yapmak istersek bu şekilde kullanılabilir
console.log(hotelrooms);//['2-bed', '3-bed', '4-bed']
const {receptionHours: {mon:Monday},}=hotel;
console.log(Monday);//{open: 8,close: 22,}


console.log('uzun yazım ->', hotel.receptionHours.fri.open);//uzun yazım -> 9

const openingFriday1 = hotel.receptionHours.fri.open;
const closingFriday1 = hotel.receptionHours.fri.close;
console.log(openingFriday1, closingFriday1);//9,21
//kısa yol
const {
  receptionHours: {
    fri: { open: openingFriday, close: closingFriday },
  },
} = hotel;

console.log(openingFriday, closingFriday);//9,21

hotel.reservation("11:00","23:00",0,0);//2-bed is booked with just stay between 11:00-23:00
//burada biz vs code sayesinde parametreleri görüyoruz ama normalde göremeyiz o yüzden okunabilirlik açısından bu yol kötü bir yol

hotel.book({
  roomIndex:0,
  departure:"22:30",
  optionIndex:1,
  arrival:"09:30",
});//2-bed is booked with free breakfast between 09:30-22:30
// bu yöntemde ise okunabilirlik daha iyi,sıraya da dikakt etmek gerekmiyor

//?array destructuring
const date = [1970,4,20];
//traditional way
const year = date[0];
const month = date[1];
const day = date[2];
console.log(year,month,day);//1970 4 20
//modern way
const [Year,Month,Day] =date;//sırası önemli
console.log(Day,Month,Year);//20 4 1970
//bazılarına erişim
const[year2,,day2] =date;//monthu almaadık ama varlığını bildiğimiz için yerini boş bıraktık ama sonda olsaydı boş bırakmamıza gerek yoktu yani eğer almadığımız aradaysa yerini boş bırakarak geçmek gerekiyor
console.log(year2);//1970
console.log(day2);//20

const nestedArray = [1,2,3,[4,5,6],7];
const [first,second,third,[forth,fifth],seventh]=nestedArray;
console.log(fifth);//5

console.log(nestedArray[3][1]);//5

const note = {
  id:1,
  title:"My first note",
  date:"24/04/1977",
};
for (let [key,value] of Object.entries(note)){
  console.log(key,"::=>",value);
};//output;
/* id ::=> 1
title ::=> My first note
date ::=> 24/04/1977 */

Object.entries(note).forEach(([key,value])=>{
  console.log(key,"::=>",value);
});//output;
/* id ::=> 1
title ::=> My first note
date ::=> 24/04/1977 */


//! default parameters
function greet(user){
  console.log(`Hello ${user}`);
}
greet("Matthew");//Hello Matthew
greet();//Hello undefined çıktısı veriyor çünkü default oalrak bir değer yok bu nedenle default değer veriyoruz
function greet1(user= "Guest"){
  console.log(`Hello ${user}`);
}
greet1();//Hello Guest
greet1("John");//Hello John


//! SPREAD Operator
//bu yöntemde adres aynı kalıyor ama referans değişiyor
/* let newHotel = hotel;

newHotel.brand = "Hotel California";
console.log(hotel.brand);//Hotel California 
bu şekilde yaparsak ikisininde özelliklerini değiştirmiş oluyor
*/
//bu nedenle aşağıdaki şekli kullanıyoruz
let newHotel = { ...hotel };//syntax bu şekilde
newHotel.brand = "Hotel California";
console.log(hotel.brand);//Hotel Clarusway
console.log(newHotel.brand);//Hotel California

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1,11,...arr2,7,8,9];
console.log(arr3);//[1, 2, 3, 11, 4, 5, 6, 7, 8, 9]
const arr4 = arr1;//bu şekilde yapınca bir değişiklik olduğunda hepsi ektileniyor
arr4.push(42);
console.log(arr4);
console.log(arr1);

const arr7 = [33];
arr7.push(arr1);//arr1 adresini atamış olduk arr1 e değişiklik yapınca arr7de etkilencek ve bu yöntemde arrayin içine array eklemiş olduk
console.log(arr7);//[33, Array(4)] istediğimiz bu değil
const arr8 = [33];
arr8.push(...arr1);//bölelikle arr1 in elemanlarını tek tek eklemiş oluyoruz
console.log(arr8);//[33, 1, 2, 3, 42]






const person4 = {
  firstName: "Barry",
  birthYear: "1977"
};
const newPerson = {
  ...person4,
  firstName: "John",
  city:"NY",
}
console.log(person4);//{firstName: 'Barry', birthYear: '1977'}
console.log(newPerson);//{firstName: 'John', birthYear: '1977', city: 'NY'}

const arrValue = ["My", "name","is","Jack"];
console.log(arrValue.join(" "));//My name is Jack

console.log(...arrValue);//My name is Jack
//console içinde yazdığımız için çevirdi
const text = {...arrValue};
console.log(text);//{0: 'My', 1: 'name', 2: 'is', 3: 'Jack'} burada çevirmedi

//!Spread ser demek al hepsını koy oraya rest geri kalanları al topla ser.böyle diyebilir miyim
//! rest operator
const { sat,...weekdays} = hotel.receptionHours;
console.log(sat);//{open: 10, close: 20}

console.log(weekdays);//{mon: {…}, fri: {…}}
//burada rest kullanmış olduk. sat ı aldık almadıklarımızı yani geri kalanları(rest) weekdayste toplamış olduk

function sum(n1,n2){
  return n1+n2;
}
console.log(sum(2,3));//5
console.log(sum(2,3,6,8));//5 ne kadar eklersek eklyelim aynı sonucu veriyor
//o yüzden bunu aşağıdaki şekilde kullanbiliriz
function sum0(){
  let total = 0;
  for(let i = 0;i<arguments.length;i++){
    total +=arguments[i];
  }
  return total;
};//arguments default olarak bulunuyor
console.log(sum0(1,2,35));//38

//
function sum1(...numbers){
  let total = 0;
  for(let i = 0;i<numbers.length;i++){
    total +=numbers[i];
  }
  return total;
}
console.log(sum1(2,3,5,6,8));//24

function sum2(...numbers){
  let total = 0;
 numbers.forEach(i => {
  total += i;
  });
  return total;
}

console.log(sum2(1,2,6,7,9));//25

function sum3(...numbers){
  let total = 0;
  numbers.forEach((i) => {
  if(typeof(i) != "string"){
    total += i;
  }
  });
  return total;
}
console.log(sum3(2,3,5,"Mesut",6,8));//24


//!NULLISH OPERATOR ??
//yeni bir özellik
//Yalnızca birincisi boş veya tanımsız olduğunda ikinci değeri döndürür. ilk işlenen ne tanımsız ne de boş değilse, boş birleştirme operatörü ikinci değeri değerlendirmez.
let temperature = 4;
console.log("Temperature is", temperature);//Temperature is 4
//burada sıkntı yok ama diyelimki dğer gelmedi
let temperature1;
const tempStatus = `Temperature is ${temperature1}`;
console.log(tempStatus);//Temperature is undefined
//ben bunu istemiyorum
const tempStatus1 = `Temperature is ${temperature1 ?? 'ERROR'}`;
console.log(tempStatus1);//Temperature is ERROR. nullish operator bu işe yaramış oldu

let temperature2 = 0;
let result = temperature2 != null && temperature2 != undefined ? temperature2: 'ERROR';
console.log(result);//0 buna ulaşmk için ne kadar uzun bir kod yazdık işte nullish bu gibi konularda bize kolaylık sağlıyor ve kodu kısaltabiliyoruz;

temperature1 = 0;
const tempStatus3 = `Temperature is ${temperature1 ?? 'ERROR'}`;
console.log(tempStatus3);//Temperature is 0

temperature1 = "";
const tempStatus4 = `Temperature is ${temperature1 ?? 'ERROR'}`;
console.log(tempStatus4);//Temperature is 
