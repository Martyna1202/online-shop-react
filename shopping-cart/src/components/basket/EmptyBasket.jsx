import React from 'react';
import Search from '../../routes/Search';

function EmptyBasket() {
  return (
    <section className='empty-basket-sec'>
        <h1>Your basket is empty</h1>
        <h2>Want to search for something?</h2>
        <Search />
    </section>
  )
}

export default EmptyBasket