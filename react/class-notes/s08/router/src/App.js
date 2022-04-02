import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
   
     <div className="main">
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/products" element={<Products />}/>
    <Route path="/details/:id" element={<Details />}/>
    <Route path="*" element={<NotFound />}/>
     </Routes>
     </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
