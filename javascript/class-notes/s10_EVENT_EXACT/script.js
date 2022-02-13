const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const loading = document.querySelector(".loading");
const countdown = document.querySelector("#countdown");

 

window.addEventListener("load", ()=>{
    loading.style.display = "block";
    // miliseconds in setTimeout
    setTimeout(()=>{
        loading.style.display = "none";
        countdown.style.display = "flex";
    },1000)


//   1. takvim içine toplu şekilde yazdırma yöndemi
//    years.innerHTML = "00";
//    months.innerHTML = "00";
//    days.innerHTML = "00";
//    hours.innerHTML = "00";
//    minutes.innerHTML = "00";
//    seconds.innerHTML = "00";


// 2.yöntem
   let H2Elements = document.getElementsByTagName("h2");
   console.log(H2Elements);
//    for (let index = 0; index < H2Elements.length; index++) {
//      H2Elements[index].innerHTML = "00"
       
//    }

// 3.yöntem  forEach() ile gösterme, index sistemi yok, fakat nodeList olması gerekiyor

let H2Elements2 = countdown.querySelectorAll("h2");
console.log("H2Elements2", H2Elements2)

// H2Elements2.forEach(element => {
//     element.innerHTML = "00";

// })


//  CONVERT TO ARRAY FROM HTML COLLECTİON 

// 1.yöntem
   Array.from(H2Elements).forEach(el =>{
       el.innerHTML = "00";
   })
// 2.yöntem
// [...H2Elements].forEach(el =>{
//     el.innerHTML = "00";
// })

});

let selectedBirthday;

let birthdayInput = document.querySelector("input[name=birthday]");
 birthdayInput.addEventListener("change",(event)=>{
      console.log("dateString", event.target.value);
    //   event.target.value == birthdayInput.value
    //   convert to date from dateString
    selectedBirthday = new Date(event.target.value)
    console.log("dateObject", selectedBirthday);
    if(selectedBirthday > new Date()){
        alert("Doğum tarihiniz bugünden büyük olamaz!!")
        return; 
    }

    // if te şartın sağlanmaması durumunda bir sonraki koda geçmemesi için return eklenir

    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')";


    loading.style.display =
    setInterval(updateCoutdown, 1000);
    setTimeout(()=>{
        loading.style.display = "none";
        countdown.style.display = "flex";
    },1000)

    
 });

 const updateCoutdown = () =>{

    let dobYear = selectedBirthday.getFullYear();
    let dobMonth = selectedBirthday.getMonth();
    let dobDay = selectedBirthday.getDate();
    let dobHours = selectedBirthday.getHours();
    let dobMinutes = selectedBirthday.getMinutes();
    let dobSeconds = selectedBirthday.getSeconds();

    let now = new Date();

    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDay = now.getDate();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    let currentSecond = now.getSeconds();
    
    // if positive
    let yearOfAge = currentYear-dobYear;
    let monthOfAge = currentMonth-dobMonth;
    let dayOfAge = currentDay-dobDay;
    let hourOfAge = currentHour-dobHours;
    let minuteOfAge =currentMinute-dobMinutes;
    let secondsOfAge = currentSecond-dobSeconds;

    

    if(dayOfAge < 0 ){
        dayOfAge +=30;
        monthOfAge --;
    }



    if(monthOfAge < 0) {
        monthOfAge += 12;
        yearOfAge--;
    }

    // Add values  to DOM

    years.innerHTML = yearOfAge.toString().padStart(2,"0")
    months.innerHTML = monthOfAge.toString().padStart(2,"0")
    days.innerHTML = dayOfAge.toString().padStart(2,"0")
    hours.innerHTML = hourOfAge.toString().padStart(2,"0")
    minutes.innerHTML = minuteOfAge.toString().padStart(2,"0")
    seconds.innerHTML = secondsOfAge.toString().padStart(2,"0")




 }







































































































































































































































































































































































































































































