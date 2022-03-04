const students = ['Bedirhan', 'Tuncay', 'Mesut', 'Enes', 'Onur']

// 1. method  
const print = (name) =>{
    console.log(name);
}
students.forEach(print);

// 2.method anynmous
students.forEach((i) => console.log(i));


// Example

const payments =[100, 300, -200, 500,-400, 225,1000, -700];

let sum = 0
payments.forEach((p)=> (sum +=p));

console.log("SUM", sum);

const sumofPayments = payments.forEach((p)=>(sum += p))
console.log(sumofPayments) // yukarıdaki payments array funclar return olmuyor, return edilmediği için undefined çıkar

// Example

payments.forEach( (p,i)=>{
    p> 0 ? console.log(i, `You deposit ${p}`) : console.log(i,`you withdraw ${p}`)

})


// MAP 

const numbers = [1,2,3,4,5]

const doubled = numbers.map((n)=>n*2)

console.log(doubled, numbers)

//* if a grade is less than 50, increase it by 20% oherwise
//* increase it by 10% and store all value in the grades array.
//*-------------------------------------------------------
let grades = [30, 50, 77, 38, 44, 80];

grades = grades.map((grade)=> grade>50 ? grade*1.1 :grade*1.2)

console.log(grades)

// grades = grades.map((grade) => {
//  return grade > 50 ? grade * 1.1 : grade * 1.2;
// });

// console.log(grades);

// const gradesInfo = grades.map((grade, index) => {
//    const newGrade = (grade > 50 ? grade * 1.1 : grade * 1.2).toFixed(2);
//    return `${index+1}.student's grade: ${newGrade}`
//     });

//     console.log(gradesInfo)


 //* Test the each item of the words array whether palindromic or not.
//* Return the result as an array which consists of true or
//* false values for each item
//*-------------------------------------------------------

const words = ["mum", "kek", "gel", "ısı", "iyi"]; 

// const checkPalindrome = words.map((word)=> [...word].reverse().join("")===word)

// console.log(checkPalindrome)


//  FILTER

// const checkPalindrome = words.filter((word)=> [...word].reverse().join("")===word)

// console.log(checkPalindrome)

// toUpperCase


const checkPalindrome = words.filter((word)=> [...word].reverse().join("")===word).map((word)=>word.toUpperCase())

console.log(checkPalindrome)

// *-----------------------------------------------------
// *                      REDUCE
// *-----------------------------------------------------

//* calculate the sum of all elements of array
//* and print result into console
//*-------------------------------------------------------
const salaries = [10000, 15000, 32000, 43000, 20000];

const avgSalaries = salaries.reduce((acc,salary)=>acc+salary,0)/ salaries.length;
console.log(avgSalaries)

const graeterThan20000 = salaries.filter((s)=>s>20000).reduce((x,y)=>x+y,0)
console.log(graeterThan20000)




let personels = [
    {
      id: 1,
      name: "Ali",
      surname: "Yılmaz",
      job: "developer",
      age: 30,
      salary: 5000,
    },
    {
      id: 2,
      name: "Ayşe",
      surname: "Yılmaz",
      job: "tester",
      age: 35,
      salary: 3000,
    },
    {
      id: 3,
      name: "Mehmet",
      surname: "Öztürk",
      job: "team lead",
      age: 40,
      salary: 7000,
    },
    {
      id: 4,
      name: "Fatma",
      surname: "Ayaz",
      job: "developer",
      age: 26,
      salary: 4500,
    },
  
    {
      id: 5,
      name: "Can",
      surname: "Deniz",
      job: "tester",
      age: 24,
      salary: 3500,
    },
  ];

  console.log(personels)

  personels.forEach((p)=>console.log(p.job))


  const ages = personels.map((p)=> p.age+1)
  console.log(ages)

  const newPersonels = personels.map((p)=>{
      return {
          name:p.name.toLocaleUpperCase()+" "+ p.surname.toLocaleUpperCase(),
          age:p.age+5,
      };
  });
console.log(newPersonels)



//* EXAMPLE4: List the person's names whose age is under 33.

//* EXAMPLE5: Store the names and ages of the developers as a new Object.

//* EXAMPLE6: calculate avg age of  people.

//*EXAMPLE7: Increase the salaries of developers by 20% and
//* calculate sum of increased salary of devs.

//*EXAMPLE8: Increase the salaries of developers by 20% and
//* update the personels object.

//*EXAMPLE9: Delete personel whose id is equals to 4;
//* Exmple: deleteById(4)