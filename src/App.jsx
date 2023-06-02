
import Navbar from './component/navbar-footer/Navbar';
import HomePage from './component/HomePage/HomePage';
import Footer from'./component/navbar-footer/Footer';
 import Articles from './component/articles/articles'; 
 import Send from './component/send/send'
import { Routes, Route} from "react-router-dom";
import './App.css' ;

function App() {
 
  return (
    <>
    <Navbar />
 
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Send />} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
  
      <Footer />
  </>
  )
}

export default App
