import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/productos'  element={<ItemListContainer />} />
      <Route path='/productos/categories/:id'  element={<ItemListContainer />} />
      <Route path='/item/:id'  element={<ItemDetailContainer />} />
    </Routes>
    </>
  );
}

export default App;
