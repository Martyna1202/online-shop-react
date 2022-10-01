import React from 'react';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { BasicsContext } from '../useContext/BasicsContext';
import { useEffect } from 'react';

function Basics() {

 const { products } = useContext(BasicsContext);

 useEffect(() => {
  console.log(products);
 }, [products]);

  return (
    <main>
      <h1>Basics, Jewelery and Elecronics</h1>
      <section>
      {
        products.map((product, i) => {
          return (
            <div key={product.id} className="home-card" >
              <div className="home-div-image">
                <img src={product.image} alt={product.description} className='home-article-image'/>
              </div>
              <div>
                <h2>{product.title}</h2>
                <h3>€ {product.price.toFixed(2)}</h3>
                <p>{product.rating.rate}/ 5 Stars of {product.rating.count} ratings.</p>
                <Link to={`/basics/${product.id}`}>
                  <button>Show Details</button>
                </Link>
              </div>
            </div>
            )
          })
        }
        </section>
    </main>
      
  )
}

export default Basics