import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Products from "./components/Products";
import Welcome from "./components/Welcome";
import NavBar from './components/NavBar';
import Profile, { Courses, About } from './components/Profile';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/products' element={<Products />} >
          <Route path=':id' element={<ProductDetail />} />
        </Route>
        <Route path='/profile' element={<Profile />}>
          <Route path='about' element={<About />} />
          <Route path='courses' element={<Courses />} />
        </Route>
        <Route path='*' element={<h1>404 Page not found</h1>} />
      </Routes>
      <footer>Made by MindX</footer>
    </div>
  );
}

export default App;
