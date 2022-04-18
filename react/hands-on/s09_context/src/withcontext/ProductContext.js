import React, {createContext, useState} from "react"

export const ProductContext = createContext()

// diğer componentlerde kullanmak maksadıyla export ettik

const initialProducts = [
    { id:0, product: "Basketball", price: 12 },
    { id:1, product: "Baseball", price: 9 },
    { id:2, product: "Tennis Racquet", price: 89 }
]






export const ProductProvider = (props)=>{
    const [products, setProducts] = useState(initialProducts)

    const increasePrice = (id)=> {
   
        console.log("increasePrice", id);
        const newProducts = [...products];
        newProducts[id].price += 1;
        setProducts(newProducts)
    
    
    }
    
    const decreasePrice = (id)=> {
       
       const newProducts = [...products];
       newProducts[id].price -= 1
       setProducts(newProducts)
    
    }


return(
    <ProductContext.Provider value={{products,decreasePrice,increasePrice }}>
       {props.children}
    </ProductContext.Provider>
   )  
}

// bir adet context sayfası oluşturuyoruz, bu oluşturduğumuz contextle app.js si sarmarlıyoruz.

// buraya ürün listesi ve kullanılacak funcları tutuyoruz

//  kullanacağımız sayfada const {increasePrice, decreasePrice } = useContext(ProductContext) şeklinde,useContext ile discartla alıyoruz 