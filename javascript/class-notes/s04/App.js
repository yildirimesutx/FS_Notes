// Conditionals

// let score = 48

// let score = +prompt('Notunuzu girin : ')

// let grade = score >= 50

// console.log(grade);

// if (grade) console.log(`Tebrikler, notunuz ${score} geçtiniz`);

// console.log('kod sonu');


// if (grade) {
//     console.log(`Tebrikler, notunuz ${score} geçtiniz`);
        
// } else {
//     console.log('Üzgünüm kaldınız');
    
// }

// let score = 75

// if (score > 80) {
//     console.log('Tebrikler çok başarılı öğrencisiniz');
    
// } else if (score >= 50) {
//     console.log(`Tebrikler, notunuz ${score} geçtiniz`);
    
// }else{
//     console.log('Üzgünüm kaldınız');
// }

// let score = 49

// if (score >= 50) {
    
//     if (score > 80) {
//         console.log('Tebrikler çok başarılı öğrencisiniz');
//     }else{

//         console.log('Tebrikler geçtiniz');
//     }
    
// }else{
//     console.log('Üzgünüm kaldınız');
// }


//Ternary if

// var score = 46;

// // score >= 50 ? console.log('Tebrikler geçtiniz') : console.log('Üzgünüm kaldınız');

// score >= 80 ?  console.log('Tebrikler çok başarılı öğrencisiniz') :
//  (score >= 50 ? console.log('Tebrikler geçtiniz') : console.log('Üzgünüm kaldınız'))

//switch yapısı

// var text;
// var fruits = 'Lemon';

/* var fruits = prompt('Enter your favorite fruit :')
// console.log(fruits.toLowerCase());

//toLoWercase()

switch (fruits.toLowerCase()) {
    case "banana":
        text = "Banana is good"
    break;
    case "lime":
    case "lemon":
    case "orange":
        text = `I am not a fan of ${fruits.toLowerCase()}.`;
    break;

    case "apple":
        text = "How you like them apples?";
    break;

    default:
        text = "I have never heard of that fruit...";
        break;
}

console.log(text); */


// pazartesi çarşamba perşembe cumartesi in class
// salı cuma team work
// pazar tatil
// default yanlış gün girildi.


//leap year
/* var year = 2152;
var month = 2;
var dayCount;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
        break;
    case 2:
        if (((year % 4 == 0) && !(year % 100 == 0))
            || (year % 400 == 0))
            dayCount = 29;
        else
            dayCount = 28;
        break;
    default:
        dayCount = -1; // invalid month
}

console.log(dayCount); // 29 */

/* let score = 81;
let grade = score > 80

if (grade) {
    console.log('Tebrikler çok başarılı öğrencisiniz');
    
} else if (score >= 50) {
    console.log(`Tebrikler, notunuz ${score} geçtiniz`);
    
}else{
    console.log('Üzgünüm kaldınız');
}
 */