
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <Navbar/>
      <div className='main'>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/product" element={<Products/>}/>
     <Route path="/*" element={<NotFound/>}/>
    </Routes>
    </div>
   <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
