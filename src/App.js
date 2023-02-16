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
                <Route path='/coder-react' element={<Home />} />
                <Route path='/coder-react/productos' element={<ItemListContainer />} />
                <Route path='/coder-react/productos/categories/:id' element={<ItemListContainer />} />
                <Route path='/coder-react/item/:id' element={<ItemDetailContainer />} />
                <Route path='/coder-react/cart' element={<Cart />} />
                <Route path='/coder-react/contacto' element={<Home />} />
            </Routes>
        </CartContextProvider>
    );
}

export default App;

