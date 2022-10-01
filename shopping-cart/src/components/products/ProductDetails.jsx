import { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, getProducts} from '../../api/articleData';
import { CardContext } from "../../useContext/CardContext";
// import basketSvg from '../../assets/green-shopping-cart-10909.svg'

function ProductDetails() {

  const { handleAddToBasket } = useContext(CardContext);
  const [detailProduct, setDetailProduct] = useState(null);
  
  let navigate = useNavigate()
  let products = getProducts();

  const params = useParams();
  let product = getProductById(params.electronicId);
  

  // open and close detail-view
  function handleClose (){
    navigate('/')
  }

  const clickedProduct = products.find((el) => el.id === product.id);
  console.log(clickedProduct)

  //  if product is clicked open window with details
  useEffect(() => {
    if(product) {
      if(clickedProduct){

        setDetailProduct(clickedProduct);
      }else{
        setDetailProduct(product);
      }
    }
  },[product]);
  

  return (
    <div className="relativeBox" >
      {
        detailProduct ? 
          <section className="sec-details">
            <h2>Details</h2>
          
            <div className="detail-div-image">
              <img src={detailProduct.imageUrl} alt={detailProduct.altImageUrl} className='detail-article-image' />
            </div>
            <div className="detail-div-info">

              <h2>{detailProduct.name}</h2>
              <h3>€ {detailProduct.price}</h3>
              <h4 className={detailProduct.isAvailable ? 'green' : 'red'}>{detailProduct.description}</h4>
              <h4 className={detailProduct.isAvailable ? 'green' : 'red'}>{detailProduct.isAvailable ? "This Product is actually available!!!" : "This Product is actually NOT available!!! Want to look for a new one?" }</h4>
              <h4>In stock : {detailProduct.inStock > 1 ? `${detailProduct.inStock} articles` : `${detailProduct.inStock} article`}</h4>

              <button onClick={()=> handleAddToBasket(detailProduct.id)}>add to card</button>
              <button onClick={handleClose}>Close</button>              
              <button onClick={()=> navigate('/basket')} className='basketSvg'><h2>Basket</h2></button>

            </div>
          </section>
      : <div></div>}

      </div>
  )
}

export default ProductDetails;

{/* <img src={basketSvg} alt='SVG basket' /> */}