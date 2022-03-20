// import { WHW,WORKING_HOURS_WEEK as hrs, dec, inc, sum} from './mymodule.js';

//  çağrılacak olan modul dosyaını tanımlarken ./ şeklinde ilerleyeniyor
// yukardaki import işleminde default harici değişkenler ve func lar mevcut
//  eğer default olarak tanımlanmış değişkenler var ise iki yöntemi mevcut;
// 1. yöntem import ile süslü paranteaz arasına yazılır
//
//  2. yöntem ise süslü parantez içine default as square şeklinde yazılır

import square,{WHW,WORKING_HOURS_WEEK as hrs, dec, inc, sum, counter} from './mymodule.js';


// import { default as square WHW,WORKING_HOURS_WEEK as hrs, dec, inc, sum} from './mymodule.js';

console.log('WHW :>> ', WHW);
console.log('hrs :>> ', hrs);
console.log('square(4) :>> ',square(4) );

console.log(inc(4))
console.log(inc(6))
dec();
console.log('dec() :>>', dec());
console.log('sum(3,15) :>>', sum(3, 15)); 
// counter = 25; // sabit olarak geliyor const gibi davranıyor
console.log('counter:>>', counter); 

// modul dosyaları import edilerek kullanılıyor, modulu çağırdığımız ve kullandığımız sayfaları html dosyfamızla eşleştirme yapıyoruz, yapılan eşleştirme sırası ile işleme alınıyor, kullanılan inc() tek bir yerden işleme alınıyor bu sebeple mymodul2 de inc çağrıldığında 108 olarak geldi
