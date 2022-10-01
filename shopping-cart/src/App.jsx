import { Routes, Route, Link } from "react-router-dom";

// routes
import Home from './routes/Home';
import Search from './routes/Search';
import NotFound from "./routes/NotFound";
import Basket from "./routes/Basket";
import Payment from "./routes/Payment";
import Bestseller from "./routes/Bestseller";
import Basics from "./routes/Basics"


// components
import Header from "./components/Header";
import EmptyBasket from './components/basket/EmptyBasket';
import ProductDetails from "./components/products/ProductDetails";
import BasicsDetails from "./components/products/BasicsDetails";

function App() {

  return (
    <div className="App">
      
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='search' element={<Search />} />

        <Route path="/electronics/:electronicId" element={<ProductDetails />} />

        <Route path='basics' element={<Basics />} />
        <Route path='basics/:basicProductId' element={< BasicsDetails />} />

        <Route path='bestseller' element={<Bestseller />} />

        <Route path='basket' element={<Basket />}>
            <Route path="basket/payment" element={<Payment />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App
