import { Routes, Route } from 'react-router-dom';
import Home from './compoinents/Home';
import PokemonDetail from './compoinents/PokemonDetail';

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon/:name' element={<PokemonDetail />} />
      </Routes>
      <footer>Made by Mindx</footer>
    </div>
  );
}

export default App;
