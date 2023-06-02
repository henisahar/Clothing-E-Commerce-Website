import Cart from "../popular/Cart";
import Send from "../send/send";
import Home from "../Home/Home";
import Cards from '../cards/cards';
import './HomePage.css';

function HomePage(){

  return (  
    <div className="container">
       <Home className="Home" />
        <Cart  className="Cart"/>
        <Cards/>
        <Send/>
    </div>  
   
       
   
  )

}

export default HomePage;