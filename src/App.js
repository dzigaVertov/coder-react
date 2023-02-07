import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart.js';
import CartContextProvider from './components/CartContextProvider.js';


function App() {
    return (
        <CartContextProvider>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/productos' element={<ItemListContainer />} />
                <Route path='/productos/categories/:id' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </CartContextProvider>
  );
}

export default App;

