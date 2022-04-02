

// 1. yöntem FETCH

// fetch("https://restcountries.com/v3.1/name/Turkey")
// .then(mesut=>mesut.json())
// .then(yıldırım=>console.log(yıldırım[0].capital))

// 2.yöntem ASYNC

// const mesut = async()=>{
//     const yıldırım = await fetch("https://restcountries.com/v3.1/name/Turkey")
//     const my = await yıldırım.json();
//     console.log(my[0].name)
// }


// mesut()

// fetch bir bilgiyi iki aşamada veriyor. response içinde body nin okunmasıda promise şeklinde oluyor. bu sebeple tekrar then kullanılıyor. ayrıca ilk then de gelen json dosyasını yakalamak için return response.json() olarak çağırmamız lazım. Gelen veri array olduğu için indexleme kullanılarak kullanılıyor


// then ile tanımlanmanı olmadan, kolay yöntemi, async await kullanımı, bu kullanımda bir async fonksiyon yazıyoruz ve bu fonksiyonu await ile çağırıyoruz ilk önce fetch çağırıyruz sonra çağırdığımız fetch içindeki json nı alabilmek için tekrar tanımlama yapıyoruz

// 3. YÖNTEM useEffect içinde çalıştırıyoruz, axios kütüphanesi indirilmesi ve import edilmesi react için  

// useEffect(()=>{
//     axios.get("https://restcountries.com/v3.1/name/Turkey").then((mesut)=>{
//         console.log("naber", mesut)
//     })
  
//   },[]) 

// 4.yöntem axios await


// useEffect(async ()=>{

//     const rest = await axios.get("https://restcountries.com/v3.1/name/Turkey")
  
//   console.log( "naber", rest)
  
//   },[])

