import { createContext, useState, useEffect } from "react";
import { getProducts } from "../api/articleData";


const CardContext = createContext();

const CardContextProvider = ({children}) =>{

  //  data
  const products = getProducts();

  //****** Basket & BasketDetails ***** */
  const [basket, setBasket] = useState(() => JSON.parse(localStorage.getItem('basket')) || []);
  const [total, setTotal] = useState(0);
  const [basketLength, setBasketLength] = useState(0)

  //  add products to basket
  function handleAddToBasket (id){
    const findMyProduct = products.find((el)=> el.id === id);

    const isAlreadyInBasket = basket.filter( (el)=> el.id === id);

    if(isAlreadyInBasket.length > 0){
      if(isAlreadyInBasket[0].inStock === 0 ||  isAlreadyInBasket[0].inStock < 0) return alert("Not in Stock");
      const increaseAmount = basket.map((el) => el.id === id ? {...el, amount: el.amount + 1, inStock: el.inStock - 1} : el)
      setBasket(increaseAmount)
    } else { 
      setBasket([...basket, {...findMyProduct, amount: 1, inStock: findMyProduct.inStock - 1}])
    }
  }

  //****** Products *********** */
  //  setzen der ProductId um die korrekten Produkt-Details anzuzeigen
  const [productId, setProductId] = useState(null);

  // ****** useEffect on basket ********************** 
  useEffect(()=>{
     //  basket & localStorage SET item
    localStorage.setItem('basket', JSON.stringify(basket))

    //  useEffect amount of products in basket
    const myBasketLength = basket.reduce((acc, curr)=>{
      acc += curr.amount;
      return acc
    }, 0)
    setBasketLength(myBasketLength)

    //  useEffect amount of products in basket
    const myTotalResult = basket.reduce((acc, curr)=>{
      acc += curr.price * curr.amount;
      return acc
    }, 0)
    setTotal(myTotalResult.toFixed(2))

  }, [basket])


  //    export data

    const exportData = { 
        products,
        basket,
        setBasket,
        handleAddToBasket,
        productId, 
        setProductId,
        total,
        setTotal,
        basketLength, setBasketLength
    }

    return(
        <CardContext.Provider value={exportData}>
            {children}
        </CardContext.Provider>
    )
}


export { CardContext, CardContextProvider }