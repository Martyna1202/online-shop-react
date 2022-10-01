import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CardContext } from '../../useContext/CardContext'

import {getProductById} from '../../api/basicsData';

function BasicsDetails() {

  const { basket, setBasket } = useContext(CardContext)
  const [product, setProduct] = useState(null);
  
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    console.log(basket);
  },[basket])

  useEffect(() => {
    getProductById(params.basicProductId).then(product => setProduct(product))
  }, [])
   //  add products to basket
   function handleAddToBasket (id){
  
    const isAlreadyInBasket = basket.find( (product)=> product.id === id);

     if(isAlreadyInBasket){
      
      const increaseAmount = basket.map((product) => 
        product.id === id ? {
          ...product,
          amount: product.amount + 1
        } 
        : product
      )
      setBasket(increaseAmount)

    } else { 
      setBasket([...basket,{...product, amount: 1}])    

    }
  }

 
  return (
    <div className="relativeBox" >
      <h1>BasicsDetails</h1>
      {
        product ? 
          <section className="sec-details">
            <h2>Details</h2>
          
            <div className="detail-div-image">
              <img src={product.image} alt={product.description} className='detail-article-image' />
            </div>
            <div className="detail-div-info">

              <h2>{product.title}</h2>
              <p>{product.description}</p>

              <h3>€ {product.price.toFixed(2)}</h3>
              <p>{product.category}</p>

             
              <button onClick={()=> handleAddToBasket(product.id)}>add to card</button>
              <button onClick={()=> navigate('/basics')}>Close</button>              
              <button onClick={()=> navigate('/basket')}><h2>Basket</h2></button>

            </div>
          </section>
      : <div></div>}

    </div>
  )
}

export default BasicsDetails


    // function getProductBySearchValue(searchValue){
    //     return products.filter(product =>{
    //         return product.title.toLowerCase().includes(searchValue.toLowerCase())
    //     })
    // }


    // function getProductByCategory(searchValue){
    //     let foundCategory = products.filter((product)=> product.category);
    //     console.log(foundCategory)
    //     return foundCategory
    // }