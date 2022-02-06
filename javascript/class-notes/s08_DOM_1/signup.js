//                  Document Object Model(DOM)
// programing interface,dom ile html sayfalarına erişebiliyoruz,elementleri manipüle edebiliyrouz
// dom ile html elementleri js nin objeleri haline geliyor
/* DOM, web belgeleri için bir programlama arabirimidir. Programların belge yapısını, stilini ve içeriğini değiştirebilmesi için sayfayı temsil eder. DOM, belgeyi düğümler ve nesneler olarak temsil eder; bu şekilde, programlama dilleri sayfa ile etkileşime girebilir. */
/* domun bileşenleri :
window: html sayafasındaki görünen herşey
document */
// DOM accessing
/* document.getElementById(selector)
document.getElementsByClassName(selector)
document.getElementsByName(selector)
document.getElementsByTagName(selector)
document.querySelector(selector)
document.querySelectorAll(selector) */

// let firstNameById = document.getElementById("first_name");
// console.log(firstNameById);

// firstNameById.value ="Mesut"  valwe ile isim yazıyor

// let lastNameById = document.getElementById("last_name");
// console.log(lastNameById);

// lastNameById.value = "yıldırım"


// let firstNameByClassName = document.getElementsByClassName("input--style-4");
// console.log(firstNameByClassName);
// html collection olarak döndürür. Kullanılması için array formuna çevrilmesi gerekir

// let firstNameByName = document.getElementsByName("first_name"); 
// console.log(firstNameByName);
// Node list olarak döndürür. Array formuna döndürmeden kullanılır

// let firstNameByName = document.getElementsByName("first_name")[0]; 
// console.log(firstNameByName);

//querySelector => ile çağırma, Id ve clas ile yapılır, Id de #, class da . nokta kullanılır

// let firstNameBySelectorId = document.querySelector("#first_name");
// console.log(firstNameBySelectorId);

// let firstNameBySelectorClass = document.querySelector(".input--style-4");
// console.log(firstNameBySelectorClass);

// let firstNameBySelectorName = document.querySelector("[name=first_name]");
// console.log(firstNameBySelectorName);

// let firstNameBySelectorsInputName = document.querySelector("input[name='first_name']")
// console.log(firstNameBySelectorsInputName);

// getElementsByClassName => Array.from(HTMLCollection).arrayFunc()
// getElementsByName => NodeList.arrayFunc()
// querySelectorAll => NodeList.arrayFunc()

// property vs attribute 


// let firstNameById = document.getElementById("first_name");
// // console.log(firstNameById.getAttribute("id"));
// // console.log(firstNameById.getAttribute("class"));
// // console.log(firstNameById.getAttribute("name"));

// firstNameById.setAttribute("id", "redColor");
// firstNameById.setAttribute("class", "redColorClass");
// // firstNameById.setAttribute("type", "radio")
// firstNameById.setAttribute("color", "red")

// console.log(firstNameById.getAttribute("id"));
// console.log(firstNameById.getAttribute("type"));
// console.log(firstNameById.getAttribute("color"));

// firstNameById.value ="Mesut"

//innerHTML, innerText, textContent, (input=>value)

/* let headerDiv = document.getElementById("headerId");
console.log("innerHTML=>", headerDiv.innerHTML);
// html tag ve içeriği ile gösterir

console.log("innertext=>", headerDiv.innerText);
// taglaerin içindeki textleri veriyor

console.log("tetxcontent =>", headerDiv.textContent);
// yagler varmış gibi çıktı veriyor, taglerin olduğu bölümler boş kalıyor */

/* TASK

let firstNameById = document.getElementById("first_name");
let lastNameById = document.getElementById("last_name");

firstNameById.value = "Mesut"
lastNameById.value = "Yıldırım"

let fullNameById = document.getElementById("full_name");

// fullNameById.value = `${firstNameById.value.toUpperCase()} ${lastNameById.value.toUpperCase()}`

fullNameById.value = firstNameById.value.toUpperCase() +" "+ lastNameById.value.toUpperCase();

let emailById =document.getElementById("email");

email.value = firstNameById.value.toLowerCase()+ "."+lastNameById.value.toLowerCase()+ "@clarusway.com";
 */

//  CREATE LOGO ELEMENT

let headerDiv = document.getElementById("headerId");

let logo = document.createElement("img");
console.log(logo);

logo.setAttribute("src", "img/logo.png");
logo.setAttribute("class", "headerLogo");

// headerDiv.append(logo);
// headerDiv.appendChild(logo);  
// headerDiv.innerHTML += `<img src="img/logo.png" alt="Bank logo" class="nav__logo" id="logo" />` 

// yukarıdaki üç ifade de doğru
