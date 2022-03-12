// const data = fetch("https://restcountries.com/v3.1/name/Turkey");

// console.log(data)

// fetch("https://restcountries.com/v3.1/name/Turkey").then(response=> {console.log(response)
// ;
// return response.json()
// })
// .then((data)=>{
//     console.log(data);
//     console.log(data[0].capital, data[0].name.common); //burada index ile alıyoruz array içinde olduğu için
// })

// then yapısı geliştikten sonra await async yapısı kullanılıyor
const renderCountry = (data, type = 'country') => {
    // const flag = data.flags.svg;
    // const countryName = data.name.common;
    // const region = data.region; // const {region} = data; bu işlem aynı
    // const capital = data.capital;
    // const population = data.population;
    // const languages = data.languages;
    // const currencies = data.currencies;

    // yukarıdaki tanımlamaları aşağıdaki gibi yaparız, objele olanları { ile tanımları} yeniden isimlendirmek için  : koyduktan sonra yeni ismi yazarız.

    const {
        region, 
        population, 
        capital, 
        languages, 
        currencies,
        name:{common: countryName}, 
        flags:{svg:flag}
    } = data;
  



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

let globalData ="henüz boş"

const getCountry = async (countryName) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`); // buradaki ${countryName} yada direk ülke ismide olur

    console.log(response)
    if(!response.ok) throw new Error(response.status.Text)

    const data = await response.json()
    // renderCountry(data[0])  burada da çalışır fakat daha işlevli olsun diye aşağıdaki viewCountry fonsiyonu ile kullandık

    return data[0];
    
    // console.log(data);
    // console.log(data[0].capital, data[0].name.common);
}


// yukarıdaki json verisini rernder func da kullanmak için aşağıdaki fonsiyonda çağırdık


// https://restcountries.com/v2/alpha/{code}

const getNeighbour = async (countryCode) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
    const data = await response.json();
    return data[0];
  };


  const renderError = (msg) => {
    const inputContainer = document.querySelector('.input-section');
    const errorHtml = document.createElement('div');
  
    errorHtml.classList.add('alert', 'alert-danger', 'alert-container');
    errorHtml.innerText = msg;
    inputContainer.insertAdjacentElement('beforeend', errorHtml);
    setTimeout(()=>{
        errorHtml.remove();
    },3000)
  };
const viewCountry = async (countryName) => {
    try { //gelebileck hata için try bloğuna aldık
        const data = await getCountry(countryName);
        renderCountry(data);
      
        console.log(data.borders);
        // const neighbour = await getNeighbour(data.borders[0]);
        // renderCountry(neighbour, 'neighbour');
        // const neighbour2 = await getNeighbour(data.borders[3]);
        // renderCountry(neighbour2, 'neighbour');
    
    
        //tüm komşuları yapmak için foreach ile yaptık, yukarıda ise sadece indexliyerek geldi
    
        if(data.borders){   
            // data.borders.forEach(async (item) => {
            //     const neighbour = await getNeighbour(item);
            //     renderCountry(neighbour, 'neighbour');
                
            // });
    
            // burada da for of ile çağırdık, for of da async yazılmasına gerek yok 
            for await (const item of data.borders) {
                const neighbour = await getNeighbour(item);
                renderCountry(neighbour, 'neighbour');    
        }
      } else{ //burada hata bloğu oluşturduk
          console.log("komşu yok");
          throw new Error("No Neighbour")
      }
    } catch (error) {
       console.log(error) 
    }  
};
  
  viewCountry('Australia');
  



// console.log(globalData) // global de olduğu için ilk önce çıkar sonra async ler çalışır



