
/* let student = 'Mustafa';

function sayHi(studentName){
    console.log(`Welcome ${studentName}`);
}

sayHi(student) */

// let students = ['John', 'Jane', 'Joe'];
// sayHi(students)

/* function sayHi(studentName){
    console.log(`Welcome ${studentName}`);
}

for (let i = 0; i < students.length; i++) {
    sayHi(students[i])
    
}
 */

/* function sayHi(student){
    for (let i = 0; i < student.length; i++) {
        console.log(`Welcome ${student[i]}`)
    }
}

sayHi(students) */


/* function sum (){
    let add = 0;
    console.log(arguments);
    console.log(arguments.length);
    for (let i =0; i < arguments.length; i++){
        add += arguments[i]
    }
    return add;
} */

// console.log(sum(1));
// console.log(sum(1,2,3,4,5,6));
// console.log(sum(100,520));

/*  function sum1(a, ...others) {
    console.log(arguments);
    console.log(others);
    let sum =0;
    for (let i=0; i < arguments.length; i++){
    sum += arguments[i]
    }
    return sum * a;
    }

console.log(sum1(5,2,3,4,5,6)); */

/*     const bill = function(tax, ...list){
        console.log(list);
        let total = 0;
        for(let i =0; i < list.length; i++){
            total += list[i]+list[i]*tax;
        }
        return total;
    }

    console.log(bill(0.10, 10,10,20,10)) */
/* 
     function bolme (num1,num2){
        if(num2 === 0) return "Zero Division Error"
        return num1 / num2
    
    }

    // console.log(bolme(12,2));
    // console.log(bolme(12,3)); 
 */

/*     function div2(num1, num2){
        return num2 ? num1 / num2 : 'Zero division Error!'
    }

    console.log(div2(10,3)); */

/*     function pascalNumber1(n){
        let sum = 0;
        for(let i = 1; i < n+1; i++){
        sum +=i
        }
        return sum
        }
    
    console.log(pascalNumber1(5)); */

/*     function pascalNumber2(n){
        return (n* (n+1)/2)
        }
    console.log(pascalNumber2(100)); */

 /*   // recursive fonskdiyon
    function pascalNumber3 (n){ 
        if(n === 1) return 1; // Çıkış yolunu belirtmek şart
        return n + pascalNumber3(n-1) // 2 + 1
    }

    console.log(pascalNumber3(3)); */

    //geleneksel fonksiyon

    // function add100 (a){
    //     return a + 100;
    // }
    
    // // function expresion
    // let toplam = function (a){return a + 100}

    //Arrow function breakdown

   /*  let ahmet = (a) => {
        return a +100
    } */
    // console.log(ahmet(10));

/* let mehmet = (a) => a + 100;
console.log(mehmet(20)); */

/* let toplam = a => a + 100;
console.log(toplam(30)); */

/* let user = 'Murat';

let sayHi = () => console.log(`Welcome ${user}`);

sayHi() */

/* let toplam2 = (num1, num2) => num1 + num2;

console.log(typeof toplam2()); */


//iife


/* let iife = (function trian(num) {
    if (num === 1) return 1;
    return num + trian(num-1);
})(3);

console.log(iife(5)); */
// with anonymous function expression non recursive

/* let nums = 5
let iife2 =(function(num) {
    return num*(num +1)/2;
})(nums);

console.log(iife2);
 */


