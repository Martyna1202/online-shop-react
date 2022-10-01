import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../../routes/Search";
import { CardContext } from "../../useContext/CardContext";



function BasketDetails() {

  const { basket, setBasket, total, basketLength } = useContext(CardContext);
  let navigate = useNavigate();

  function goBackToShop(){
    navigate('/')
  }
  function checkOut(){
    navigate('/payment')
  }

  function deleteItem (id) {
    const itemToDelete = basket.find((el) => el.id === id)   // nur das angeklickte Objekt 

    // itemToDelete.amount = itemToDelete.amount - 1;

    if(itemToDelete.amount > 1){
      const result = basket.map((el)=> el.id === id ? {...el, amount: el.amount - 1} : el);
      setBasket(result)
    } else {
      const result = basket.filter((el)=> el.id !== id);
      setBasket(result)
    }
  }

  //  input field with amount of one product
  function handleChange (e, id){
    console.log(e.target.value, id)
  }

  // function handleDecrease(id){
  //   const decreaseAmount = basket.map((el)=> el.id === id ? {...el, amount: el.amount > 1 ? el.amount - 1 : el.amount} : el);
  //   setBasket(decreaseAmount)
  // }
  function handleIncrease(id){
    const increaseAmount = basket.map((el) => el.id === id ? {...el, amount: el.amount + 1} : el);
    setBasket(increaseAmount)
  }


  return (
    <div className="showBasket-box">
      <h1>Show Basket</h1>
      <h3>Products in your basket: {basketLength === 0 ?  <Search /> : basketLength }</h3>
      {
        basket.map((product, i)=>{
          return(
            <section key={i} className='showBasket-sec'>
              <p>{i +1}.</p>
              <h2 className="basket-title">{product.title}</h2>
              <p>€ {product.price}</p>
              <p>amount: {product.amount}</p>
              <div>
                <button onClick={()=> deleteItem(product.id)} className="up-down-btn">-</button>
                <input 
                  type='text'
                  className="showBasket-amount" 
                  value={product.amount}
                  onChange={(e)=> handleChange(e, product.id)}
                  />
                <button onClick={()=> handleIncrease(product.id)} className="up-down-btn">+</button>
                <button onClick={checkOut} className="showBasket-buy-button">Buy</button>
                <button onClick={()=> deleteItem(product.id)} className="showBasket-delete-button">Delete</button>
              </div>
            </section>
          )
        })
      }
      <h2>Sum of basket: {total}</h2>
      <h2>Products in basket: {basketLength}</h2>
      <button onClick={goBackToShop}>go back to shop</button>
      {basket.length > 0 && <button onClick={checkOut}>check out</button>}
    </div>
  )
}

export default BasketDetails