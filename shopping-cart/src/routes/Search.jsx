import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// import data
import { getProductBySearchValue, getProductByCategory} from '../api/articleData'

function Search() {

  const [searchValue, setSearchValue] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchedProducts, setSearchedProducts] = useState([])

  
  function handleChangeByName(e){
    setSearchValue(e.target.value)
  }
  function handleChangeByCategory(e){
    setSearchCategory(e.target.value)
  }

  useEffect(()=>{
    if(searchValue !== ''){
      setSearchedProducts(getProductBySearchValue(searchValue))
    }
  }, [searchValue]);

  useEffect(()=>{
    if(searchCategory !== ''){
      setSearchedProducts(getProductByCategory(searchCategory))
    }
  }, [searchCategory]);


  return (
      <ul className="nav-bar-search">
        <li>
          <p>Search by name</p>
            <input 
              type="search" 
              id="search-input-ByName"
              name="search-input-ByName" 
              placeholder="what are you looking for?"
              onChange={handleChangeByName}
              value={searchValue}
            />
            <p>{searchValue}</p>
            <>
              {searchValue && searchedProducts.map((product)=>{
                return (
                  <div key={product.id} className='search-result-box'>
                    <Link to={`/electronics/${product.id}`}>
                      <h4>{product.title}</h4>
                    </Link>
                  </div>
                )})
              }
            </>
        </li>

        <li>  
          <p>Search by category</p>
          <input 
            type="search" 
            id="search-input-byCat"
            name="search-input-byCat" 
            placeholder="search by category?"
            onChange={handleChangeByCategory}
            value={searchCategory}
          />
          <p>{searchCategory}</p>
          <>
            {searchCategory && searchedProducts.map((product, i)=>{
              return (
                <div key={i} className='search-result-box'>
                  <Link to={`/electronics/${product.id}`}>
                    <h4>{product.title}</h4>
                  </Link>
                </div>
              )})
            }
          </>
        </li>
      </ul>

  )
}

export default Search