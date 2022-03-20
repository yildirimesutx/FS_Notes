// fetch ve api kullanımı

// const data = fetch("https://restcountries.com/v3.1/name/Turkey")

// console.log(data)
// bu şekilde yazınca tek seferde kodu çalıştırtığından api den bilgileri alamıyor. Bu sebeple then veya async/await ile kullanılmalıdır

fetch("https://restcountries.com/v3.1/name/Turkey")
.then((response)=>{
    console.log(response)
    return response.json()
})
.then((data)=>{
    console.log(data[0].capital)
})




const getCountry = async () =>{
    const response = await fetch("https://restcountries.com/v3.1/name/Turkey")
   
    console.log(response)
    const data = await response.json()
    return data[0];

    console.log(data)

}

getCountry()