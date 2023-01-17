import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/category/:id'  element={<Home />} />
      <Route path='/item/:id'  element={<ItemDetailContainer />} />
    </Routes>
    
  );
}

export default App;
