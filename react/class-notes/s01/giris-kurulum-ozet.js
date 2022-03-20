// * npm uninstall -g create-react-app  
// globalde olan kurulumu kaldırıyor
//
//! NPM ile kurulum
// * npx create-react-app my-app 
// en güncel version için
// sonra ilgili klasör içinde  //*npm start komutu veriyoruz

// my-app şeklinde eklersek proje dosyası oluşturuyor, kendimizde dosya oluşturabiliriz. 
//* npx create-react-app . şeklinde yazarsak istenilen dosya içinde react dosyaları gelir


//! YARN ile kurulum
// npm i -g yarn  
// yarn kurulumu
// yarn create react-app my-app
// yarn start
// yarn ile react proje dosyası yükleme

// !Kurulması gereken extansions ve yapılması gereken ayarlar
// 1. Name: ES7+ React/Redux/React-Native snippets
//  Link: https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

//  rce, rfce gibi kısaltmalar yazılarak snippets hazır yapıları elde ediyoruz. İstersek özellelleştirebiliyoruz. 

//  2. js ve jsx dosyaları içinde emmet yapabilmek için settings/emmet/include languages içerisine item : javascript value: javascriptreact yazıyoruz.

//  3. VSC terminali default olarak gelen yapıyı, view/command palette/>Terminal:Select Default Profile yazılıyor ve gelen alanda "Git Bash" seçilir.Default

//  4. Seçilen klasörde komutun çalışması için ve terminalde ilgili klasörde başlanması için settings/online services settings/cwd yazıyoruz Terminal>İntegrated alanına
//  ${fileDirname}  ilgili ifade yazıllır.

// ! Genel Mimari

// index.html içerisndebir adet div mevcut bu div'i index.js dosyasında dom ile yakalıyor.

// index.js dosyasının child olarak app.js dosyamız oluyor. app nin içindeki componenet i export ediyor ve index.js tarafından import ediliyor.

// app.js altında kullanılacak js dosyaları belirleniyor. bu dosyaları app.js içinde  <Header/> <Msg/> şeklinde companet içinnde yazıyoruz.
      
      