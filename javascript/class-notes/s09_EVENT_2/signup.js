// DOM recap, DOM traversing

// let navbarPathItemText = document.getElementsByClassName("nav__item")[0].innerText;

// console.log(navbarPathItemText);


// let navbarPathItemText3 = document.getElementsByClassName("nav__links")[0].children[0].innerText;

// console.log(navbarPathItemText3);

// let navbarPathItemText4 = document.getElementsByClassName("nav__links")[0].firstElementChild.innerText;

// console.log(navbarPathItemText4);

// let navbarPathsLi = document.querySelector(".nav__item");

// console.log(navbarPathsLi);

// let navbarInstructorsLi = document.getElementsByClassName("nav__item")[0];

// console.log(navbarInstructorsLi);

// let navbarInstructorsLi = document.querySelectorAll(".nav__item")[0].innerText;

// console.log(navbarInstructorsLi);

// let navbarSignUpLi = document.querySelector(".nav__links").lastElementChild;

// console.log(navbarSignUpLi.innerText);
//___________EVENT_________________

// DOM objelerine Event tanımlamak için 4 adet yöntem mevcuttur

//  1. window.addEventListener("event", "func()")





// window.addEventListener("load", ()=>{
//     console.log("window loaded");
// });

// //2. window.onload = func()
// window.onload = () => {
//     console.log("window onload")
// }



// navbarPathsLi.addEventListener("click", ()=>{
//     alert(navbarPathsLi.innerText + "cliked");
// });


// 3. ve 4. yöntemler ödev


let navbarInstructorsLi = document.getElementsByClassName("nav__item")[1];

console.log(navbarInstructorsLi);

navbarInstructorsLi.addEventListener("mouseover", ()=>{
    navbarInstructorsLi.innerText = "Over Me!";
    navbarInstructorsLi.style.color = "green" ;
    navbarInstructorsLi.style.fontSize = "1.7rem"
});

navbarInstructorsLi.addEventListener("mouseout", ()=>{
    navbarInstructorsLi.innerText = "Instructor";
    navbarInstructorsLi.style.color = "#444444";
    navbarInstructorsLi.style.fontSize = "1.7rem"

})

let navbarStudentsLi = document.querySelectorAll(".nav__item")[2];
console.log(navbarStudentsLi);



// // // 🔥🔥🔥🔥🔥  rgb random color(rgb(255,255,255) onclick of Students Navbar (CODE CHALLENGE)  🔥🔥🔥🔥🔥

const randomNumber = () => Math.round(Math.random()*255);

// console.log(randomNumber())
 

const randomColor = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

// console.log(randomColor());


// li

navbarStudentsLi.addEventListener("click", (event)=>{
     //stop bubbling en içe atandığında üst parentları etkilemez
    event.stopPropagation();
    navbarStudentsLi.style.backgroundColor = randomColor();
});

//ul 

navbarStudentsLi.parentElement.addEventListener("click", (event)=>{
    event.stopPropagation();
    navbarStudentsLi.parentElement.style.backgroundColor = randomColor();
});

//header 

navbarStudentsLi.parentElement.parentElement.addEventListener("click", (event)=>{
    event.stopPropagation();
    navbarStudentsLi.parentElement.parentElement.style.backgroundColor = randomColor();
});


function deneme(color){
    if (color !== "blue" || color !== "green") {
        color = "red"
    }
    return color
}

console.log(deneme("blue"));


function clarusway() {
    if(true){
        var a = 5;
    }
    console.log(a);
}

clarusway("er");
