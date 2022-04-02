// const data = fetch("https://restcountries.com/v3.1/name/Turkey")
// console.log(data);

// fetch("https://restcountries.com/v3.1/name/Turkey").then(response=>{
//     console.log(response)
//     return response.json()
// }).then((data) =>{
//     console.log(data[0].capital)
// })

// fetch bir bilgiyi iki aşamada veriyor. response içinde body nin okunmasıda promise şeklinde oluyor. bu sebeple tekrar then kullanılıyor. ayrıca ilk then de gelen json dosyasını yakalamak için return response.json() olarak çağırmamız lazım. Gelen veri array olduğu için indexleme kullanılarak kullanılıyor


// then ile tanımlanmanı olmadan, kolay yöntemi, async await kullanımı, bu kullanımda bir async fonksiyon yazıyoruz ve bu fonksiyonu await ile çağırıyoruz ilk önce fetch çağırıyruz sonra çağırdığımız fetch içindeki json nı alabilmek için tekrar tanımlama yapıyoruz

// const getCountry = async(countryName)=>{
//     const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     const data = await response.json();
//     console.log(data[0].capital)

// };

// getCountry("Germany")

// *****bağlama****

let newInput = document.querySelector("#input")
let button   = document.querySelector("#search")




const renderCountry = (data, type = 'country') => {
    const flag = data.flags.svg;
    const countryName = data.name.common;
    const region = data.region;
    const capital = data.capital;
    const population = data.population;
    const languages = data.languages;
    const currencies = data.currencies;
  
    const countryHtmlCard = `
      <img src="${flag}" class="card-img-top border border-secondary" alt="Flag" />
      <div class="card-body">
        <h5 class="card-title">${countryName}</h5>
        <p class="card-text">${region}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><span><i class="fas fa-2x fa-landmark"></i>${capital}</span></li>
        <li class="list-group-item"><span><i class="fas fa-lg fa-users"></i>${(
          population / 1_000_000
        ).toFixed(2)} M</span></li>
        <li class="list-group-item"><span><i class="fas fa-lg fa-comments"></i>${Object.values(
          languages
        )}</span></li>
        <li class="list-group-item">
          <span
            ><i class="fas fa-lg fa-money-bill-wave"></i>${
              Object.values(currencies)[0].name
            } ${Object.values(currencies)[0].symbol}
            </span
          >
        </li>
      </ul>`;
    if (type === 'country') {
      const countryHtml = `<div class="container country">
            <div class="row justify-content-center mt-5">
              <div class="card country-card col col-sm-6 col-lg-3 py-3" >
                ${countryHtmlCard}
              </div>
            </div>
            <div class="row justify-content-start neighbour-container">
          </div>`;
      const main = document.querySelector('main');
      main.insertAdjacentHTML('afterbegin', countryHtml);
    } else if (type === 'neighbour') {
      const neighbourHtml = `<div class="card col col-sm-6 col-lg-3 py-3 neighbour">${countryHtmlCard}</div>`;
      const neighbourDiv = document.querySelectorAll('.neighbour-container');
      neighbourDiv[0].insertAdjacentHTML('beforeend', neighbourHtml);
    }
  };
// ******Ülke kartları için*****
const getCountry = async(countryName)=>{
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const data = await response.json();
    // renderCountry(data[0]) // yukarıda belirtilen render func nu  
    // console.log(data[0].capital)
    return data[0]  // aşağıda belirtilen func ile kullanmak için return lu yapı kullandık , üst satırlı renderli func şeklinde de kullanılabilir

};

// const viewCountry = async (countryName)=>{
//     const data = await getCountry(countryName) 
//     renderCountry(data)
//     console.log(data)
// }

// viewCountry("Turkey");


// *****komşuları tanımlamak için******
const getNeighbour = async(countryCode)=>{
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)

    const data = await response.json();

    return data[0]  

};


// https://restcountries.com/v3.1/alpha/{code}

const viewCountry = async (countryName)=>{
    const data = await getCountry(countryName) 
    renderCountry(data);
    
    // const neighbour = await getNeighbour(data.borders[1])
    // renderCountry(neighbour, "neighbour")  tekli indexli şekilde ülkeyi getirir, tüm ülkelerin gelemesi için bir if döngüsü yapıyoruz
    console.log(data.borders)
    if( data.borders){
        // data.borders.forEach(async (item) => {
        //     const neighbour = await getNeighbour(item);
        //     renderCountry(neighbour,"neighbour")            
        // });  foreach ile kullanımı



      for await (const item of data.borders){
          const neighbour = await getNeighbour(item);
          renderCountry(neighbour,"neighbour")
      }
    } 
}


button.addEventListener("click", ()=>{
    viewCountry(newInput.value);
})


