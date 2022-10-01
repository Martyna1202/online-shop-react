import { useContext } from "react";
import { CardContext } from "../../useContext/CardContext";
import { Link } from "react-router-dom"


export default function ProductsOverview() {

  const { products } = useContext(CardContext);

  return (
    <>
      <section>
        {
          products.map((product, i)=>{
            return(
              <div key={product.id} className="home-card" >
                <div className="home-div-image">
                  <img src={product.imageUrl} alt={product.altImageUrl} className='home-article-image' />
                </div>
                <div>
                  <h2>{product.name}</h2>
                  <h5 className={product.isAvailable ? 'green' : 'red'}>{product.description}</h5>
                  <h3>{product.price} €</h3>
                    <Link to={`/electronics/${product.id}`}>
                      <button>Show Details</button>
                    </Link>
                </div>
              </div>
            )
          })
        }
      </section>
    </>
  )
}