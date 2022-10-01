import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../../routes/Search';
import { CardContext } from '../../useContext/CardContext';

function Navigation() {
    const { total, basketLength } = useContext(CardContext);

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/home'><h2>Home</h2></NavLink>
                </li>
                <li>
                    <NavLink to='basics'><h2>Basics</h2></NavLink>
                </li>
                <li>
                    <NavLink to='bestseller'><h2>Bestseller</h2></NavLink>
                </li>
            </ul>

            <div className='header-basket'>
                <NavLink to='basket'>
                    <ul>
                        <li>
                            <h2>products: {basketLength}</h2> 
                            <h2>Total: {total}€</h2>
                        </li>
                    </ul>
                </NavLink>
            </div>
        <section className='second-nav-bar'>
            <Search />
        </section>
        </nav>

    )
}

export default Navigation