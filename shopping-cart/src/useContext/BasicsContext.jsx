// hier den fetch zu den books und basics und die zugehörigen Funktionen?

import { createContext, useEffect, useState } from "react";
import { getProducts } from "../api/basicsData";

const BasicsContext = createContext()

function BasicsContextProvider({children}){

    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts().then(basicProducts => setProducts(basicProducts))
    }, [])

    
    // Hier müsste nichts aufgelöst(kein Prmosie , da kein return ergebniss) werden, da ja nichtsr eturned wird und direkt das gefetchte ergebniss in den State überführt wird.
/*     const getProducts = async () =>{
        const res = await fetch('https://fakestoreapi.com/products');
        const json = await res.json();
        console.log(json);
        setProducts(json);
      } */


    const exportBasicsData = {products, setProducts}
    return(
        <BasicsContext.Provider value={exportBasicsData}>
            {children}
        </BasicsContext.Provider>
    )
}

export {BasicsContext, BasicsContextProvider }